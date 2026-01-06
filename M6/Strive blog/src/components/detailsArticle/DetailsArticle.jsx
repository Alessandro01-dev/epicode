import { Col, Container, Row } from "react-bootstrap"
import { useParams } from "react-router-dom"
import useBlogPosts from "../../hooks/useBlogPosts"
import { useEffect } from "react"
import './DetailsArticle.css'

const DetailsArticle = () => {

  const { blogPostId } = useParams()

  const { getBlogPostById, blogPostsData } = useBlogPosts()

  useEffect(() => {
    getBlogPostById(blogPostId)
  }, [blogPostId])

  console.log(blogPostsData)

  return (
    <Container
      className="py-5 text-center"
    >
      <Row>
        <Col>
          {blogPostsData.blogPost && (
            <>
              <img
                className="w-100 d-block object-fit-cover"
                src={blogPostsData.blogPost.cover} alt="cover article image"
              />
              <h1
                className="my-5"
              >{blogPostsData.blogPost.title}</h1>
              <div 
                className="article-content"
                dangerouslySetInnerHTML={{ __html: `${blogPostsData.blogPost.content}` }}
              />
            </>
          )}
        </Col>
      </Row>
    </Container>
  )
}

export default DetailsArticle