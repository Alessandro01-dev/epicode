import { createContext, useEffect, useState } from "react";

export const BookContext = createContext()

export const BookProvider = ({ children }) => {

  const [books, setBooks] = useState([]);

  const [error, setError] = useState('');

  const [isLoading, setIsLoading] = useState(false);

  const [allBooks, setAllBooks] = useState([])

  const getBooks = async () => {

    setIsLoading(true)

    try {

      const response = await fetch("https://epibooks.onrender.com/")

      const data = await response.json()

      setBooks(data)

      setAllBooks(data)

    } catch (error) {

      setError(error.message)

    } finally {

      setIsLoading(false)

    }

  }

  useEffect(() => {
    getBooks()
  }, [])

  return (

    <BookContext.Provider
      value={{ books, error, isLoading, setBooks, allBooks }}
    >
      {children}
    </BookContext.Provider>

  )


}