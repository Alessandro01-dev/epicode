const AuthorSchema = require("./author.schema")

const getAuthors = async (page, pageSize) => {
  const users = await AuthorSchema.find()
    .limit(pageSize)
    .skip((page - 1) * pageSize)
  const totalUsers = await AuthorSchema.countDocuments()
  const totalPages = Math.ceil(totalUsers / pageSize)
  return {
    page,
    pageSize,
    totalUsers,
    totalPages,
    users
  }
}

const getAuthorById = async (userId) => {
  const user = await AuthorSchema.findById(userId)
  return user
}

const createAuthor = async (body) => {

  const newAuthor = new AuthorSchema(body)
  const savedUser = await newAuthor.save()
  return savedUser
}

const updateAuthor = async (userId, body) => {

  const options = { new: true }
  return await AuthorSchema.findByIdAndUpdate(userId, body, options)

}

const updateAllDocuments = async () => {
  return await AuthorSchema.updateMany(
    { password: { $exists: false } },
    { $set: { password: '' } }
  )
}

const deleteAuthor = async (userId) => {

  return await AuthorSchema.findByIdAndDelete(userId)

}

module.exports = {
  getAuthors,
  getAuthorById,
  createAuthor,
  updateAuthor,
  updateAllDocuments,
  deleteAuthor
}