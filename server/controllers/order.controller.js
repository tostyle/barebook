const Order = require('../models/order.model')
const APIError = require('../helpers/APIError')

async function create (req, res, next) {
  const order = new Order(req.body)
  try {
    const result = await order.save()
    return res.send({ result })
  } catch (e) {
    return next(new APIError(e))
  }
}

module.exports = {
  create
}
