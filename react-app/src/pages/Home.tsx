import HeaderCard from "../Hooks/HeaderCard";
import Navbar from "../components/Navbar";
import TweetCard from "../Hooks/TweetCard";
import Sidebar from "../components/sidebar";


function Home() {

  

  return (
    <>
      <div className="flex w-full m-1">
        <div className="w-1/4 h-screen "> <Navbar /></div>

        <div className="flex flex-col w-1/2 h-auto">
          <div className=" h-auto  mb-2 "><HeaderCard /></div>
          <div className="m-1"></div>
          <div className=" h-auto  mb-2 mt-1 "><TweetCard /></div>
        </div>

        <div className="w-1/3 "> <Sidebar /></div>
      </div>
    </>
  );
}

export default Home;
