const express = require('express');
const response = require('../lib/response-message');
const log = require('../lib/log-messages');

const storeController = require('../controllers/stores.controller');

const router = express.Router();

router.get('', (req, res) => {
  const { size } = req.query;
  storeController.getStores(size)
    .then( stores => {
      response(res, {code: 200, key: "stores", payload: stores})
    })
    .catch(error => {
      //log.logError(error.log);
      response(res, {code: error.code, key: "message", payload: error.message})
    });
});

router.get('/:id', (req, res) =>{
  const { id } = req.params;
  storeController.getStore(id)
    .then( store => {
      response(res, {code: 200, key: "store", payload: store})
    })
    .catch(error => {
      log.logError(error);
      response(res, {code: error.code, key: "message", payload: error.message})
    });
});

router.post('', (req, res) => {
  const { body } = req;
  storeController.postStore(body)
    .then( result => {
      response(res, { code: result.code, key: "message", payload: result.message});
    })
    .catch(error => {
      log.logError(error);
      response(res, {code: error.code, key: "message", payload: error.message})
    });
});

router.put('/:storeID', (req, res) => {
  const { storeID } = req.params;
  const { body } = req;
  storeController.putStore(storeID, body)
    .then(result => {
      response(res, {code: result.code, key: "message", payload: result.message})
    })
    .catch(error => {
      log.logError(error);
      response(res, {code: error.code, key: "message", payload: error.message})
    });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  storeController.deleteStore(id)
    .then(result => {
      response(res, {code: result.code, key: "message", payload: result.message})
    })
    .catch(error => {
      log.logError(error);
      response(res, {code: error.code, key: "message", payload: error.message})
    })
});

module.exports = router;