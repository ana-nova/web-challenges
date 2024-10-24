import mongoose from "mongoose";
import "./Review";

// #1: destructure for creating schemas, my blueprint
const { Schema } = mongoose;

//#2: define how my scheme should look like (same as in database)
const ProductSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  currency: { type: String, required: true },
  reviews: { type: [Schema.Types.ObjectId], ref: "Review" },
});

// "Product" model already exists = reuse it;
// otherwise create a new model called "Product" using the defined schema.
const Product =
  mongoose.models.Product || mongoose.model("Product", ProductSchema);

export default Product;
