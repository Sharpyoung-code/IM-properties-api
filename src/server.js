const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const port = process.env.PORT;
const dbURI = process.env.MONGO_URI;
const cors = require('cors')
const app = express();
app.use(cors());

app.use(express.urlencoded({ limit: "1000000mb", extended: true }));
app.use(express.json({ limit: "1000000mb", extended: true }));


//MongoDB connection
const conn = mongoose
  .connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => {
    console.log(err);
  });

//Middleware setup
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//routes
app.get("/", (req, res) => {
  return res.status(200).send("We're up and running!!");
});
app.use("/api/auth", require("./routes/authRoutes/authUserRoutes"));
app.use("/api/user", require("./routes/userRoutes/userRoute"));
app.use("/api/property", require("./routes/propertyRoutes/propertyRoute"));
app.use("/api/blog", require("./routes/blogRoutes/blogRoute"));

app.use("*", (req, res) => {
  return res.status(404).json({ error: { messgage: "Route Not Found" } });
});

app.listen(port, console.log(`server running on ${port}`));
