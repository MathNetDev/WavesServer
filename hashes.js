"use strict";
var Q = require('q');
var database = require('./database_actions');
// Holds the hashed strings which act as class ids
var hashes = {};

// Creates a hash that is added to JSON object
exports.add_hash = function(class_id) {
    var deferred = Q.defer();
    
    while (true) {
        var hash = Math.random().toString(36).substr(2, 8).toLowerCase();   
        if (!(hash in hashes)) {
            hashes[hash] = class_id;
            database.add_hashed_id(class_id, hash)
            .then(function() {
                deferred.resolve(hash);
            }).fail(function(error) {
                deferred.reject(error);
            });
            break;
        }
    }

    return deferred.promise;
}

exports.insert_id_and_hash = function(class_id, hash) {
    var deferred = Q.defer();

    if (!(hash in hashes)) {
        hashes[hash] = class_id;
        deferred.resolve();
    }
    else {
        deferred.reject("Hash " + hash + " already maps to a class ID");
    }

    return deferred.promise;
}

// Removes hash from the JSON object
exports.remove_hash = function(hash) {
    var deferred = Q.defer();

    delete hashes[hash];
    deferred.resolve();
    return deferred.promise;
}

// Finds class id based off hash
exports.find_id = function(hash) {
    var deferred = Q.defer();

    if (hash in hashes) {
        deferred.resolve(hashes[hash]);
    }
    else {
        deferred.reject("Class ID does not exist");
    }

    return deferred.promise;
}
