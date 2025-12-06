import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import About from './pages/About'
import ErrorPage from './pages/ErrorPage'
import BookDetails from './pages/BookDetails'
import Browse from './pages/Browse'

const App = () => {

  return (

    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/browse" element={<Browse />} />

        <Route path="/book/:asin" element={<BookDetails />} />

        <Route path="*" element={<ErrorPage />} />

      </Routes>
    </BrowserRouter>

  )
}

export default App
