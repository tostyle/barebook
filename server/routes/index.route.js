const express = require('express')
const fs = require('fs')
const userRoutes = require('./user.route')
const projectTypeRoutes = require('./projectType.route')
const objectiveTypeRoutes = require('./objectiveType.route')
const packageRoutes = require('./package.route')
const sizeRoutes = require('./size.route')
const coverPageRoutes = require('./coverPage.route')
const paperTypeRoutes = require('./paperType.route')
const uploadRoutes = require('./upload.route')
const orderRoutes = require('./order.route')

const router = express.Router()

/** GET /health-check - Check service health */
router.get('/', (req, res) => {
  res.send('pong')
})


router.post('/pdf', (req, res) => {
	var file = fs.createReadStream('./storage/Resort.pdf');
	var stat = fs.statSync('./storage/Resort.pdf');
	res.setHeader('Content-Length', stat.size);
	res.setHeader('Content-Type', 'application/pdf');
	res.setHeader('Content-Disposition', 'attachment; filename=quote.pdf');
	file.pipe(res);
	 // res.end(file);
	// file.pipe(res);
})

router.get('/pdf', (req, res) => {
	var file = fs.createReadStream('./storage/The-Metamorphosis.pdf');
	var stat = fs.statSync('./storage/The-Metamorphosis.pdf');
	res.setHeader('Content-Length', stat.size);
	res.setHeader('Content-Type', 'application/pdf');
	res.setHeader('Content-Disposition', 'attachment; filename=quote.pdf');
	file.pipe(res);
	 // res.end(file);
	// file.pipe(res);
})

// mount user routes at /users
router.use('/users', userRoutes)

router.use('/project_type', projectTypeRoutes)
router.use('/objective_type', objectiveTypeRoutes)
router.use('/package', packageRoutes)
router.use('/size', sizeRoutes)
router.use('/cover_page', coverPageRoutes)
router.use('/paper_type', paperTypeRoutes)
router.use('/upload', uploadRoutes)
router.use('/orders', orderRoutes)

module.exports = router
