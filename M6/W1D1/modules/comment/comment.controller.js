const commentService = require("./comment.service")

const findBlogPostComments = async (req, res) => {
  const { id } = req.params
  const { page = 1, pageSize = 4 } = req.query
  try {
    const {
      totalComments,
      totalPages,
      comments
    } = await commentService.getBlogPostComments(page, pageSize, id)
    if (comments.length === 0) {
      return res.status(404).send({
        statusCode: 404,
        message: "Blog post comments not found"
      })
    }
    res.status(200).send({
      statusCode: 200,
      page: Number(page),
      pageSize: Number(pageSize),
      totalComments: Number(totalComments),
      totalPages: Number(totalPages),
      comments
    })
  } catch (error) {
    res.status(500).send({
      statusCode: 500,
      message: "Error during the request"
    })
  }
}

const findBlogPostCommentById = async (req, res) => {
  const { id, commentId } = req.params
  try {
    if (!id || !commentId) {
      return res.status(400).send({
        statusCode: 400,
        message: "Invalid param provided"
      })
    }
    const comment = await commentService.getBlogPostCommentById(id, commentId)
    if (!comment) {
      return res.status(404).send({
        statusCode: 404,
        message: "Comment not found"
      })
    }
    res.status(200).send({
      statusCode: 200,
      comment
    })
  } catch (error) {
    res.status(500).send({
      statusCode: 500,
      message: "Error during the request"
    })
  }

}

const createComment = async (req, res) => {
  const { id } = req.params
  const { body } = req
  try {
    const newComment = await commentService.createBlogPostComment({
      ...body,
      blogPost: id
    })
    res.status(201).send({
      statusCode: 201,
      message: "Blog post comment created successfully",
      newComment
    })
  } catch (error) {
    res.status(500).send({
      statusCode: 500,
      message: "Error during the request"
    })
  }
}

const updateComment = async (req, res) => {
  const { content, rating } = req.body
  const { id, commentId } = req.params
  try {
    if (!id || !commentId) {
      return res.status(400).send({
        statusCode: 400,
        message: "Invalid param provided"
      })
    }
    const updatedComment = await commentService.updateBlogPostComment(id, commentId, { content, rating })
    res.status(200).send({
      statusCode: 200,
      message: "Blog post comment updated successfully",
      updatedComment
    })
  } catch (error) {
    res.status(500).send({
      statusCode: 500,
      message: "Error during the request"
    })
  }
}

const deleteComment = async (req, res) => {
  const { id, commentId } = req.params
  try {
    if (!id || !commentId) {
      return res.status(400).send({
        statusCode: 400,
        message: "Invalid param provided"
      })
    }
    const deletedComment = await commentService.deleteBlogPostComment(id, commentId)
    if (!deletedComment) {
      return res.status(404).send({
        statusCode: 404,
        message: "Comment not found"
      })
    }
    res.status(200).send({
      statusCode: 200,
      message: "Blog post comment deleted successfully",
      deletedComment
    })
  } catch (error) {
    res.status(500).send({
      statusCode: 500,
      message: "Error during the request"
    })
  }
}

module.exports = {
  findBlogPostComments,
  findBlogPostCommentById,
  createComment,
  updateComment,
  deleteComment
}