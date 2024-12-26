import mongoose, { Schema } from "mongoose";
import IProduct from "./product.interface";

const productSchema = new Schema<IProduct>(
  {
    name: { type: String, required: true },
    brand: { type: String, required: true },
    price: { type: Number, required: true, min: 0 },
    category: {
      type: String,
      enum: ["Mountain", "Road", "Hybrid", "Electric"],
      required: true,
    },
    description: { type: String, required: true },
    quantity: { type: Number, required: true, min: 0 },
    inStock: { type: Boolean, default: true },
    createdAt: {
      type: String,
      required: false, // Auto-added by middleware
    },
    updatedAt: {
      type: String,
      required: false, // Auto-added by middleware
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },

  {
    versionKey: false,
  }
);

// Pre-save Middleware/Hook add before save

productSchema.pre("save", function (next) {
  const now = new Date();
  if (!this.createdAt) {
    this.createdAt = now;
  }
  this.updatedAt = now;
  next();
});

// update time stamp when update document
productSchema.pre("findOneAndUpdate", function (next) {
  this.set({ updatedAt: new Date().toISOString() });
  next();
});
// filter out of already deleted data
productSchema.pre("find", function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});

const ProductModel = mongoose.model<IProduct>("Product", productSchema);
export default ProductModel;
