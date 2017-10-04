const express = require('express')
const multer = require('multer')
const crypto = require('crypto')
const mime = require('mime')
const fs = require('fs')
// const uploadCtrl = require('../controllers/upload.controller')
// const upload = multer({ dest: 'uploads/' })
const router = express.Router()

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const dir = `./uploads/${req.params.accountId}`
    if (!fs.existsSync(dir)){
        fs.mkdirSync(dir);
    }
    cb(null, dir)
  },
  filename: function (req, file, cb) {
    console.log('uploadfile>>>>')
    crypto.pseudoRandomBytes(16, function (err, raw) {
      cb(null, raw.toString('hex') + Date.now() + '.' + mime.extension(file.mimetype));
    });
  }
});
const upload = multer({ storage });

router.post('/:accountId', upload.single('file'), (req, res, next) => {
  console.log(req.file)
  res.status(204).end()
})

router.post('/:accountId/multiple', upload.array('files', 20), (req, res, next) => {
  console.log(req.files)
  res.status(204).end()
})

module.exports = router
