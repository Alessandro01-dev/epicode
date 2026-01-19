const express = require("express")
const PORT = 4545
const cors = require("cors")
const startServer = require("./database/index")

// middleware imports
// const checkCustomHeader = require('./middlewares/index')
// const counter = require('./middlewares/counter')
// const serverLog = require('./middlewares/serverLog')
// const checkUniqueVisitor = require('./middlewares/singleVisitorCounter')
const verifyToken = require('./middlewares/auth/verifyToken')
const errorHandler = require('./middlewares/errorHandler')

// routes imports
const authorRoute = require("./modules/author/author.route")
const blogPostRoute = require("./modules/blogPost/blogPost.route")
const commentRoute = require("./modules/comment/comment.route")
const authRoute = require("./modules/auth/auth.route")

const app = express()

// middlewares
app.use(cors())
app.use(express.json())
// app.use(checkCustomHeader)
// app.use(counter)
// app.use(serverLog)
// app.use(checkUniqueVisitor)
app.use(verifyToken)

// routes
app.use("/", authorRoute)
app.use("/", blogPostRoute)
app.use("/", commentRoute)
app.use("/", authRoute)

// error handler
app.use(errorHandler)

startServer(PORT, app)