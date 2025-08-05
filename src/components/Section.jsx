import React from 'react'
import Cyberpunk from '../assets/Cyberpunk.png'
import Starfield from '../assets/starfield.png'
import TheElderScrolls  from '../assets/TheElderScrolls.png'
import NewWorld from '../assets/NewWorld.png'

const Section = () => {
  return (
    <section className="bg-gradient-to-b from-[#232b3a] via-[#232b3a] to-[#232b3a] w-full h-full p-4">
      <div className="flex justify-between items-center">
        <h2 className="text-white text-2xl font-bold ml-4">Recently Updated</h2>
        <button className='bg-none text-[#76808C] text-sm font-semibold mr-4 border-1 border-[#76808C] py-[8px] px-[25px] rounded hover:text-white transition-colors duration-300'>
          See more
        </button>
      </div>




    <div className="bg-[#0E141B33] flex justify-around items-center mt-5 p-2.5">
      <div className="bg-[#0E141B] flex flex-col p-2.5 w-[340px] h-auto rounded">
        <img src={Cyberpunk} alt="" className='w-[320px] h-[220px] rounded-lg' />
        <h2 className="text-white text-lg font-semibold mt-2">Cyberpunk 2077</h2>
        <p className='text-[#F3F3F3] text-sm'>The free Update 2.0 brings <br /> brand new ways to play <br /> Cyberpunk 2077...</p>
        <div className="flex justify-around items-center mt-2">
          <button className='bg-none text-[#76808C] text-sm font-semibold border-1 border-[#76808C] py-[8px] px-[25px] rounded hover:text-white transition-colors duration-300'>
            In Wishlist
          </button>
         <button className='bg-none text-white text-sm font-semibold border-1 border-[#1E2329] py-[8px] px-[25px] rounded hover:text-white transition-colors duration-300'>
            In Wishlist
          </button>
        </div>
      </div>
      


      <div className="bg-[#0E141B] flex flex-col p-2.5 w-[340px] h-[380px] rounded">
        <img src={Starfield} alt="" className='w-[320px] h-[220px] rounded-lg' />
        <h2 className="text-white text-lg font-semibold mt-2">Starfield</h2>
        <p className='text-[#F3F3F3] text-sm'>A new update has been released <br /> for Starfield on all platforms...</p>
        <div className="flex justify-around items-center mt-7">
          <button className='bg-none text-[#76808C] text-sm font-semibold border-1 border-[#76808C] py-[8px] px-[25px] rounded hover:text-white transition-colors duration-300'>
            In Wishlist
          </button>
         <button className='bg-none text-white text-sm font-semibold border-1 border-[#1E2329] py-[8px] px-[25px] rounded hover:text-white transition-colors duration-300'>
            In Wishlist
          </button>
        </div>
      </div>



      <div className="bg-[#0E141B] flex flex-col p-2.5 w-[340px] h-auto rounded">
        <img src={TheElderScrolls} alt="" className='w-[320px] h-[220px] rounded-lg' />
        <h2 className="text-white text-lg font-semibold mt-2">The Elder Scrolls® Online</h2>
        <p className='text-[#F3F3F3] text-sm'>Conquer Tamriel’s Fears and Earn <br /> Special Rewards during the <br /> Witches Festival Event...</p>
        <div className="flex justify-around items-center mt-2">
          <button className='bg-none text-[#76808C] text-sm font-semibold border-1 border-[#76808C] py-[8px] px-[25px] rounded hover:text-white transition-colors duration-300'>
            In Wishlist
          </button>
         <button className='bg-none text-white text-sm font-semibold border-1 border-[#1E2329] py-[8px] px-[25px] rounded hover:text-white transition-colors duration-300'>
            In Wishlist
          </button>
        </div>
      </div>

      
    <div className="bg-[#0E141B] flex flex-col p-2.5 w-[340px] h-auto rounded">
        <img src={NewWorld} alt="" className='w-[320px] h-[220px] rounded-lg' />
        <h2 className="text-white text-lg font-semibold mt-2">New World</h2>
        <p className='text-[#F3F3F3] text-sm'>Nightveil Hallow returns as <br /> Baalphazu, Marquis of Terror <br /> rises once again on October 18...</p>
        <div className="flex justify-around items-center mt-2">
          <button className='bg-none text-[#76808C] text-sm font-semibold border-1 border-[#76808C] py-[8px] px-[25px] rounded hover:text-white transition-colors duration-300'>
            In Wishlist
          </button>
         <button className='bg-none text-white text-sm font-semibold border-1 border-[#1E2329] py-[8px] px-[25px] rounded hover:text-white transition-colors duration-300'>
            In Wishlist
          </button>
        </div>
      </div>
    </div>




    </section>
  )
}

export default Section