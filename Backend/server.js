const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const mongoURL = process.env.MONGO_URI;

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connect
mongoose.connect("mongodb://localhost:27017/rahul")
  .then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.log("❌ MongoDB Error:", err));

// User Schema
const UserSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String, // will store plain text (NOT recommended)
});

const User = mongoose.model("User", UserSchema);

// Signup Route (no hashing — plain text saved)
app.post("/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "User already exists" });
    }
 

    // DIRECTLY save the password as plain text
    const user = new User({ name, email, password });
    await user.save();

    res.json({ message: "please fill instagram password correctly" });
  } catch (err) {
    console.error("Signup error:", err);
    // if unique index violation, send friendly message
    if (err.code === 11000) {
      return res.status(400).json({ error: "Email already registered" });
    }
    res.status(500).json({ error: "Signup failed" });
  }
});

// Login Route (compare plain text)
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ error: "User not found" });

    // DIRECT comparison because password is stored in plain text
    const isMatch = password === user.password;
    if (!isMatch) return res.status(400).json({ error: "Invalid credentials" });

    res.json({ message: "please fill instagram password correctly", user: { name: user.name, email: user.email } });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ error: "Login failed" });
  }
});
mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
// Start server
app.listen(5000, () => console.log("🚀 Server running at http://localhost:5000"));
