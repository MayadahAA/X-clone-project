
function sidebar() {
  return (
    <>
       <div className='flex flex-col items-center w-96 bg-amber-500 gap-8 m-5 p-3'>
                {/* Search Field */}
                <div className='flex justify-around  gap-6'>
                    <input className="rounded-3xl p-3 h-10 w-80" placeholder="Search" type="text" />
                </div>

                
                {/* Create Your Custom Design */}
                <div className='flex justify-around gap-6'>
                    <p>A</p>
                    <p>A</p>
                </div>
                
             
                <div className='flex justify-around w-60 h-12 bg-cyan-600 rounded-2xl mb-4 cursor-pointer'>
                   <button>Tweet</button>
                </div>

            </div>
    </>
  )
}

export default sidebar