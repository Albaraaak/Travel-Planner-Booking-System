const mongoose = require ('mongoose');
const productSchema = new mongoose.Schema({
    title:{
        type: String,
        required:true,
        unique:true
    },
    description:{
        type: String,
        required:true
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
reviews: 
  {
    user: String,
    comment: String,
    rating: Number
  },

    nbOfPeople:{
        type: Number,
        required:true,
    },
    type:{
        type:String,
        enum: ["adventure", "cultural", "relaxation", "cruise", "safari", "city-tour"],
        required:true
    }

});
const Product= mongoose.model('Product', productSchema)
module.exports = Product;