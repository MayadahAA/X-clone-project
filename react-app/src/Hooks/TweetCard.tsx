import axios from "axios";
import { useEffect, useState } from "react";

/*
   this Hook is get all tweet and display 

 */

interface Data {
  id: string;
  name: string;
  username: string;
  tweet: string;
}
const url = "https://64ec522df9b2b70f2bfa1874.mockapi.io/api/Tweet/tweet";

export default function TweetCard() {
  //get all elements from tweet table
  const [getTweet, setTweet] = useState<Data[]>([]);
  // const [favorite, setfavorite] = useState([])

  useEffect(() => {
    try {
      axios.get(url).then((res) => {
        setTweet(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  //delete tweet by id
  const tweetDelete = (id: string) => {
    const confirmAction = confirm("Do you want delete this tweet ?");
    if (confirmAction) {
      axios.delete(url + "/" + id).then(() => {
        setTweet(
          getTweet.filter((del) => {
            return del.id !== id;
          })
        );
      });
      console.log(id);
    } else {
      return;
    }
  };

  const tweetFavorite = (id: string) => {
    const element = getTweet.find((e) => e.id == id);

    try {
      localStorage.setItem("favorite", JSON.stringify(Object([element])));
      const x = localStorage.getItem("favorite");
      console.log(x);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {getTweet.map((e) => (
        <div key={e.id}>
          <div className="flex flex-col w-full   border-b-2 border-slate-700 py-2 h-auto">
            <div className="flex flex-col  w-fit">
              <div className="flex justify-between gap-10 p-1  items-center ">
                {/* User Info => "Name , username , tweet" */}
                <div className="flex items-center w-full ">
                  <p className="border rounded-3xl  w-12 h-12 "></p>
                  <p className=" ml-2 mr-1">{e.name}</p>
                  <p key={e.id} className=" text-sm text-gray-400">
                    @{e.username}
                  </p>
                </div>

                {/* Button Action => "Delete" */}
                <div className=" cursor-pointer">
                  <div onClick={() => tweetDelete(e.id)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Tweet User  */}
              <div className="flex justify-between items-center ml-12 mr-3">
                <div className="flex justify-around ml-2  ">
                  <p>{e.tweet}</p>
                </div>
              </div>

              {/* Action icons => "comment ,Retweet  , like , share" */}
              <div className="flex justify-around w-2/3 ml-4 pt-4">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z"
                    />
                  </svg>
                </div>
                <div>
                  {" "}
                  <svg
                    className="w-6 h-6 text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 18"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1"
                      d="m1 14 3-3m-3 3 3 3m-3-3h16v-3m2-7-3 3m3-3-3-3m3 3H3v3"
                    />
                  </svg>
                </div>
                <div onClick={() => tweetFavorite(e.id)}>
                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 "
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                      />
                    </svg>
                  </button>
                </div>

              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
