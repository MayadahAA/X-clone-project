import axios from "axios"
import { useEffect, useState } from "react"

  interface User {
    id:string
    username:string,
    name:string,
  }

interface Data {
  id:string
  userId:string
  tweet:string
}

const urlUser = 'https://64ec522df9b2b70f2bfa1874.mockapi.io/api/Tweet/users'
const urlTweet = 'https://64ec522df9b2b70f2bfa1874.mockapi.io/api/Tweet/tweet'

export default function HeaderCard() {


  const [getUser, setUser] = useState<User[]>([])
  const [getTweet, setTweet] = useState<Data[]>([])

   //--------------------------------------------
  //Initialize New tweet
  const [getNewTweet, setNewTweet] = useState({
    tweet: '',
  });

//  get all tweet , we need get => userId 
  useEffect(() => {
    try {
      axios.get(urlTweet)
      .then((response)=>{
        setTweet(response.data)
      })
    } catch (error) {
      console.log(error);
    }
  },[])
  
  // get all users , we need get => id of user 
  useEffect( () => {
    try {
      axios.get(urlUser)
      .then((response)=>{
        setUser(response.data)
      })
    } catch (error) {
      console.log(error);
    }
  },[])
 
  //get id from localStorage
  const localUserID = localStorage.getItem('id')
  

  // get ID from users table and Compare it with localStorage data => id of user
  const users = getUser.find((e)=>e.id == localUserID)
  console.log("------------- ID " + users?.id);
  
  // get ID from tweet table 
  const tweet = getTweet.find((e)=> e.userId == '1')

  console.log(tweet?.userId);

  
//---------------------------------------------
// input of user from form => "tweet" , and get all info of user from API "Users table" => "userId , username , name"
  const input = () => {
    axios.post(urlTweet , {
      userId:users?.id,
      username:users?.username,
      name:users?.name,
      tweet: getNewTweet.tweet
    })
  }

  return (
    <>
      {/* first Header body */}
      <div className="flex flex-col ml-1 mr-1 bg-indigo-700 text-white h-auto">
        <div className="flex justify-between h-10 p-2">
          <p>Home</p>
          <p>Icon</p>
        </div>

        <hr />

        {/* img & hent */}
        <div className="flex flex-col p-2 flex-wrap">
          <div className="flex items-center">
            <p className="border rounded-3xl  w-12 h-12 "></p>
            <textarea
              className=" text-black m-2 rounded-2xl w-80 h-10 p-2" placeholder="what's happening ?"
              value={getNewTweet.tweet}
              onChange={(e) => setNewTweet({ ...getNewTweet, tweet: e.target.value })}
            />
          </div>

          {/* icons for => "upload , ...." */}
          <div className="flex justify-between items-center ml-12 mr-3">
            <div className="flex justify-around ml-2 w-32 ">
              <p>Icon</p>
              <p>Icon</p>
              <p>Icon</p>
            </div>
            <div className="h-8 w-16 rounded-2xl text-center border bg-cyan-500 cursor-pointer"
              onClick={input}
            >Tweet</div>
          </div>
        </div>
      </div>



    </>
  )
}
