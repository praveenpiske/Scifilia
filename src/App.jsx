
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import AppRoutes from './AppRoutes'
import { BrowserRouter } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <AppRoutes />
      <Footer />
    </BrowserRouter>
  )
}

export default App
