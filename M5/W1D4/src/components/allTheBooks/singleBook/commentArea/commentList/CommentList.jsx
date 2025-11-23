import SingleComment from "./singleComment/SingleComment"

const CommentList = ({ reviews }) => {

  return (

    <>
      <ul>
        {reviews && reviews.map(review => (
            <SingleComment 
              review={review}
              key={review._id}
            />
        )
        )}
      </ul>
    </>

  )

}

export default CommentList