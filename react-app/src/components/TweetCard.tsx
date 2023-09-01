
export default function TweetCard() {
    return (
        <>

            <div className="flex flex-col ml-1 mr-1 bg-indigo-700 text-white h-full ">

                <div className="flex flex-col p-2">
                    <div className="flex justify-between ">
                        {/* img */}
                        <div className="flex items-center w-full ">
                            <p className="border rounded-3xl  w-12 h-12 "></p>
                            <p className=" ml-2 mr-1">Mohammed</p>
                            <p className=" text-sm text-gray-400">@Username</p>
                        </div>

                        {/* Button  */}
                        <div className="">
                            <p>icon</p>
                        </div>
                    </div>

                    <div className="flex justify-between items-center ml-12 mr-3">
                        <div className="flex justify-around ml-2  ">
                            <p>Hello Worild</p>

                        </div>


                    </div>
                </div>
            </div>



        </>
    )
}
