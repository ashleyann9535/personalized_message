const mongoose = require("mongoose");

const MemberSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      require: [true, "First name is required"],
      minlength: [2, "Name must be at least 2 characters"],
    },
    lastname: {
      type: String,
      require: [true, "Last name is required"],
      minlength: [2, "Name must be at least 2 characters"],
    },
    gender: {
      type: String,
      required: [true, "Gender is required"],
      enum: ["Male", "Female", "Other"],
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Member', MemberSchema)