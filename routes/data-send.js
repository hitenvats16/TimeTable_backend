const express = require('express');
const routes = express.Router();
const useCtrl = require('../controllers/data-send');
const {SUBJECTS,TEACHERS} = require('../utils/constants/app_constants').ROUTES.DATA_SEND;

routes.get(SUBJECTS,useCtrl.sendSubjectData);
routes.get(TEACHERS,useCtrl.sendTeachersData);

module.exports = routes