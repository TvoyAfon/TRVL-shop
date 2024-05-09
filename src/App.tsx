import MainPage from './MainPage/MainPage'
import Navbar from './Navbar/Navbar'
import ErrorPage from './ErrorPage/ErrorPage'
import Work from '../src/Work/Work'
import Footer from './Footer/Footer'
import './App.css'
import {Route,Routes} from 'react-router-dom'

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/projects" element={<Work />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>    
    <Footer/>
    </>
  )
}

export default App
