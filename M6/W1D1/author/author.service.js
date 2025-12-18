const AuthorSchema = require("./author.schema")

const getAuthors = async () => {
  const users = await AuthorSchema.find()
  return users
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

const deleteAuthor = async (userId) => {

  return await AuthorSchema.findByIdAndDelete(userId)

}

module.exports = {
  getAuthors,
  getAuthorById,
  createAuthor,
  updateAuthor,
  deleteAuthor
}