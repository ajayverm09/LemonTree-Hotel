import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import ContactUs from './Pages/Contact'
import About from './Pages/About'
import Blogs from './Pages/Blogs'
import SingleBlog from './Pages/SingleBlog'
import ScrollToTop from './Components/ScrollToTop'

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
        <Navbar/>
        <ScrollToTop/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/blogs' element={<Blogs/>}/>
          <Route path='/blog/:id' element={<SingleBlog/>}/>
          <Route path='/contact' element={<ContactUs/>}/>
        </Routes>
        <Footer/>
        </BrowserRouter>
      </div>
      
    </>
  )
}

export default App
