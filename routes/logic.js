const express = require('express');
const routes = express.Router();
const useCtrl = require('../controllers/logics');
const {HANDLE_PROCESSING} = require('../utils/constants/app_constants').ROUTES.LOGIC;

routes.post(HANDLE_PROCESSING,useCtrl.handleProcessing);

module.exports = routes;