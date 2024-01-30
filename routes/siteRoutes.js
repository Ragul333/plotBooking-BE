const express = require('express');
const { createSite, getSites, getPlots, bookPlot } = require('../controllers/siteControllers');
const siteRouter = express.Router();

siteRouter.post('/createSite',createSite);
siteRouter.get('/',getSites);
siteRouter.get('/:id',getPlots);
siteRouter.patch('/bookPlot',bookPlot);

module.exports = siteRouter;