const Registration = require("../models/Registration");

const registerUser = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Email and password required" });
  }

  try {
    const existing = await Registration.findOne({ email });
    if (existing) {
      return res.status(400).json({ error: "Email already registered" });
    }

    const newUser = new Registration({ email, password });
    await newUser.save();
    res.status(201).json({ message: "Registration successful" });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({ error: "Server error" });
  }
};

module.exports = { registerUser };
