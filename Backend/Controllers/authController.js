const jwt = require("jsonwebtoken");
const { loginUser } = require("../Services/authService");

const loginController = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await loginUser(username, password);

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.cookie("token", token, {
      httpOnly: false,
      sameSite: "Lax",
      maxAge: 3600000,
      secure: false,
      path: "/",
    });

    res.status(200).json({
      message: "Login successful",
      token,
      user: {
        id: user._id,
        username: user.username,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        phoneNumber: user.phoneNumber,
        location: user.location,
        role: user.role,
      },
    });
  } catch (err) {
    res.status(401).json({
      message: "Internal error occurred",
      details: {
        error: err.message,
        info: err.details,
      },
    });
  }
};

module.exports = {
  loginController,
};