const jwt = require('jsonwebtoken')
const InvalidOrMissingTokenException = require('../../exceptions/auth/InvalidOrMissingTokenException')

const excludedRoutes = [
  '/login',
  '/authors/avatar',
  '/blogPosts/cover',
  '/github',
  '/github/callback',
  '/google',
  '/google/callback',
  '/blogPostsAdmin',
  '/authorAdmin'
]

const verifyToken = (req, res, next) => {
  if (req.path === '/authors' && req.method === 'POST') {
    return next()
  }
  if (excludedRoutes.includes(req.path)) {
    return next()
  }
  const token = req.header('Authorization')
  if (!token) {
    throw new InvalidOrMissingTokenException()
  }
  try {
    const sanitizedToken = token.replace('Bearer ', '')
    req.user = jwt.verify(sanitizedToken, process.env.JWT_SECRET)
    next()
  } catch (error) {
    throw new InvalidOrMissingTokenException()
  }
}

module.exports = verifyToken