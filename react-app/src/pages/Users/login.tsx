import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";


interface User {
  id: string
  username: string,
  password: string,
  name: string,
}

const urlUser = 'https://64ec522df9b2b70f2bfa1874.mockapi.io/api/Tweet/users'

export default function Login() {

  const navigate = useNavigate();
  const [msg, setMsg] = useState('');
  const [getUser, setUser] = useState<User[]>([])

  //get input from user and save it in objects variables
  const [getUserInput, settUserInput] = useState({
    username: '',
    password: '',
  })
  // get all users , we need get id of user who login 
  useEffect(() => {
    try {
      axios.get(urlUser)
        .then((response) => {
          setUser(response.data)
        })
    } catch (error) {
      console.log(error);
    }
  }, [getUserInput])


  /*
  get username from user input => we need find id of user by username"ID"
  */
  const username = getUserInput.username
  const password = getUserInput.password
  const user = getUser.find((e) => e.username == username)


  const users = getUser.find((e) => e.username == username)
  console.log(users);

  const input = () => {

    //Check inputs before login 
    if (username == '' || password == '') {
      setMsg('Please fill in the fields !')
      return
    } 
    else if (users?.username == getUserInput.username && users?.password == getUserInput.password) {
      //save id user in localStorage
      localStorage.setItem('id', String(user?.id))
      //user input
      localStorage.setItem('username', getUserInput.username)
      localStorage.setItem('password', getUserInput.password)

      navigate('/')

    }else{
      setMsg('username or password is incorrect!')
    }

  }
  //-------------------------------------------------------------

  return (
    <>

      <div className="flex justify-center items-center w-full h-screen text-black">
        <div className="flex flex-col gap-2 justify-center items-center h-52 w-72 bg-slate-600">
          <p>{msg}</p>
          <div>
            <input placeholder="Username" onChange={(e) => settUserInput({ ...getUserInput, username: e.target.value })} type="text" />
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
