import MyAlert from "../../../../../utils/myAlert/MyAlert"
import SingleComment from "./singleComment/SingleComment"

const CommentList = ({ reviews, getReviews }) => {

  return (

    <>
      <ul>
        {reviews.length === 0 && <MyAlert message="There are no reviews for this book yet"/>}
        {reviews && reviews.map(review => (
            <SingleComment 
              review={review}
              key={review._id}
              getReviews={getReviews}
            />
        )
        )}
      </ul>
    </>

  )

}

export default CommentList