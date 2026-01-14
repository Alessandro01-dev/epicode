const mongoose = require("mongoose")

const Author = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  surname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  dob: {
    type: Date,
    required: false,
    default: Date.now()
  },
  avatar: {
    type: String,
    required: false,
    default: "https://img.freepik.com/premium-vector/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3485.jpg?w=360"
  },
  blogPosts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "blogPost",
    default: []
  }],
  comments: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "blogPost",
    default: []
  }]
}, { timestamps: true, strict: true })

module.exports = mongoose.model("author", Author, "authors")