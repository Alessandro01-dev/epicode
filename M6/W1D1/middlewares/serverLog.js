const fs = require('node:fs')
const path = require('path')

const serverLogFile = (req, res, next) => {
  const { method, originalUrl } = req

  const date = new Date().toLocaleDateString()

  const route = path.join(__dirname, "logDate.txt")

  const content = `${date} effettuata richiesta ${method} a ${originalUrl}\n`

  fs.appendFile(route, content, err => {
    if (err) {
      console.error(err)
    } else {
      console.log('ok')
    }
  })

  next()
}

module.exports = serverLogFile