import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom";



const urlUser = 'https://64ec522df9b2b70f2bfa1874.mockapi.io/api/Tweet/users'
export default function SignUp() {
  const [msg, setMsg] = useState('');
  const navigate = useNavigate();
  const [getUserInput, settUserInput] = useState({
    username: '',
    email: '',
    password: '',
    name: '',
  })

  const input = () => {

    //Check inputs before Sign up 
    if (getUserInput.username == '' || getUserInput.email == '' || getUserInput.password == '') {
      setMsg('Please fill in the fields !')
      return
    }
    else if (getUserInput.username.length < 5) {

      setMsg('Username must be more than 5 characters !')
      return
    }
    else if (getUserInput.password.length < 5) {
      setMsg('Password must be more than 5 !')
      return
    }
    axios.post(urlUser, {
      username: getUserInput.username,
      name: getUserInput.name,
      email: getUserInput.email,
      password: getUserInput.password
    })
    navigate('/login')
  }


  return (
    <>

      <div className="flex justify-center items-center w-full h-screen text-black">
        <div className="flex flex-col gap-2 justify-center items-center h-52 w-72 bg-slate-600">
          <p>{msg}</p>
          <div>
            <input placeholder="Name" onChange={(e) => settUserInput({ ...getUserInput, name: e.target.value })} type="text" />
          </div>
          <div>
            <input placeholder="Username" onChange={(e) => settUserInput({ ...getUserInput, username: e.target.value })} type="text" />
          </div>
          <div>
            <input placeholder="Email" onChange={(e) => settUserInput({ ...getUserInput, email: e.target.value })} type="text" />
          </div>
          <div>
            <input placeholder="password" onChange={(e) => settUserInput({ ...getUserInput, password: e.target.value })} type="text" />
          </div>

          <button onClick={input} className="border h-11 w-28">Reg</button>
        </div>
      </div>

    </>
  )
}
