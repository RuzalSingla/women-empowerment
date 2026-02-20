import mongoose from "mongoose";

const userProgressSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",   // links to your existing User model
      required: true,
      unique: true,  // one document per user
    },
    completedModules: {
      type: [String], // stores module IDs e.g. ["stock-market", "pe-ratios"]
      default: [],
    },
    xpEarned: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

const UserProgress = mongoose.model("UserProgress", userProgressSchema);
export default UserProgress;