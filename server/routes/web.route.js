const express = require('express')

const router = express.Router()

/** GET /health-check - Check service health */
router.get('/ping', (req, res) => {
	  res.render('pages/index');
  // res.send('pong')
})


module.exports = router
