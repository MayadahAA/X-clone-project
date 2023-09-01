import axios from "axios";
import { useEffect, useState } from "react";

type postI = {
  id: string;
  userName: string;
  text: string;
};
export default function TweetCard() {
  const [getPost, setGetPost] = useState<postI[]>([]);
  useEffect(() => {
    console.log("render");

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
                <p className=" text-sm text-gray-400">{post.userName}</p>
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
              <p>icon</p>
              <p>icon</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
