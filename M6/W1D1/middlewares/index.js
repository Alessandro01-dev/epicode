const checkCustomHeader = (req, res, next) => {

  if (req.headers['alessandro'] === 'x') {
    next()
  } else {
    res.status(400).send({
      statusCode: 400,
      message: "non sei autorizzato"
    })
  }

}



module.exports = checkCustomHeader