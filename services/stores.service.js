const storeSchema = require('../models/stores.model');

const readStores = () => new Promise((resolve, reject) => {
  storeSchema.find()
    .then((stores) => resolve( stores ))
    .catch((error) => reject({code: 500, message: error}))
});

const readStore = (id) => new Promise((resolve , reject) => {
  storeSchema.findById(id)
    .then((store) => resolve(store))
    .catch((error) => reject({code: 500, message: error}) );
});

const createStore = (store) => new Promise((resolve, reject) => {
  const storeDB = storeSchema(store);
  storeDB.save()
    .then(() => resolve({code: 201, message: "Store created successfully"}) )
    .catch((error) => reject({code: 500, message: error}) );
});

const updateStore = (id, store) => new Promise((resolve , reject) => {
  storeSchema.findByIdAndUpdate(id, store)
    .then(() => resolve({code: 201, message: "Store updated successfully"}) )
    .catch((error) => reject({code: 500, message: error}) );
});

const deleteStore = (id) => new Promise((resolve , reject) => {
  storeSchema.findByIdAndDelete(id)
    .then(() => resolve({code: 200, message: "Store deleted successfully"}) )
    .catch((error) => reject({code: 500, message: error}) );
});

module.exports = {
  readStores,
  readStore,
  createStore,
  updateStore,
  deleteStore
}