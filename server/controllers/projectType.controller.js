const APIError = require('../helpers/APIError')

function list (req, res, next) {
  const data = [
    { _id: 1, name: 'หนังสือพ๊อกเก็ตบุุ้ค' },
    { _id: 2, name: 'หนังสือรวมภาพ' }
  ]
  res.send(data)
}

module.exports = {
  list
}