import HeaderCard from "../Components/HeaderCard";
import Navbar from "../Components/Navbar";
import TweetCard from "../Components/TweetCard";
import Sidebar from "../Components/sidebar";


function Home() {
  return (
    < >
      <div className="flex w-full m-1">
        <div className="w-1/4 h-screen bg-pink-600"> <Navbar /></div>

        <div className="flex flex-col w-1/2 ">
          <div className=" h-32  mb-2 "><HeaderCard /></div>
          <div className="m-3"></div>
          <div className=" h-32  mb-2 mt-1"><TweetCard /></div>

        </div>

        <div className="w-1/3 bg-blue-700"> <Sidebar /></div>
      </div>
    </>
  );
}

export default Home;
