import express from 'express';
import dotenv from 'dotenv';
import authRoute from './route/auth.route.js';
import userRoute from './route/user.route.js'; // new route
import connectDB from './db/connectDB.js';

import multer from 'multer';
import { fileURLToPath } from 'url';
import path from 'path';
import cookieParser from 'cookie-parser';
import cors from 'cors';

dotenv.config();

const app = express();

// Middleware
app.use(cors({ origin: process.env.CLIENT_URL, credentials: false }));
app.use(express.json());
app.use(cookieParser());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Routes
app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);

// Multer for general file uploads
const storage = multer.diskStorage({
  destination: path.join(__dirname, 'uploads'),
  limits: { fileSize: 2 * 1024 * 1024 },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

// Profile picture upload route
app.post(`/api/users/uploadProfilePic/:userId`, upload.single('profilePic'), async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ success: false, message: 'No file uploaded' });

    const { User } = await import('./model/User.js'); // dynamic import
    const user = await User.findById(req.params.userId);
    if (!user) return res.status(404).json({ success: false, message: 'User not found' });

    user.photo = req.file.filename;
    await user.save();

    res.json({ success: true, user });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// Serve uploads
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Error handling middleware
app.use((err, req, res, next) => {
  if (err.code === 'LIMIT_FILE_SIZE') {
    return res.status(413).json({ success: false, message: 'File size is too large' });
  }
  next(err);
});

// Connect DB & start server
const port = process.env.PORT || 6000;
app.listen(port, () => {
  connectDB();
  console.log(`Server running on http://localhost:${port}`);
});
