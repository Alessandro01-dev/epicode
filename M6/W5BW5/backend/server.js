const express = require("express");
const cors = require("cors");
const startServer = require("./config/db");
const PORT = 4545;
const passport = require('passport')
const session = require('express-session')
const { initGooglePassport } = require('./modules/googleOauth/oauth.config')

// middleware imports
const errorHandler = require("./middleware/errorHandler/errorHandler");
const tokenVerify = require("./middleware/tokenVerify/tokenVerify");

// routes imports
const userRoute = require("./modules/user/user.route");
const experienceRoute = require("./modules/experience/experience.route");
const authRoute = require("./modules/auth/auth.route");
const server = express();
const oauthGoogleRoute = require('./modules/googleOauth/oauth.route')

// middlewares
server.use(cors());
server.use(express.json());
server.use(tokenVerify);

// impostare il middleware che gestisce le sessioni lato server
server.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
}))

// middlewares di passport
server.use(passport.initialize())
server.use(passport.session())
initGooglePassport()

// routes
server.use("/", authRoute);
server.use("/", userRoute);
server.use("/", experienceRoute);
server.use("/", oauthGoogleRoute)

// error handlers
server.use(errorHandler);

startServer(PORT, server);
