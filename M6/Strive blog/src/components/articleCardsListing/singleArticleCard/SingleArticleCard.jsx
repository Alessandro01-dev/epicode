import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./SingleArticleCard.css"

const SingleArticleCard = () => {

  return (

    <Col
      xs={12}
      sm={6}
      lg={4}
      xl={3}
    >
      <Card
        className='article-card-main-container text-decoration-none'
        as={Link}
        to="/detailsArticlePage"
      >
        <Card.Img
          variant="top"
          src="https://picsum.photos/200"
        />
        <Card.Body>
          <Card.Title>This card has supporting text below as a natural lead-in to
            additional content.</Card.Title>
        </Card.Body>
        <Card.Footer>
          <div
            className='d-flex align-items-center gap-3'
          >
            <div
              className='article-author-avatar-container'
            >
              <img
                className='w-100 object-fit-cover'
                src="https://picsum.photos/200"
                alt="article author avatar"
              />
            </div>
            <div
              className='d-flex flex-column'
            >
              <div>
                by
              </div>
              <h6
                className='m-0'
              >Author Name
              </h6>
            </div>
          </div>
        </Card.Footer>
      </Card>
    </Col>

  )

}

export default SingleArticleCard