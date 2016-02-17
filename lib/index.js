'use strict';

const Blee = require('./package.json');

const Hapi = require('hapi');

//create a server with host and port
const server = new Hapi.Server();
server.connection({
    host: 'localhost',
    port: 8000
});

//Add a route
server.route({
    method: 'GET',
    path: '/version',
    handler: function (request, reply){

        return reply(Blee.version);
    }
});

//Add another route
server.route({
    method: 'GET',
    path: '/hello',
    handler: function (request, reply){

        return reply('Hello happy world!');
    }
});

//start the server
server.start((err) => {

    if (err){
        throw err;
    }
    console.log('Server running at: ', server.info.uri);
});
