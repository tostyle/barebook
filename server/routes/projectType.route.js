const express = require('express')
const validate = require('express-validation')
const paramValidation = require('../../config/param-validation')
const projectTypeCtrl = require('../controllers/projectType.controller')

const router = express.Router()

router.route('/')
  /** GET /api/users - Get list of users */
  .get(projectTypeCtrl.list)


module.exports = router
