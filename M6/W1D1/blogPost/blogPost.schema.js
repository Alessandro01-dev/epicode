const mongoose = require("mongoose")

const BlogPost = new mongoose.Schema({
  category: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  cover: {
    type: String,
    required: true
  },
  readTime: {
    value: {
      type: Number,
      required: true
    },
    unit: {
      type: String,
      required: true
    }
  },
  author: {
    type: String,
    required: true,
    unique: true
  },
  content: {
    type: String,
    required: true
  }
}, { timestamps: true, strict: true })

module.exports = mongoose.model("blogPost", BlogPost, "blogPosts")