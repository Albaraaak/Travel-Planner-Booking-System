const mongoose = require ('mongoose');
const productSchema = new mongoose.Schema({
    title:{
        type: String,
        required:true,
        unique:true
    },
    description:{
        type: String,
        required:false
    },
    destination:{
        type: String,
        required:true
    },
    price:{
        type: Number,
        required:true
    },
    date:{
        type: String,
        required:true
    },
    rating: {
  type: Number,
  default: 0
},
reviews: {
  type: Number,
  default: 0
},

    nbOfPeople:{
        type: Number,
        required:true,
    },
    availableSeats: {
  type: Number,
  required: true,
  default: 20
},
    type:{
        type:String,
        enum: ["adventure", "cultural", "relaxation", "cruise", "safari", "city-tour"],
        required:true
    },
     duration: {
    type: String
  },

  image: {
    type: String
  },

  available: {
    type: Boolean,
    default: true
  },

  discount: {
    type: Number,
    default: 0
  }

});
const Product= mongoose.model('Product', productSchema)
module.exports = Product;