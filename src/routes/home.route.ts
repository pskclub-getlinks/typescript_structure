import { hello } from '../controllers/home.controller';

export const homeRoute = [{
    method: 'GET',
    path: '/{name}',
    handler: hello
}];

