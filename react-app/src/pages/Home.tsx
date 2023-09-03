import HeaderCard from "../Hooks/HeaderCard";
import Navbar from "../components/Navbar";
import TweetCard from "../Hooks/TweetCard";
import Sidebar from "../components/sidebar";

function Home() {
  return (
    <>
      <div className="flex mt-4">
        <Navbar />

        <div className="">
          <div className=" ">
            <HeaderCard />
          </div>
          <div className="">
            <TweetCard />
          </div>
        </div>

        <div className="">
          {" "}
          <Sidebar />
        </div>
      </div>
    </>
  );
}

export default Home;
