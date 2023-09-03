import axios from "axios"
import { useEffect, useState } from "react"

interface Data {
  id:string
  userId: string
  name: string
  username: string
  tweet: string,

}
const url = 'https://64ec522df9b2b70f2bfa1874.mockapi.io/api/Tweet/tweet'

export default function Profile() {

  const user = localStorage.getItem('username')

  if (user) {
    null
  } else {
    alert("Please Login")
    location.href = '/login'
  }

  const [allMyTweet, setAllTweet] = useState<Data[]>([])


  useEffect(() => {
    try {
      axios.get(url).then((res) => {
        setAllTweet(res.data)
      })
    } catch (error) {
      console.log(error);
    }
  }, [])


/*
filter all tweet by id 
*/
const localUser = localStorage.getItem('id')
const currantUser = allMyTweet.filter((e)=> e.userId == localUser)

  
  //delete tweet by id 
  const tweetDelete = (id: string) => {
    const confirmAction = confirm('Do you want delete this tweet ?')
    if (confirmAction) {
        axios.delete(url + '/' + id)
            .then(() => {
              setAllTweet(allMyTweet.filter((del) => {
                    return del.id !== id;
                }))
            })
        console.log(id);
    } else {
        return
    }
}

  return (
    <>
      <div>
        <div className="flex justify-center">
          <div className="w-80 bg-white">
            {
              currantUser.map((e) => (
                <div key={e.id}>
                  <div className="flex flex-col m-1 bg-indigo-700 text-white h-auto ">

                    <div className="flex flex-col p-2">
                      <div className="flex justify-between ">

                        {/* User Info => "Name , username , tweet" */}
                        <div className="flex items-center w-full ">
                          <p className="border rounded-3xl  w-12 h-12 "></p>
                          <p className=" ml-2 mr-1">{e.name}</p>
                          <p key={e.id} className=" text-sm text-gray-400">@{e.username}</p>
                        </div>

                        {/* Button Action => "Delete" */}
                        <div className=" cursor-pointer">
                          <div onClick={() => tweetDelete(e.id)}>
                            <p>Delete</p>
                          </div>
                        </div>
                      </div>

                      {/* Tweet User  */}
                      <div className="flex justify-between items-center ml-12 mr-3">
                        <div className="flex justify-around ml-2  ">
                          <p >{e.tweet}</p>
                        </div>
                      </div>

                      {/* Action icons => "comment ,Retweet  , like , share" */}
                      <div className="flex justify-around w-2/3 ml-4 pt-4">
                        <p>icon</p>
                        <p>icon</p>
                        <p>icon</p>

                      </div>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
  
    </>
  )
}
