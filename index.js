require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');

const app = express();

const Store = require('./models/store.js');

mongoose.connect('mongodb://127.0.0.1:27017/mongooseDeliverable');
const db = mongoose.connection;

db.once('open', () => {
    console.log((`Connected to MongoDB on ${db.host}:${db.port}`));
});
db.on('error', (err) => {
    console.log(`Error`, err);
});

app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.send('Home Route, Backend')
});

app.get('/stores', (req, res) => {   
    Store.find()
    .then((stores) => {
        res.status(200).json({ stores: stores})
    })
    .catch((err) => {
        res.send(err);
    })
});

app.get('/stores/:id', (req, res) => {
    Store.findOne({ _id: req.params.id })
    .then((store) => {
        res.status(200).json({ store })
    })
    .catch((err) => { res.send(err)})
});

app.post('/stores', (req, res) => {
    Store.create(req.body).then((store) => {
        res.status(201).json({ store })
    })
    .catch((err) => { res.send(err)})
});

app.put('/stores/:id', (req, res) => {
    Store.updateOne({ _id: req.params.id },{ $set: {name: req.body.name} })
    .then((uptdatedStore) => {
            res.status(200).json({updatedStore});
        })
        .catch((err) => {
            res.send(err);
        });
});

app.delete('/stores/:id', (req, res) => {
    Store.deleteOne({ _id: req.params.id })
        .then((deletedStore) => {
            res.status(200).json({deletedStore});
        })
        .catch((err) => {
            res.send(err);
        });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server listening on PORT: ${PORT}`);
});