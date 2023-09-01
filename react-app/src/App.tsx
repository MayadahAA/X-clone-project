import './001-Css/App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Profile from './Pages/Profile'
import Signup from './Pages/Users/Signup'
import Login from './Pages/Users/login'


function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/profile' element={<Profile/>} />
      <Route path='/profile/:id' element={<Profile/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/login' element={<Signup/>} />
    </Routes>
   
    </>
  )
}

export default App
