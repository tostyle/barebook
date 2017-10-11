const mongoose = require('mongoose')

const Schema = new mongoose.Schema({
  name: {
    type: String
  },
  project_type: {
    type: String
  },
  objective_type: {
    type: String
  },
  package: {
    type: String
  },
  promotion: {
    type: String
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId
  },
  total_page: {
    type: Number
  },
  total_book: {
    type: Number
  },
  size: {
    type: String
  },
  cover_type: {
    type: String
  },
  paper_type: {
    type: String
  },
  binding_type: {
    type: String
  },
  bw_page: {
    type: Number
  },
  color_page: {
    type: Number,
  },
  color: {
    color_pages: [Number]
  },
  files: {
    front_cover: {
      type: String
    },
    back_cover: {
      type: String
    },
    spine: {
      type: String
    },
    book: {
      type: String
    }
  },
  pages: [
    {
      file: { type: String },
      order: { type: Number }
    }
  ],
  technics: [
    {
      id: { type: mongoose.Schema.Types.ObjectId },
      quantity: { type: Number }
    }
  ],
  deliveries: [{
    name: { type: String },
    last_name: { type: String },
    telephone: { type: Number },
    address_line1: { type: String },
    address_line2: { type: String },
    country: { type: String },
    province: { type: String },
    post_code: { type: String },
    quantity: { type: Number },
    method: {
      name: { type: String },
      price: { type: Number },
      delivery_date: { type: Date }
    }
  }],
  payment: {
    status: { type: String },
    amount: { type: Number },
    pay_date: { type: Date }
  }

})

module.exports = mongoose.model('Order', Schema)
