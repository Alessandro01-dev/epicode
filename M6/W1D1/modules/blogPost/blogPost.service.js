const AuthorSchema = require("../author/author.schema")
const blogPostSchema = require("./blogPost.schema")
const BlogPostSchema = require("./blogPost.schema")

const getBlogPosts = async (page, pageSize) => {
  const blogPosts = await BlogPostSchema.find()
    .limit(pageSize)
    .skip((page - 1) * pageSize)
    .populate("author", "name surname avatar")
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

const getBlogPostsByTitle = async (searchedTitle, page, pageSize) => {
  const searchQuery = { title: { $regex: searchedTitle, $options: 'i' } }
  const blogPosts = await BlogPostSchema.find(searchQuery)
    .limit(pageSize)
    .skip((page - 1) * pageSize)
  const totalBlogPosts = await BlogPostSchema.find(searchQuery).countDocuments()
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
  const userId = body.author
  const newBlogPost = new BlogPostSchema(body)
  const savedBlogPost = await newBlogPost.save()

  await AuthorSchema.updateOne({ _id: userId }, { $push: { blogPosts: newBlogPost._id } })

  return savedBlogPost
}

const updateBlogPost = async (blogPostId, body) => {
  const options = { new: true }
  return await BlogPostSchema.findByIdAndUpdate(blogPostId, body, options)
}

const updateAllDocuments = async () => {
  return await blogPostSchema.updateMany(
    { comments: { $exists: false } },
    { $set: { comments: [] } }
  )
}

const deleteBlogPost = async (blogPostId) => {
  return await BlogPostSchema.findByIdAndDelete(blogPostId)
}

module.exports = {
  getBlogPosts,
  getBlogPostsByTitle,
  getBlogPostById,
  createBlogPost,
  updateBlogPost,
  updateAllDocuments,
  deleteBlogPost,
}