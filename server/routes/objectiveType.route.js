const express = require('express')
const validate = require('express-validation')
const paramValidation = require('../../config/param-validation')
const objectiveTypeCtrl = require('../controllers/objectiveType.controller')

const router = express.Router()

router.route('/')
  /** GET /api/users - Get list of users */
  .get(objectiveTypeCtrl.list)


module.exports = router
