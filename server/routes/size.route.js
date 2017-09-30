const express = require('express')
const validate = require('express-validation')
const paramValidation = require('../../config/param-validation')
const ctrl = require('../controllers/size.controller')

const router = express.Router()

router.route('/')
  /** GET /api/users - Get list of users */
  .get(ctrl.list)


module.exports = router
