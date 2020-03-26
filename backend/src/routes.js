const express = require('express');

const OngController = require('./controllers/OngController');
const incidentController = require('./controllers/IncidentController');
const profileController = require('./controllers/ProfileController');
const sessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/sessions', sessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profiles', profileController.index);

routes.get('/incidents', incidentController.index);
routes.post('/incidents', incidentController.create);
routes.delete('/incidents/:id', incidentController.delete);

module.exports = routes; // exporta variável