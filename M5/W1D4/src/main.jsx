import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import App from './App.jsx'
import { BookProvider } from './context/BookContext.jsx';
import { ThemeProvider } from "./context/ThemeContext.jsx";
import { SelectedBookProvider } from "./context/SelectedBookContext.jsx";

createRoot(document.getElementById('root')).render(

  <StrictMode>
    <ThemeProvider>
      <BookProvider>
        <SelectedBookProvider>
          <App />
        </SelectedBookProvider>
      </BookProvider>
    </ThemeProvider>
  </StrictMode>

)
