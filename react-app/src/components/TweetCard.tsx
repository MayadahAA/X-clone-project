import axios from "axios";
import { useEffect, useState } from "react";

type postI = {
  id: string;
  userName: string;
  text: string;
  isLiked: boolean;
};
export default function TweetCard() {
  const [getPost, setGetPost] = useState<postI[]>([]);

  useEffect(() => {
    axios
      .get(`https://64d8b3c25f9bf5b879ce7999.mockapi.io/posts/`)
      .then((res) => {
        setGetPost(res.data);
          });
  }, []);

  return (
    <>
      {getPost.map((post) => (
        <div
          className="flex flex-col ml-1 mr-1 text-white h-auto "
          key={post.id}
        >
          <div className="flex flex-col p-2">
            <div className="flex justify-between ">
              {/* User Info => "Name , username , tweet" */}
              <div className="flex items-center w-full ">
                <p className="border rounded-3xl  w-12 h-12 "></p>
                <p className=" ml-2 mr-1">Mohammed</p>
                <p className=" text-sm text-gray-400">@UserName</p>
              </div>

              {/* Button Action => "Delete" */}
              <div className="">
                <p>icon</p>
              </div>
            </div>

            {/* Tweet User  */}
            <div className="flex justify-between items-center ml-12 mr-3">
              <div className="flex justify-around ml-2  ">
                <p>{post.text}</p>
              </div>
            </div>

            {/* Action icons => "comment ,Retweet  , like , share" */}
            <div className="flex justify-around w-2/3 ml-4 pt-4">
              <p>icon</p>
              <p>icon</p>
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill='none'
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className="w-6 h-6 "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  />
                </svg>
              </button>
              <p>icon</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
