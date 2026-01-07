const visitors = new Set()

const checkUniqueVisitor = (req, res, next) => {

  const { ip } = req

  visitors.add(ip)

  console.log(visitors.size)

  next()

}

module.exports = checkUniqueVisitor