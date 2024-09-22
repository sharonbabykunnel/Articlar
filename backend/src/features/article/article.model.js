import mongoose from "mongoose";

const articleScheema = mongoose.Schema(
  {
    userId: {
      type: String,
      ref: "User",
      required: true,
    },
    content: {
        text: {
            type: String,
            trim: true,
        },
    },
    file: [
    {
        type: String,
        trim: true,
    },
    ],
    likes: [
      {
        type: String,
        ref: "User",
    },
    ],
    category: [
    {
        type: String,
        trim: true,
    },
    ],
    saved: [
      {
        type: String,
        ref: "User",
      },
    ],
    comments: {
      type: Number,
    },
    shares: [
      {
        type: String,
        ref: "User",
      },
    ],
    visibility: {
      type: String,
      enum: ["public", "friends", "private"],
      default: "public",
    },
    status: {
      type: String,
      enum: ["active", "archived", "deleted"],
      default: "active",
    },
    reposted: [
      {
        type: String,
      },
    ],
    reported: [
      {
        user: {
          type: String,
          required: true,
        },
        reason: {
          type: String,
          required: true,
        },
      },
    ],
    notInterest: [
      {
        type:String
      }
    ],
    isBlocked:Boolean
  },
  {
    timestamps: true,
  }
);