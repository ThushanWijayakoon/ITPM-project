const mongoose = require('mongoose');
 const Schema = mongoose.Schema;
 
 // List of columns for Employee schema
 let Item = new Schema({
 itemNo: {
 type: String
 },
 itemName: {
 type: String
 },
 itemPrice: {
 type: String
 }
 },{
 collection: 'items'
 });
 
 module.exports = mongoose.model('Item', Item);