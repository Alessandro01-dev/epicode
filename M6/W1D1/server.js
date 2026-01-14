const express = require("express")
const PORT = 4545

const startServer = require("./database/index")

// middleware imports
const checkCustomHeader = require('./middlewares/index')
const counter = require('./middlewares/counter')
const serverLog = require('./middlewares/serverLog')
const checkUniqueVisitor = require('./middlewares/singleVisitorCounter')

// routes imports
const authorRoute = require("./modules/author/author.route")
const blogPostRoute = require("./modules/blogPost/blogPost.route")
const commentRoute = require("./modules/comment/comment.route")

const cors = require("cors")

const app = express()

app.use(cors())

// middlewares
app.use(express.json())
// app.use(checkCustomHeader)
app.use(counter)
// app.use(serverLog)
app.use(checkUniqueVisitor)

// routes
app.use("/", authorRoute)
app.use("/", blogPostRoute)
app.use("/", commentRoute)

startServer(PORT, app)