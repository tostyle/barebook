const APIError = require('../helpers/APIError')

function list (req, res, next) {
  const data =  [
    { _id: 1, name: 'Package1', detail: 'whasbtaj gitn isu nsonfsog asdmni nsgmal' },
    { _id: 2, name: 'Package2', detail: 'whasbtaj gitn isu nsonfsog asdmni nsgmal' },
  ]
  res.send(data)
}

module.exports = {
  list
}