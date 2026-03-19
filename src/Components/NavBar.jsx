import React from 'react'
import abstractLogo from '../assets/bx-container.svg'
import { useState } from 'react'


const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <> 
    <nav className='font-archivo flex justify-between items-center bg-black text-[#e9e9e9] text-lg px-4 py-5 md:px-14 gap-4'>
        <div className='flex items-center gap-3 flex-row'>
        <img src={abstractLogo} alt="Abstract Logo" className='w-8 h-8 md:w-10 md:h-10 invert'/>
        <h2 className='hidden md:block font-semibold text-base md:text-lg'>Abstract</h2>
        <span className='hidden sm:inline'>|</span>
        <h2 className='hidden sm:block text:base'>Help Center</h2>
        </div>
        <div className='flex items-center gap-3 '>
            <button className='bg-[#191a1b] hidden md:block text-sm md:text-lg px-3 py-2  rounded-lg border-[0.5px] border-white hover:bg-[#4c5fd4] hover:translate-y-1'>Submit a request</button>
            <button className='bg-[#4c5fd4] hidden md:block text-sm md:text-lg px-4 py-2 md:px-6 rounded-lg hover:bg-[#191a1b] hover:translate-y-1'>Sign in</button>
            
            <button className='md:hidden flex flex-col gap-1 items-center justify-center p-2' 
            onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (<span className='text-white text-xl font-light'>x</span>) :
                (
                  <>
                  <span className='block w-6 h-0.5 bg-white'/>
                  <span className='block w-6 h-0.5 bg-white'/>
                  <span className='block w-6 h-0.5 bg-white'/>
                </>
                )}
            </button>
        </div>
        {
          isOpen && (
            <div className='md:hidden flex flex-col gap-3 pt-3 pb-4'>
               <button className='bg-[#191a1b]  text-sm md:text-lg px-3 py-2  rounded-lg border-[0.5px] border-white hover:bg-[#4c5fd4] hover:translate-y-1'>Submit a request</button>
               <button className='bg-[#4c5fd4] text-sm md:text-lg px-4 py-2 md:px-6 rounded-lg hover:bg-[#191a1b] hover:translate-y-1'>Sign in</button>
            </div>
          )
        }
    </nav>
    </>
    
  )
}

export default NavBar