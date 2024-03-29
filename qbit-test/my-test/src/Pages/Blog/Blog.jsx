import React from 'react'
import Blogs from '../../Component/Blog/Blog'
import { BrowserRouter } from 'react-router-dom'
import Navbar from '../../Navbar/Navbar'
import Footer from '../../Footer/Footer'

const Blog = () => {
  return (
    <>
    <Navbar/>
    <Blogs/>
    <Footer/>
    </>
  )
}

export default Blog