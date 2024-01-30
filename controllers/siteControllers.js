const siteModel = require("../models/siteSchema");

async function createSite(req, res) {
    try {
        const { siteName, siteLocation, layout, plots } = req.body;

        const isSiteExists = await siteModel.findOne({ siteName });

        if (isSiteExists) {
            res.json({
                status: 500,
                message: 'Site name already exists !'
            })
        }

        const site = await siteModel.create({ siteName, siteLocation, layout, plots });

        res.json({
            status: 201,
            message: 'Site created',
            data: site
        })



    } catch (error) {
        res.json({
            status: 500,
            message: error.message
        })
    }
}

async function getSites(req, res) {
    try {

        const projection = { siteName: 1, siteLocation: 1 }
        const sites = await siteModel.find({}).select('siteName');

        res.json({
            status: 200,
            data: sites
        })



    } catch (error) {
        res.json({
            status: 500,
            message: error.message
        })
    }
}

async function getPlots(req, res) {
    try {

        const { id } = req.params;

        console.log(id)

        const plots = await siteModel.findOne({ siteName: id }).select('plots');

        res.json({
            status: 200,
            data: plots
        })



    } catch (error) {
        res.json({
            status: 500,
            message: error.message
        })
    }
}

async function bookPlot(req, res) {
    try {

        const { plotNo, siteNo } = req.body;

        const plot = await siteModel.updateOne({ siteName: siteNo, 'plots.plotNo': plotNo }, { $set: { "plots.$.isBooked": true } });

        console.log(plot);

        res.json({
            status: 200,
            data: plot
        })



    } catch (error) {
        res.json({
            status: 500,
            message: error.message
        })
    }
}

module.exports = {
    createSite,
    getSites,
    getPlots,
    bookPlot
}