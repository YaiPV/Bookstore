const buyerSchema = require('../models/buyers.model');

const readBuyers = () => new Promise((resolve, reject) => {
  buyerSchema.find()
    .then((buyers) => resolve( buyers ))
    .catch((error) => reject({code: 500, message: error}))
});

const readBuyer = (id) => new Promise((resolve , reject) => {
  buyerSchema.findById(id)
    .then((buyer) => resolve(buyer))
    .catch((error) => reject({code: 500, message: error}) );
});

const createBuyer = (buyer) => new Promise((resolve, reject) => {
  const buyerDB = buyerSchema(buyer);
  buyerDB.save()
    .then(() => resolve({code: 201, message: "Buyer created successfully"}) )
    .catch((error) => reject({code: 500, message: error}) );
});

const updateBuyer = (id, buyer) => new Promise((resolve , reject) => {
  buyerSchema.findByIdAndUpdate(id, buyer)
    .then(() => resolve({code: 201, message: "Buyer updated successfully"}) )
    .catch((error) => reject({code: 500, message: error}) );
});

const deleteBuyer = (id) => new Promise((resolve , reject) => {
  buyerSchema.findByIdAndDelete(id)
    .then(() => resolve({code: 200, message: "Buyer deleted successfully"}) )
    .catch((error) => reject({code: 500, message: error}) );
});

module.exports = {
  readBuyers,
  readBuyer,
  createBuyer,
  updateBuyer,
  deleteBuyer
}