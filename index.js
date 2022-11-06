const express = require("express");
const app = express();
const cors = require("cors");
const userRouter = require("./routes/v1/users.route");
const errorHandler = require("./middleware/errorHandler");

// server running on port
const port = process.env.PORT || 8000;

// middleware
app.use(cors());
app.use(express.json());

// user router
app.use("/user", userRouter);

// get home page
app.get("/", (_req, res) => {
  res.render("home.ejs", {
    id: 5,
    user: {
      name: "Prantosh Bepari",
    },
  });
});

// validation all routs
app.all("*", (_req, res) => {
  res.send("Route not found.");
});

// err handler
app.use(errorHandler);

// unhandled rejection err
process.on("unhandledRejection", (error) => {
  console.log(error.name, error.message);
  app.close(() => {
    process.exit(1);
  });
});

// listen on port
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
