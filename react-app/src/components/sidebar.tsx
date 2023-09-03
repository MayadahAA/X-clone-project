
function sidebar() {
  return (
    <>
    
       <div className='flex flex-col items-center w-full  gap-8 p-3 border-l-2 border-slate-700 h-screen'>
                {/* Search Field */}
                <div className='flex justify-around  gap-6'>
                    <input className="rounded-xl p-3 bg-slate-800/50 h-10 w-80" placeholder="Search" type="text" />
                </div>

                
                {/* Create Your Custom Design */}
                <div className='w-full'>
                   <div className="bg-slate-800/50 rounded-md p-5 w-full">
                    <ul>
                      <p>Trend</p>
                      <li>#</li>
                      <li>#</li>
                      <li>#</li>
                    </ul>
                   </div>
                </div>
          

            </div>
    </>
  );
}

export default sidebar;
