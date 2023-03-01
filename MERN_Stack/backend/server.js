require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const workoutRoutes = require("./routes/workouts");

// express app
const app = express();

//middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use("/api/workouts", workoutRoutes);

// connect to mongodb
mongoose
  .connect(process.env.MONGO_URI) 
  .then(() => {
    // listen for reqests
    app.listen(process.env.PORT, () => {
      console.log("listening oñ port 4000");
    });
  })
  .catch((error) => {
    console.log(error);
  });
