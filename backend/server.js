const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = process.env.PORT || 4000;

// Replace 'your_database_uri' with your MongoDB connection URI.
const databaseURI =
  "mongodb+srv://sopheak012:test012@mernapp.hdvj4cr.mongodb.net/ScratcherInventoryApp";

// Middleware for parsing JSON data
app.use(express.json());

// Import the scratcher route
const scratcherRoute = require("./routes/scratcherRoutes");

async function startServer() {
  try {
    // Connect to MongoDB using Mongoose and the URI
    await mongoose.connect(databaseURI);
    console.log("Connected to MongoDB");

    // Use the scratcher route

    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

startServer();

app.use("/", scratcherRoute);
