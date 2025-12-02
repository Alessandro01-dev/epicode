import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import About from './pages/About'
import ErrorPage from './pages/ErrorPage'

const App = () => {

  return (

    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />

        <Route path="*" element={<ErrorPage />} />

      </Routes>
    </BrowserRouter>

  )
}

export default App
