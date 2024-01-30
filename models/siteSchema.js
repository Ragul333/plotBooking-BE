const mongoose = require('mongoose');


const plotSchema = mongoose.Schema({
    plotNo: Number,
    facing: String,
    area: Number,
    isBooked: {
        type: Boolean,
        default: false
    },
    dimensions: [
        {
            north: String
        },
        {
            east: String
        },
        {
            west: String
        },
        {
            south: String
        }
    ]
});

const siteSchema = mongoose.Schema({
    siteName: String,
    siteLocation: String,
    layout: String,
    plots: [plotSchema]
});


const siteModel = mongoose.model('sites', siteSchema);

module.exports = siteModel;