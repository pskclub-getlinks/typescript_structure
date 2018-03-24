/// <reference types="node" />
import * as Hapi from 'hapi';
import { routes } from './routes';
require('dotenv').config();

const server = Hapi.server({
    port: process.env.PORT,
    host: process.env.HOST
});

server.route(routes);

const init = async () => {
    await server.start();
    console.log(`Server running at: ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();