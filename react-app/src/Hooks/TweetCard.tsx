import axios from "axios"
import { useEffect, useState } from "react"

/*
   this Hook is get all tweet and display 

 */

interface Data {
    id: string
    name: string
    username: string
    tweet: string,

}
const url = 'https://64ec522df9b2b70f2bfa1874.mockapi.io/api/Tweet/tweet'

export default function TweetCard() {

    //get all elements from tweet table
    const [getTweet, setTweet] = useState<Data[]>([])
    // const [favorite, setfavorite] = useState([])


    useEffect(() => {
        try {
            axios.get(url).then((res) => {
                setTweet(res.data)
            })
        } catch (error) {
            console.log(error);
        }
    }, [])

    //delete tweet by id 
    const tweetDelete = (id: string) => {
        const confirmAction = confirm('Do you want delete this tweet ?')
        if (confirmAction) {
            axios.delete(url + '/' + id)
                .then(() => {
                    setTweet(getTweet.filter((del) => {
                        return del.id !== id;
                    }))
                })
            console.log(id);
        } else {
            return
        }
    }


    const tweetFavorite = (id: string) => {
        const element = getTweet.find((e) => e.id == id)
        
        try {
          localStorage.setItem('favorite',
          JSON.stringify(Object([element])
          ))
          const x = localStorage.getItem("favorite")
          console.log(x);
          
        } catch (error) {
            console.log(error);

        }
    }



    return (
        <div>

            {
                getTweet.map((e) => (
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
                                    <div onClick={() => tweetFavorite(e.id)}>
                                        <p className="cursor-pointer">Like</p>
                                    </div>
                                    <p>icon</p>
                                    <p>icon</p>

                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
