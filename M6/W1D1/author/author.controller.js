const authorService = require("./author.service")

const findAll = async (request, response) => {
  try {
    const users = await authorService.getAuthors()
    if (users.length === 0) {
      return response.status(404).send({
        statusCode: 404,
        message: "Authors not found"
      })
    }
    response.status(200).send({
      statusCode: 200,
      users
    })
  } catch (error) {
    response.status(500).send({
      statuscode: 500,
      message: "Error during the request"
    })
  }
}

const findOne = async (request, response) => {
  try {
    const { userId } = request.params
    if (!userId) {
      return response.status(400).send({
        statusCode: 400,
        message: "Invalid param provided"
      })
    }
    const author = await authorService.getAuthorById(userId)
    if (!author) {
      return response.status(404).send({
        statusCode: 404,
        message: "Author not found"
      })
    }
    response.status(200).send({
      statusCode: 200,
      author
    })
  } catch (error) {
    response.status(500).send({
      statusCode: 500,
      message: "Error during the request"
    })
  }
}

const create = async (request, response) => {
  const { body } = request
  try {
    const newAuthor = await authorService.createAuthor(body)
    response.status(201).send({
      statusCode: 201,
      message: "Author created successfully",
      newAuthor
    })
  } catch (error) {
    response.status(500).send({
      statusCode: 500,
      message: "Error during the request"
    })
  }
}

const update = async (request, response) => {

  const { body } = request
  const { userId } = request.params
  try {
    const updatedAuthor = await authorService.updateAuthor(userId, body)
    if (!userId) {
      return response.status(400).send({
        statusCode: 400,
        message: "Cannot update author"
      })
    }
    response.status(200).send({
      statusCode: 200,
      message: "Author updated successfully",
      updatedAuthor
    })
  } catch (error) {
    response.status(500).send({
      statusCode: 500,
      message: "Error during the request"
    })
  }

}

const deleteOne = async (request, response) => {

  const { userId } = request.params
  try {
    if (!userId) {
      return response.status(400).send({
        statusCode: 400,
        message: "Invalid params provided"
      })
    }

    await authorService.deleteAuthor(userId)

    response.status(200).send({
      statusCode: 200,
      message: "Author deleted successfully"
    })
  } catch (error) {
    response.status(500).send({
      statusCode: 500,
      message: "Error during the request"
    })
  }

}

module.exports = {
  findAll,
  findOne,
  create,
  update,
  deleteOne
}