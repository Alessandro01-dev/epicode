const authorSchema = require("../author/author.schema")
const BlogPostSchema = require("./blogPost.schema")

const getBlogPosts = async (page, pageSize) => {
  const blogPosts = await BlogPostSchema.find()
    .limit(pageSize)
    .skip((page - 1) * pageSize)
  const totalBlogPosts = await BlogPostSchema.countDocuments()
  const totalPages = Math.ceil(totalBlogPosts / pageSize)
  return {
    page,
    pageSize,
    totalBlogPosts,
    totalPages,
    blogPosts
  }
}

const getBlogPostById = async (blogPostId) => {
  const blogPost = await BlogPostSchema.findById(blogPostId)
  return blogPost
}

const createBlogPost = async (body) => {
  const newBlogPost = new BlogPostSchema(body)
  const savedBlogPost = await newBlogPost.save()
  return savedBlogPost
}

const updateBlogPost = async (blogPostId, body) => {
  const options = { new: true }
  return await BlogPostSchema.findByIdAndUpdate(blogPostId, body, options)
}

const deleteBlogPost = async (blogPostId) => {
  return await BlogPostSchema.findByIdAndDelete(blogPostId)
}

module.exports = {
  getBlogPosts,
  getBlogPostById,
  createBlogPost,
  updateBlogPost,
  deleteBlogPost,
}