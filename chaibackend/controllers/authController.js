const Registration = require("../models/Registration");

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if user exists
    const user = await Registration.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "Email not found" });
    }

    // Check password
    if (user.password !== password) {
      return res.status(401).json({ message: "Invalid password" });
    }

    res.status(200).json({ message: "Login successful", user });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

module.exports = { loginUser };
