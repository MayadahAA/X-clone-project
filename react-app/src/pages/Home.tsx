import HeaderCard from "../Components/HeaderCard";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/sidebar";


function Home() {
  return (
    < >
       <div className="flex w-full m-1">
       <div className="w-1/4 h-screen bg-pink-600"> <Navbar/></div>
        <div className="w-1/2 h-32  mb-2 mt-1"><HeaderCard/></div>
       <div className="w-1/3 bg-blue-700"> <Sidebar/></div>
       </div>
    </>
  );
}

export default Home;
