# File -> New -> Project - Tickets application sample with NineJS and TypeScript


## Requirements

    npm install -g grunt-cli

## Watching the presentation

To watch the presentation you must globally install http-server

    npm install -g http-server

run npm install

    npm install
    
Then run grunt scm:revealjs to properly download reveal.js and then

    grunt scm --reset=hard
    cd presentation
    http-server
    
This will start a web server probably on port 8080 then go to http://localhost:8080/


## Building the app

run npm install

    npm install
    
run grunt

    grunt

pull dependencies

	grunt scm --reset=hard

At this point make sure you have a CouchDB instance running in localhost port 5984 or you will have to configure that manually in 9js.config.json

	couchdb start
    
start the application

    node --harmony single
    
This will start the application on port 2352 then go to http://localhost:2352/ 
Username is "admin", password is "password"
You can create tickets, for the moment, only in the Manage Tickets part

