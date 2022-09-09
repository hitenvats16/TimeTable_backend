const express = require('express');
const routes = express.Router();
const useCtrl = require('../controllers/db-insert');
const {SUBJECTS_ADD,TEACHERS_ADD} = require('../utils/constants/app_constants').ROUTES.DB_INSERT;

routes.post(SUBJECTS_ADD,useCtrl.insertSubjectData);
routes.post(TEACHERS_ADD,useCtrl.insertTeachersData);

module.exports = routes