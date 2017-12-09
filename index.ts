import {createServer, plugins} from 'restify';

import {deletePerson} from './delete-person';
import {contacts} from './contacts';
import {insert} from './insert-person';

var server = createServer();

// Add bodyParser plugin for parsing JSON in request body
server.use(plugins.bodyParser());

// Add routes
server.get('/contacts', contacts);
server.post('/contacts', insert);
server.del('/contacts/:id', deletePerson);

server.listen(8080, () => console.log('API is listening'));