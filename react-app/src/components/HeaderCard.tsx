
export default function HeaderCard() {
  return (
    <>
      {/* first Header body */}
      <div className="flex flex-col ml-1 mr-1 bg-indigo-700 text-white h-36">
        <div className="flex justify-between h-10 p-2">
          <p>Home</p>
          <p>Icon</p>
        </div>

        <hr />

        {/* img & hent */}
        <div className="flex flex-col p-2">
          <div className="flex items-center">
            <p className="border rounded-3xl  w-12 h-12 "></p>
            <p className=" m-2">what's happening ?</p>
          </div>

          {/* icons for => "upload , ...." */}
          <div className="flex justify-between items-center ml-12 mr-3">
            <div className="flex justify-around ml-2 w-32 ">
              <p>Icon</p>
              <p>Icon</p>
              <p>Icon</p>
            </div>
            <div className="h-8 w-16 rounded-2xl text-center border bg-cyan-500 cursor-pointer" >Tweet</div>

          </div>
        </div>
      </div>

    </>
  )
}
