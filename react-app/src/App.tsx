import './001-Css/App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Profile from './Hooks/Profile'
import Login from './Pages/Users/login'
import SignUp from './Pages/Users/SignUp'


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
