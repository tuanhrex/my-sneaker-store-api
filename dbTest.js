const Store = require('./models/store.js');

Store.create({
    name: "Concepts",
    locations: [{
        state: "Massachusetts",
        city: "Boston"
    }, {
        state: "New York",
        city: "New York"
    }, {
        state: "",
        city: "Dubai"
    }, {
        state: "",
        city: "Shanghai"
    }],
    yearFounded: 1996,
    founders: [{
        name: "Tarek Hassan"
    }]
})

Store.create({
    name: "Kith",
    locations: [{
        state: "New York",
        city: "New York"
    }, {
        state: "New York",
        city: "Brooklyn"
    }, {
        state: "Florida",
        city: "Miami"
    }, {
        state: "California",
        city: "Los Angeles"
    }],
    yearFounded: 2011,
    founders: [{
        name: "Ronnie Fieg"
    }]
})