
function sidebar() {
  return (
    <>
    
       <div className='flex flex-col items-center w-full  gap-8 p-3 border-l-2 border-slate-700 h-screen'>
                {/* Search Field */}
                <div className='flex justify-around  gap-6'>
                    <input className="rounded-xl p-3 bg-slate-800 h-10 w-80" placeholder="Search" type="text" />
                </div>

                
                {/* Create Your Custom Design */}
                <div className='flex justify-around gap-6'>
                   
                </div>
          

            </div>
    </>
  );
}

export default sidebar;
