import Logo from '../assets/Xlogo.png'

export default function Navbar() {


    return (
        <>
            <div className='flex flex-col items-center w-full bg-rose-700  '>
                {/* logo */}
                <div className='flex flex-row w-36 justify-start'>
                    <img src={Logo} alt="" className='w-10 m-5 ' />
                </div>


                {/* nav menu */}
                <div className='flex flex-col  h-full w-24 gap-6 mb-'>

                    <div className='flex justify-between'>
                        <p>Icon</p>
                        <p>Home</p>
                    </div>

                    <div className='flex justify-between  gap-6'>
                        <p>Icon</p>
                        <p>Explore</p>
                    </div>
                    <div className='flex justify-between  gap-6'>
                        <p>Icon</p>
                        <p>Notification</p>
                    </div>
                    <div className='flex justify-between gap-6'>
                        <p>Icon</p>
                        <p>Message</p>
                    </div>
                    <div className='flex justify-between gap-6'>
                        <p>Icon</p>
                        <p>Bookmarks</p>
                    </div>
                    <div className='flex justify-between gap-6'>
                        <p>Icon</p>
                        <p>Lists</p>
                    </div>
                    <div className='flex justify-between gap-6'>
                        <p>Icon</p>
                        <p>Profile</p>
                    </div>
                    <div className='flex justify-between gap-6'>
                        <p>Icon</p>
                        <p>More</p>
                    </div>
                </div>
                
                {/* Button Tweet */}
                <div className='flex justify-around w-60 h-12 bg-cyan-600 rounded-2xl mb-4 cursor-pointer'>
                    <button>Tweet</button>
                </div>

            </div>
        </>
    )
}
