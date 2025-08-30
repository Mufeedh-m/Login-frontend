import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Success from './pages/Success.jsx'
import Failure from './pages/Failure.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element ={<App/>}></Route>
      <Route path="/success" element ={<Success/>}></Route>
      <Route path="/failure" element ={<Failure/>}></Route>
    </Routes>
  </BrowserRouter>
)
