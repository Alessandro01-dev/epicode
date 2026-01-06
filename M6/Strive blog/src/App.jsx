import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './pages/homepage/Homepage';
import NewArticlePage from './pages/newArticlePage/NewArticlePage'
import DetailsArticlePage from './pages/detailsArticlePage/DetailsArticlePage';
import NotFoundPage from './pages/notFoundPage/NotFoundPage'

const App = () => {

  return (
    <Router>
      <Routes>
        <Route index path="/" element={<Homepage />} />
        <Route path="/newArticlePage" element={<NewArticlePage />} />
        <Route path="/detailsArticlePage/:blogPostId" element={<DetailsArticlePage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  )
}

export default App
