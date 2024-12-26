import mongoose, { Document } from "mongoose";

interface IOrder extends Document {
  email: string;
  product: mongoose.Types.ObjectId;
  quantity: number;
  totalPrice: number;
  createdAt?: string;
  updatedAt?: string;
  isCanceled: boolean;
}
export default IOrder;
