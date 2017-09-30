const APIError = require('../helpers/APIError')

function list (req, res, next) {
  const data =  [
    { _id: 1, name: 'ความทรงจำที่ดี' },
    { _id: 2, name: 'ที่ระลึก' }
  ]
  res.send(data)
}

module.exports = {
  list
}