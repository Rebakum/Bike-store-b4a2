import mongoose, { Schema } from "mongoose";
import IOrder from "./order.interface";

const orderSchema = new Schema<IOrder>(
  {
    email: { type: String, unique: true, required: true, match: /.+@.+\..+/ },
    product: { type: Schema.Types.ObjectId, ref: "Product", required: true },
    quantity: { type: Number, required: true, min: 1 },
    totalPrice: { type: Number, required: true, min: 0 },
    createdAt: { type: String, required: false },
    updatedAt: { type: String, required: false },
    isCanceled: { type: Boolean, default: false },
  },

  { versionKey: false }
);
// Pre-save Middleware/Hook add before save
orderSchema.pre("save", function (next) {
  const now = new Date().toISOString();
  if (!this.createdAt) {
    this.createdAt = now;
  }
  this.updatedAt = now;
  next();
});

const OrderModel = mongoose.model<IOrder>("Order", orderSchema);
export default OrderModel;
