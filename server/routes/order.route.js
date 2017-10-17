const express = require('express')
const fs = require('fs')
const validate = require('express-validation')
const paramValidation = require('../../config/param-validation')
const ctrl = require('../controllers/order.controller')

const router = express.Router()

router.route('/')
  /** GET /api/users - Get list of users */
  .post(ctrl.create)

router.route('/:orderId/book')
  .get((req, res, next) => {
    var file = fs.createReadStream(`./uploads/${req.params.orderId}/book.pdf`)
    var stat = fs.statSync(`./uploads/${req.params.orderId}/book.pdf`);
    res.setHeader('Content-Length', stat.size);
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename=quote.pdf');
    file.pipe(res);
    // res.end(file);
    // file.pipe(res);
  })

module.exports = router
