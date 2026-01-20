import { useState } from 'react'

const useAuthors = () => {
  const [authorsIsLoading, setAuthorsIsLoading] = useState(false)
  const [authorsData, setAuthorsData] = useState([])
  const [authorsError, setAuthorsError] = useState(null)

  const URL = import.meta.env.VITE_BASE_SERVER_URL
  const getAuthors = async () => {
    setAuthorsIsLoading(true)
    try {
      const token = localStorage.getItem('token')
      const response = await fetch(`${URL}/authors`, {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      })
      const data = await response.json()
      setAuthorsData(data)
    } catch (error) {
      setAuthorsError(error)
    } finally {
      setAuthorsIsLoading(false)
    }
  }

  const createAuthor = async (newAuthor) => {
    setAuthorsIsLoading(true)
    try {
      const token = localStorage.getItem('token')
      const response = await fetch(`${URL}/authors`, {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-type": "application/json"
        },
        body: JSON.stringify(newAuthor)
      })
      const data = await response.json()

      setAuthorsData(prevData => [...prevData, data])
    } catch (error) {
      setAuthorsError(error)
    } finally {
      setAuthorsIsLoading(false)
    }
  }

  return {
    authorsIsLoading,
    authorsData,
    authorsError,
    getAuthors,
    createAuthor
  }
}

export default useAuthors