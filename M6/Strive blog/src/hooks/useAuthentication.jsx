import { useState } from "react"

const URL = import.meta.env.VITE_BASE_SERVER_URL

const useAuthentication = () => {
  const [authIsLoading, setAuthIsLoading] = useState(false)
  const [authData, setAuthData] = useState(null)
  const [authError, setAuthError] = useState(null)

  const getProfile = async () => {
    setAuthIsLoading(true)
    try {
      const response = await fetch(`${URL}/me`)
      const data = await response.json()
      setAuthData(data)
    } catch (error) {
      setAuthError(error)
    } finally {
      setAuthIsLoading(false)
    }
  }

  const loginAndGetToken = async (body) => {
    setAuthIsLoading(true)
    try {
      const response = await fetch(`${URL}/login`, {
        method: 'POST',
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(body)
      })
      const data = await response.json()
      localStorage.setItem('token', JSON.stringify(data))
      setAuthData(data)
    } catch (error) {
      setAuthError(error)
    } finally {
      setAuthIsLoading(false)
    }
  }

  return {
    authIsLoading,
    authData,
    authError,
    getProfile,
    loginAndGetToken
  }
}

export default useAuthentication