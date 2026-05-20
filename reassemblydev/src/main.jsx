import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes, Outlet } from 'react-router-dom'

import './index.css'
import Blogs from './pages/Blogs.jsx'
import Landing from './pages/Landing.jsx'
import NeuralNetBlog from './pages/blogs/NeuralNet.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />

        <Route exact path="/blogs" element={<Blogs />} />
        <Route path="/blogs/neural-net" element={<NeuralNetBlog />} />

      </Routes>
    </BrowserRouter>
  </StrictMode>
)