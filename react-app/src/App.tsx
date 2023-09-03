import './001-Css/App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Profile from './Hooks/Profile'
import Login from './pages/Users/login'
import SignUp from './pages/Users/Signup'


function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/profile' element={<Profile/>} />
      <Route path='/profile/:id' element={<Profile/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/SignUp' element={<SignUp/>} />
    </Routes>
   
    </>
  )
}

export default App
