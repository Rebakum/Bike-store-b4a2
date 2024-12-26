import { Request, Response } from "express";
import { orderServices } from "./order.service";

const createOrders = async (req: Request, res: Response) => {
  try {
    const { orderData } = req?.body;
    const result = await orderServices.createOrderDB(orderData);
    res.status(200).json({
      success: true,
      message: "Order created successfully",
      data: result,
    });
  } catch (err: any) {
    res.status(400).send({
      message: "Validation error",
      success: true,
      error: err.errorn || err.name || "Unknown error",
      stack: err?.stack,
    });
  }
};

export const orderController = {
  createOrders,
};
