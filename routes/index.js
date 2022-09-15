const express = require('express');

const usersRouters = require('./users.router');
const booksRouters = require('./books.router');
const buyersRouters = require('./buyers.router');
const storesRouters = require('./stores.router');

function routerApi(app){
  const router = express.Router();
  app.use("", router);
  
  router.use('/users', usersRouters);
  router.use('/books', booksRouters);
  router.use('/buyers', buyersRouters);
  router.use('/stores', storesRouters);
  

};

module.exports = routerApi;