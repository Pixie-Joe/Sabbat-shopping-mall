import { User } from '../model/User.js';
import bcrypt from 'bcryptjs';
import { generateTokenAndSetCookie } from "../utils/generateTokenAndSetCookie.js";
import { loginSchema, registerSchema } from '../schemas/index.js';

// REGISTER
export const register = async (req, res) => {
  const { fullname, email, password, address, role } = req.body;

  // Validate request
  const { error } = registerSchema.validate({ fullname, email, password, address });
  if (error) return res.status(400).json({ success: false, message: error.details[0].message });

  try {
    // Check if user exists
    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(400).json({ success: false, message: 'User with email already exists' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 12);

    const user = new User({
      fullname,
      email,
      password: hashedPassword,
      address,
      role: role || 'user', // default role is user
    });

    await user.save();

    // Generate token
    const token = generateTokenAndSetCookie(res, user._id);

    return res.status(201).json({
      success: true,
      message: 'Account created successfully',
      user: {
        token,
        id: user._id,
        fullname: user.fullname,
        email: user.email,
        address: user.address,
        role: user.role,
      }
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// LOGIN
export const login = async (req, res) => {
  const { email, password } = req.body;

  const { error } = loginSchema.validate({ email, password });
  if (error) return res.status(400).json({ success: false, message: error.details[0].message });

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ success: false, message: "Invalid credentials" });

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) return res.status(400).json({ success: false, message: "Invalid credentials" });

    const token = generateTokenAndSetCookie(res, user._id);

    return res.status(200).json({
      success: true,
      message: "Login successful",
      user: {
        token,
        id: user._id,
        fullname: user.fullname,
        email: user.email,
        address: user.address,
        role: user.role,
      }
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// GET ALL USERS (ADMIN ONLY)
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({}).select("-password");
    return res.status(200).json({ success: true, users });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// UPDATE USER (SELF OR ADMIN)
export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    // Prevent role change unless admin
    if (updates.role && req.user.role !== "admin") {
      return res.status(403).json({ success: false, message: "You cannot change role" });
    }

    // If password is being updated
    if (updates.password) {
      updates.password = await bcrypt.hash(updates.password, 12);
    }

    // Ensure user can only update self or admin
    if (req.user.id !== id && req.user.role !== "admin") {
      return res.status(403).json({ success: false, message: "Unauthorized update" });
    }

    const updatedUser = await User.findByIdAndUpdate(id, updates, { new: true }).select("-password");
    if (!updatedUser) return res.status(404).json({ success: false, message: 'User not found' });

    return res.status(200).json({ success: true, user: updatedUser });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// DELETE USER (ADMIN ONLY)
export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    if (req.user.role !== "admin") {
      return res.status(403).json({ success: false, message: "Only admin can delete users" });
    }

    const deletedUser = await User.findByIdAndDelete(id);
    if (!deletedUser) return res.status(404).json({ success: false, message: 'User not found' });

    return res.status(200).json({ success: true, message: 'User deleted successfully' });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};
