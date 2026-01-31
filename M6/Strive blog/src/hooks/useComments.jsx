import { useState } from "react"

const useComments = () => {
  const [commentsIsLoading, setCommentsIsLoading] = useState(false)
  const [commentsData, setCommentsData] = useState([])
  const [commentsError, setCommentsError] = useState(null)

  const URL = import.meta.env.VITE_BASE_SERVER_URL

  const getComments = async (blogPostId, page, pageSize) => {
    setCommentsIsLoading(true)
    try {
      const token = localStorage.getItem('token')
      const response = await fetch(`${URL}/blogPosts/${blogPostId}/comments?page=${page}&pageSize=${pageSize}`, {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      })

      if (!response.ok) {
        const errorResponse = await response.json()
        throw new Error(errorResponse.message)
      }

      const data = await response.json()
      setCommentsData(data.comments)
      return data
    } catch (error) {
      setCommentsError(error.message)
    } finally {
      setCommentsIsLoading(false)
    }
  }

  const createComment = async (blogPostId, newComment) => {
    setCommentsIsLoading(true)
    try {
      const token = localStorage.getItem('token')
      const response = await fetch(`${URL}/blogPosts/${blogPostId}`, {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-type": "application/json"
        },
        body: JSON.stringify(newComment)
      })

      if (!response.ok) {
        const errorResponse = await response.json()
        throw new Error(errorResponse.message)
      }

      const data = await response.json()
      setCommentsData(prevData => [...prevData, data])
      return data
    } catch (error) {
      setCommentsError(error.message)
    } finally {
      setCommentsIsLoading(false)
    }
  }

  return {
    commentsIsLoading,
    commentsData,
    commentsError,
    getComments,
    createComment
  }

}

export default useComments