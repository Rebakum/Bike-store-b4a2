import IOrder from "./order.interface";
import OrderModle from "./order.schema";

const createOrderDB = async (order: IOrder) => {
  const result = await OrderModle.create(order);
  return result;
};

export const orderServices = {
  createOrderDB,
};
