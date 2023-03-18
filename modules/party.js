const mongoose = require('mongoose');

const { Schema } = mongoose;

const { serviceSchema } = require("./Service");

const partySchema = new Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    budged: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    services: {
        type: [serviceSchema],
    },
});