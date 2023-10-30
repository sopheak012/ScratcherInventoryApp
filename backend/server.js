const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const sequelize = require("./database/db");

//MiddleWare: Body Parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
  try {
    await sequelize.authenticate();
    console.log("Database connection has been established successfully.");

    res.send("Hello from the backend!");
  } catch (error) {
    console.log(error("Unable to connect to the database:", error));
    res.status(500).send("Database connection error");
  }
});

sequelize.authenticate().then();

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
