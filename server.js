// Import necessary libraries
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const shortid = require("shortid");

// Create an instance of the Express application
const app = express();
app.use(bodyParser.json());

// Serve static files from the "build" directory
app.use("/", express.static(__dirname + "/build"));
app.get("/", (req, res) => res.sendFile(__dirname + "/build/index.html"));

// Connect to MongoDB using Mongoose
mongoose.connect(
  process.env.MONGODB_URL || "mongodb://localhost/react-shopping-cart-db",
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  }
);

// Define the Product model schema
const Product = mongoose.model(
  "products",
  new mongoose.Schema({
    _id: { type: String, default: shortid.generate },
    title: String,
    description: String,
    image: String,
    price: Number,
    availableSizes: [String],
  })
);

// Define routes for handling product-related operations
app.get("/api/products", async (req, res) => {
  // Retrieve all products from the database
  const products = await Product.find({});
  res.send(products);
});

app.post("/api/products", async (req, res) => {
  // Create and save a new product based on the request body
  const newProduct = new Product(req.body);
  const savedProduct = await newProduct.save();
  res.send(savedProduct);
});

app.delete("/api/products/:id", async (req, res) => {
  // Delete a product based on its ID
  const deletedProduct = await Product.findByIdAndDelete(req.params.id);
  res.send(deletedProduct);
});

// Define the Order model schema
const Order = mongoose.model(
  "order",
  new mongoose.Schema(
    {
      _id: {
        type: String,
        default: shortid.generate,
      },
      email: String,
      name: String,
      address: String,
      total: Number,
      cartItems: [
        {
          _id: String,
          title: String,
          price: Number,
          count: Number,
        },
      ],
    },
    {
      timestamps: true,
    }
  )
);

// Define routes for handling order-related operations
app.post("/api/orders", async (req, res) => {
  // Validate and save a new order based on the request body
  if (
    !req.body.name ||
    !req.body.email ||
    !req.body.address ||
    !req.body.total ||
    !req.body.cartItems
  ) {
    return res.send({ message: "Data is required." });
  }
  const order = await Order(req.body).save();
  res.send(order);
});

app.get("/api/orders", async (req, res) => {
  // Retrieve all orders from the database
  const orders = await Order.find({});
  res.send(orders);
});

app.delete("/api/orders/:id", async (req, res) => {
  // Delete an order based on its ID
  const order = await Order.findByIdAndDelete(req.params.id);
  res.send(order);
});

// Set up the server to listen on the specified port
const port = process.env.PORT || 5000;
app.listen(port, () => console.log("Server is running at http://localhost:5000"));
