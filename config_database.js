"use strict";
// this has the values that customize the database created in create_database.js
var secrets = require('./secrets');
module.exports = {
    'connection': {
        'host': secrets.hosts,
        'user': secrets.user,
        'password': secrets.password
    },
	'database': secrets.database,
    'class_table': secrets.class_table,
    'group_table': secrets.group_table,
    'admin_table' : secrets.admin_table,
    'session_table' : secrets.session_table,
    'log_table' : secrets.log_table
};
