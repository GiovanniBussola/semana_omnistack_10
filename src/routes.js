const { Router } = require('express');
const DevController = require('./controllers/DevController')
const SearchController = require('./controllers/SearchController')

const routes = Router();

// Métodos HTTP: GET, POST, PUT,DELETE
// Tipos de parametros:
// Query Params: (enviado via URL) localhost:3333/?search=Diego -> Acessado por request.query
// Route Params: request.params (identificar um recurso na alteração ou remoção)
// Body: request.body()

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);
routes.delete('/devs/:github_username', DevController.destroy);
routes.put('/devs/:github_username', DevController.update);

routes.get('/search', SearchController.index);

module.exports = routes