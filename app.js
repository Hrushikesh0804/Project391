const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const User = require("./models/User");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/react-login-tut", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("MongoDB connected"))
.catch(err => console.log(err));

// Signup route
app.post("/signup", async (req, res) => {
  const { email, password } = req.body;
  const existing = await User.findOne({ email });

  if (existing) return res.send("exist");

  await User.create({ email, password });
  res.send("notexist");
});

// Login route
app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user && user.password === password) {
    res.send("exist");
  } else {
    res.send("notexist");
  }
});

app.listen(8000, () => {
  console.log("Server running on http://localhost:8000");
});
