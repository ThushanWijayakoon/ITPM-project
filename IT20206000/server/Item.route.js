 // Importing important packages
 const express = require('express');
 
 // Using express and routes
 const app = express();
 const itemRoute = express.Router();
 
 // Item module which is required and imported
 let itemModel = require('./Item');
 
 // To Get List Of Items
 itemRoute.route('/').get(function (req, res) {
 itemModel.find(function (err, item) {
 if (err) {
 console.log(err);
 }
 else {
 res.json(item);
 }
 });
 });
 
 // To Add New Item
 itemRoute.route('/addItem').post(function (req, res) {
 let item = new itemModel(req.body);
 item.save()
 .then(game => {
 res.status(200).json({ 'item': 'Item Added Successfully' });
 })
 .catch(err => {
 res.status(400).send("Something Went Wrong");
 });
 });
 
 // To Get Item Details By Item ID
 itemRoute.route('/editItem/:id').get(function (req, res) {
 let id = req.params.id;
 itemModel.findById(id, function (err, item) {
 res.json(item);
 });
 });
 
 // To Update The Item Details
 itemRoute.route('/updateItem/:id').post(function (req, res) {
 itemModel.findById(req.params.id, function (err, item, next) {
 if (!item)
 return next(new Error('Unable To Find Item With This Id'));
 else {
 item.itemNo = req.body.itemNo;
 item.itemName = req.body.itemName;
 item.itemPrice = req.body.itemPrice;
 
 item.save().then(emp => {
 res.json('Item Updated Successfully');
 })
 .catch(err => {
 res.status(400).send("Unable To Update Item");
 });
 }
 });
 });
 
 // To Delete The Item
 itemRoute.route('/deleteItem/:id').get(function (req, res) {
 itemModel.findByIdAndRemove({ _id: req.params.id }, function (err, item) {
 if (err) res.json(err);
 else res.json('Item Deleted Successfully');
 });
 });
 
 module.exports = itemRoute;