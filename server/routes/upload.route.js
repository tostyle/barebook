const express = require('express')
const multer = require('multer')
const crypto = require('crypto')
const mime = require('mime')
const fs = require('fs')
const merge = require('easy-pdf-merge')
const APIError = require('../helpers/APIError')

// const uploadCtrl = require('../controllers/upload.controller')
// const upload = multer({ dest: 'uploads/' })
const router = express.Router()

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const dir = `./uploads/${req.body.orderId}`
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir)
    }
    cb(null, dir)
  },
  filename: function (req, file, cb) {
    crypto.pseudoRandomBytes(16, (err, raw) => {
      cb(null, raw.toString('hex') + Date.now() + '.' + mime.extension(file.mimetype))
      // cb(null, req.body.type + '.' + mime.extension(file.mimetype))
    })
  }
})
const upload = multer({ storage })

router.post('/:orderId', upload.single('file'), (req, res, next) => {
  console.log('>>>>>>>>>',req.file)
  res.send({ fileName: req.file.filename })
})

router.post('/:orderId/multiple', upload.array('files', 20), (req, res, next) => {
  console.log('<><><><><><><><<><>',req.files)
  res.send(req.files)
})

router.post('/:orderId/merge', (req, res, next) => {
  const { sources } = req.body
  const { orderId } = req.params
  const result = `${__dirname}/../../uploads/${orderId}/book.pdf`
  const files = sources.map(source => {
    return `${__dirname}/../../uploads/${orderId}/${source}`
  })
  merge(files, result, (err) => {
    if (err) {
      return next(new APIError(err))
    }
    return res.send({ result: 'book.pdf' })
  })
})

module.exports = router
