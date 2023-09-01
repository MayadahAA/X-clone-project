
export default function TweetCard() {
    return (
        <>

            <div className="flex flex-col ml-1 mr-1 bg-indigo-700 text-white h-auto ">

                <div className="flex flex-col p-2">
                    <div className="flex justify-between ">

                        {/* User Info => "Name , username , tweet" */}
                        <div className="flex items-center w-full ">
                            <p className="border rounded-3xl  w-12 h-12 "></p>
                            <p className=" ml-2 mr-1">Mohammed</p>
                            <p className=" text-sm text-gray-400">@Username</p>
                        </div>

                        {/* Button Action => "Delete" */}
                        <div className="">
                            <p>icon</p>
                        </div>
                    </div>

                    {/* Tweet User  */}
                    <div className="flex justify-between items-center ml-12 mr-3">
                        <div className="flex justify-around ml-2  ">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur in pariatur doloribus est ipsam et fugiat quaerat provident voluptas.
                                Minima ipsa neque ea voluptate tenetur, nesciunt repudiandae corporis impedit aspernatur.</p>
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



        </>
    )
}
