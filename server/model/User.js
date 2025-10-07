import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullname: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    address: {type: String, required: true},
    role: { type: String, default: 'user' },
    favourites: [{ type: mongoose.Schema.Types.ObjectId, ref: "Clothes", default: null }],
}, {timestamps: true});

export const User = mongoose.model('users', userSchema);