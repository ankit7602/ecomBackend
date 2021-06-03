import mongoose from 'mongoose';

const producSchema = new mongoose.Schema({
      title: {type:String, required:true, unique:true},
      category: {type:String, required:true},
      brand: {type:String, required:true},
      rating: {type:Number, required:true},
      numReviews: {type:Number, required:true},
      description: {type:String, required:true},
      countInStock: {type:Number, required:true},
      imgsrc: {type:String, required:true},
      amount: {type:Number, required:true},
},
{
    timestamps:true
});

const Product = mongoose.model('Product', producSchema);

export default Product;