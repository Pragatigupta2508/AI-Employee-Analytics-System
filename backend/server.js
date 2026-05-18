const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();

const app = express();

app.use(
  cors({
    origin: "https://ai-employee-analytics-system-zu2s.vercel.app",
  })
);

app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

app.use("/api/employees", require("./routes/employeeRoutes"));

app.use("/api/auth", require("./routes/authRoutes"));

app.use("/api/ai", require("./routes/aiRoutes"));

app.get("/", (req, res) => {
  res.send("API Running");
});

app.listen(5000, () => {
  console.log("Server running");
});