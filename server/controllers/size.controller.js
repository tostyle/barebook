const APIError = require('../helpers/APIError')

function list (req, res, next) {
  const data = [
    { _id: 1, name: 'A4' },
    { _id: 2, name: 'B5' },
    { _id: 3, name: 'A5' }
  ]
  res.send(data)
}

module.exports = {
  list
}