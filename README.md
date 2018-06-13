# Waves Server | Based on Mathnet's Server #

[TOC]

### What is this repository for? ###
The server side of the Waves app.

***

### Dependencies ###
* npm
* Node.js
* Socket.io
* MySQL
* PM2 (optional)

***

### Installation & Setup ###

#### OSX ####

First, you will want to install git, npm, Node.js, and MySQL if you haven't already. We'll be using brew.
```
brew update
brew install git node mysql
brew doctor
```

If you had to install MySQL, you'll need to set it up. 

Once MySQL is setup, be sure to start the MySQL server. **Your MySQL server needs to be at least version 5.6.**

Next, you'll want to clone this repository using git clone.

Move into this new directory.

From there, you'll need to create a `secrets.js` file. The format should be the following but filled in with your database credentials (and what you wish your database and tables to be named):

```
#!javascript
module.exports = {
    host:"localhost",
    user:"root",
    password:"password",
    database:"database_name",
    class_table: "classes",
    group_table: "groups",
    toolbar_table: "toolbars",
    session_table: "sessions",
    admin_table: "admins",
    log_table: "logs",
    xml_table: "xml"
}
```

Once you have created secrets.js, you need to install the node modules for the project by running `npm install`.

After installation, you then run `node create_database.js` to create the necessary schema in MySQL.

Now, you are ready to run the server. To do so, run `node server.js`. You can then navigate to wherever the server is running and add the correct port number to the url.
For example, if running on `localhost` and `port 8888`, you would go to [http://localhost:8888/](http://localhost:8888/).

By default, the port number is set to `8888`, but if you wish to change it, simply open `server.js` and edit the port number on **line 2**. The line should look like this `var port = 8888;`.

#### Linux (Ubuntu) ####

First, you will want to install git, npm, Node.js, and MySQL if you haven't already using `apt-get`.

```
sudo apt-get update
sudo apt-get install git nodejs mysql-server-5.6
```

The server setup is the same as OSX except instead of using the command `node` to start the server and create the database, you want to use the command `nodejs`.

You can also make a symbolic link instead if you want to use `node`. `sudo ln -s /usr/bin/nodejs /usr/bin/node`

***

### How To Run Server as Daemon using PM2 ###
1. SSH into Linux server
2. Install PM2: sudo npm install pm2 -g
3. Start the communication server using `pm2 start server.js`
4. More details at [http://pm2.keymetrics.io/docs/usage/quick-start/](http://pm2.keymetrics.io/docs/usage/quick-start/)

***
