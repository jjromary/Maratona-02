const express = require('express'); //biblioteca pra criar servidor
const routes = express.Router();  //criando as rotas e caminhos
const ProfileController = require('./controllers/ProfileController')
const JobController = require('./controllers/JobController')
const DashboardController = require('./controllers/DashboardController')

//criando as rotas
routes.get('/', DashboardController.index) 
routes.get('/job', JobController.create)
routes.post('/job', JobController.save)
routes.get('/job/:id', JobController.show)
routes.post('/job/:id', JobController.update)
routes.post('/job/delete/:id', JobController.delete)
routes.get('/profile', ProfileController.index)
routes.post('/profile', ProfileController.update)

//habilitando as exportações
module.exports = routes;