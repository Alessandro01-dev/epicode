import { useState } from "react"

const useBlogPosts = () => {
  const [blogPostsIsLoading, setBlogPostsIsLoading] = useState(false)
  const [blogPostsData, setBlogPostsData] = useState([])
  const [blogPostsError, setBlogPostsError] = useState(null)

  const URL = "http://localhost:4545"

  const getBlogPosts = async () => {
    setBlogPostsIsLoading(true)
    try {
      const response = await fetch(`${URL}/blogPosts`)
      const data = await response.json()
      setBlogPostsData(data)
    } catch (error) {
      setBlogPostsError(error)
    } finally {
      setBlogPostsIsLoading(false)
    }
  }

  const getBlogPostById = async (blogPostId) => {
    setBlogPostsIsLoading(true)
    try {
      const response = await fetch(`${URL}/blogPosts/${blogPostId}`)
      const data = await response.json()
      setBlogPostsData(data)
    } catch (error) {
      setBlogPostsError(error)
    } finally {
      setBlogPostsIsLoading(false)
    }
  }

  const getBlogPostsByAuthorId = async (authorId) => {
    setBlogPostsIsLoading(true)
    try {
      const response = await fetch(`${URL}/authors${authorId}/blogPosts`)
      const data = await response.json()
      setBlogPostsData(data)
    } catch (error) {
      setBlogPostsError(error)
    } finally {
      setBlogPostsIsLoading(false)
    }
  }

  const getBlogPostsByTitle = async (query) => {
    setBlogPostsIsLoading(true)
    try {
      const response = await fetch(`${URL}/search/blogPosts?title=${query}`)
      const data = await response.json()
      setBlogPostsData(data)
    } catch (error) {
      setBlogPostsError(error)
    } finally {
      setBlogPostsIsLoading(false)
    }
  }

  const createBlogPost = async (newPost) => {
    setBlogPostsIsLoading(true)
    try {
      const response = await fetch(`${URL}/blogPosts`, {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(newPost)
      })
      const data = await response.json()

      setBlogPostsData(prevData => [...prevData, data])
    } catch (error) {
      setBlogPostsError(error)
    } finally {
      setBlogPostsIsLoading(false)
    }
  }

  return {
    blogPostsIsLoading,
    blogPostsData,
    blogPostsError,
    getBlogPosts,
    getBlogPostById,
    getBlogPostsByAuthorId,
    getBlogPostsByTitle,
    createBlogPost
  }

}

export default useBlogPosts