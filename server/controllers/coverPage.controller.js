const APIError = require('../helpers/APIError')

function list (req, res, next) {
  const data = [
    { _id: 1, name: 'Premium' },
    { _id: 2, name: 'Standard' },
    { _id: 3, name: 'Eco Premium' }
  ]
  res.send(data)
}

module.exports = {
  list
}