const storeServices = require('../services/stores.service');

const getStores = (size) => new Promise((resolve, reject) => {
  try {
    let stores = [];
    stores = storeServices.readStores()
    if(size){
      resolve(stores.slice(0, size));
    }else{
      resolve( stores );
    }
  } catch (error) {
    reject({code: 500, message: "Error unexpected", log: error });
  }
});

const getStore = (id) => new Promise((resolve, reject) => {
  try {
    resolve( storeServices.readStore(id) );
  } catch (error) {
    reject( error );
  }
});

const postStore = (body) => new Promise((resolve, reject) => {
  try {
    resolve( storeServices.createStore(body) );
  } catch (error) {
    reject(error);
  }
});

const putStore = (storeID, body) => new Promise((resolve, reject) => {
  try {
    resolve( storeServices.updateStore(storeID, body) );
  } catch (error) {
    reject(error);
  }
});

const deleteStore = (id) => new Promise((resolve, reject) => {
  try {
    resolve( storeServices.deleteStore(id) );
  } catch (error) {
    reject(error);
  }
});

module.exports = {
  getStore,
  getStores,
  postStore,
  putStore,
  deleteStore
}