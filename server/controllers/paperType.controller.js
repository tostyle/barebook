const APIError = require('../helpers/APIError')

function list (req, res, next) {
  const datum = [
    { _id: 1, name: 'Premium' },
    { _id: 2, name: 'Standard' },
    { _id: 3, name: 'Eco Premium' }
  ]
  res.send(datum)
}

module.exports = {
  list
}