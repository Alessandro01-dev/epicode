import { Container, Row } from "react-bootstrap"
import SingleArticleCard from "./singleArticleCard/SingleArticleCard"
import useBlogPosts from "../../hooks/useBlogPosts"
import { useEffect } from "react"

const ArticleCardsListing = () => {

  const { getBlogPosts, blogPostsData } = useBlogPosts()

  useEffect(() => {
    getBlogPosts()
  }, [])

  console.log(blogPostsData)

  return (

    <Container
      className="py-5"
    >
      <Row
        className="g-3"
      >
        {blogPostsData.blogPosts?.map(blogPost => (
          <SingleArticleCard
            title={blogPost.title}
            coverImg={blogPost.cover}
            author={blogPost.author}
            blogPostId={blogPost._id}
          />
        ))}
      </Row>
    </Container>

  )

}

export default ArticleCardsListing