import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Pages/Header'
import Home from './Pages/Home'
import Courses from './Pages/Courses'
import Events from './Pages/Events'
import Cart from './Pages/Cart'
import Login from './Pages/Login'


function App() {
  

  return (
    <div>
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/courses' element={<Courses />} />
      <Route path='/events' element={<Events />} />
      <Route path='/login' element={<Login />} />
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
