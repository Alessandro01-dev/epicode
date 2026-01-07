let getCounter = 0
let postCounter = 0
let patchCounter = 0
let deleteCounter = 0

const requestCounter = (req, res, next) => {

  const { method } = req

  switch (method) {
    case "GET":
      getCounter++
      break;
    case "POST":
      postCounter++
      break;
    case "PATCH":
      patchCounter++
      break;
    case "DELETE":
      deleteCounter++
      break;
  }

  const mainCounter = {
    get: getCounter,
    post: postCounter,
    patch: patchCounter,
    delete: deleteCounter
  }

  console.log(mainCounter)

  next()

}

module.exports = requestCounter