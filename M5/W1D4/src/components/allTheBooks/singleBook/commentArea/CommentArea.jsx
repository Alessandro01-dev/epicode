import { useState, useEffect } from "react"
import CommentList from "./commentList/CommentList"
import AddComment from "./addComment/AddComment"

const CommentArea = ({ asin }) => {

  const [reviews, setReviews] = useState([])

  const getReviews = async () => {

    try {

      const response = await fetch(`https://striveschool-api.herokuapp.com/api/books/${asin}/comments/`)

      const data = await response.json()
      setReviews(data)

    } catch (error) {
      console.log(error.message)
    }

  }

  useEffect(() => {
    getReviews()
  }, [])

  console.log(reviews)

  return (
    <>
      <CommentList
        reviews={reviews}
      />
      <AddComment 
        asin={asin}
      />
    </>
  )

}

export default CommentArea