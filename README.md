# 🚴 Bike Store Management System

The **Bike Store Management System** is a full-stack web application designed to manage the inventory, orders, and revenue of a bike store. This project includes features like inventory tracking, order placement, and revenue calculation using Node.js, Express, MongoDB, and React.

---

## 📋 Features

### 1. Inventory Management
- Track the stock availability of bikes.
- Automatically update stock levels when an order is placed.
- Mark bikes as out of stock when inventory reaches zero.

### 2. Order Management
- Place customer orders with details like quantity, total price, and customer email.
- Prevent orders if the requested quantity exceeds available stock.
- Retrieve all orders with timestamps for management.

### 3. Revenue Calculation
- Calculate total revenue based on all customer orders.
- Dynamically fetch data from the database using aggregation pipelines.

---

## 🛠️ Technologies Used

### Backend:
- **Node.js**: Server-side runtime environment.
- **Express.js**: Web framework for building RESTful APIs.
- **MongoDB**: NoSQL database for data storage.
- **Mongoose**: ODM library for MongoDB.

### Frontend (Optional for full-stack projects):
- **React.js**: For creating the user interface.
- **Tailwind CSS**: For styling the application.

### Other Tools:
- **Postman**: For API testing.
- **Git**: Version control.
- **ESLint**: For code linting and formatting.

---

## 🗃️ Database Schema

### Product Schema:
```javascript
{
  name: String,
  price: Number,
  quantity: Number,
  inStock: Boolean
}

### OrderSchema:
{
  email: String,
  product: ObjectId, // Reference to Product
  quantity: Number,
  totalPrice: Number,
  createdAt: Date,
  updatedAt: Date
}

