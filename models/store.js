const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
    state: String,
    city: String,
    
});

const founderSchema = new mongoose.Schema({
    name: String,   
});

const storeSchema = new mongoose.Schema({
    name: String,
    locations: [locationSchema],
    yearFounded: Number,
    founders: [founderSchema]
});

const Store = mongoose.model('Store', storeSchema);

module.exports = Store;