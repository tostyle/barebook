const APIError = require('../helpers/APIError')

function list (req, res, next) {
  const data = [
    { _id: 1, name: 'Premium', detail: 'sdfasdfdsf' },
    { _id: 2, name: 'Standard', detail: 'sdaxwerwerew' },
    { _id: 3, name: 'Eco Premium', detail: 'ewtokfjfgmgf'}
  ]
  res.send(data)
}

module.exports = {
  list
}