const AuthorSchema = require('../author/author.schema')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const UserNotFoundException = require('../../exceptions/authors/UserNotFoundException')
const InvalidPasswordException = require('../../exceptions/auth/InvalidPasswordException')

const login = async (body) => {
  const { email, password } = body
  const user = await AuthorSchema.findOne({ email })
  console.log(user)
  if (!user) {
    throw new UserNotFoundException()
  }
  const isPasswordValid = await bcrypt.compare(password, user.password)
  if (!isPasswordValid) {
    throw new InvalidPasswordException()
  }
  const token = jwt.sign({
    id: user._id.toString(),
    name: user.name,
    surname: user.surname,
    dob: user.dob,
    avatar: user.avatar
  }, process.env.JWT_SECRET, {
    expiresIn: '1h'
  })

  return token
}

module.exports = {
  login
}