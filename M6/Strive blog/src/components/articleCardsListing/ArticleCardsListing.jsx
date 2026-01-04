import { Container, Row } from "react-bootstrap"
import SingleArticleCard from "./singleArticleCard/SingleArticleCard"

const ArticleCardsListing = () => {

  return (

    <Container
      className="py-5"
    >
      <Row
      className="g-3"
      >
        <SingleArticleCard />
        <SingleArticleCard />
        <SingleArticleCard />
        <SingleArticleCard />
        <SingleArticleCard />
        <SingleArticleCard />
        <SingleArticleCard />
        <SingleArticleCard />
        <SingleArticleCard />
        <SingleArticleCard />
        <SingleArticleCard />
      </Row>
    </Container>

  )

}

export default ArticleCardsListing