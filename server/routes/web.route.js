const express = require('express')
const path = require('path')
const router = express.Router()

/** GET /health-check - Check service health */
router.get('/ping', (req, res) => {
	  res.render('pages/index');
  // res.send('pong')
})

router.get('/testpdf', (req, res) => {
	// res.sendFile('')
	res.sendFile(path.join(__dirname + '/../../public/pdf.html'));
})


module.exports = router
