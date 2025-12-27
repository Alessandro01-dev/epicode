const express = require("express")
const PORT = 4545

const startServer = require("./database/index")
const authorRoute = require("./author/author.route")
const blogPostRoute = require("./blogPost/blogPost.route")

const cors = require("cors")


const app = express()
app.use(cors())
app.use(express.json())
app.use("/", authorRoute)
app.use("/", blogPostRoute)

startServer(PORT, app)