import React from 'react'
import abstractLogo from '../assets/bx-container.svg'

const PageFooter = () => {
  return (
   <>
     <footer className='bg-black text-[#e9e9e9] py-12 px-10 md:px-16 w-full'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-x-4 gap-y-10 max-w-5xl mx-auto text-center md:text-left'>
            <div>
                <h3 className='font-semibold mb-2 text-base md:text-lg'>Abstract</h3>
                <ul className='text-sm text-gray-400 space-y-2'>
                    <li><a href="#" className='hover:text-white'>Branches</a></li>
                </ul>
            </div>
            <div>
                <h3 className='font-semibold mb-2 text-base md:text-lg'>Resources</h3>
                <ul className='text-sm text-gray-400 space-y-2'>
                    <li><a href="#" className='hover:text-white'>Blogs</a></li>
                    <li><a href="#" className='hover:text-white'>Help Center</a></li>
                    <li><a href="#" className='hover:text-white'>Release Notes</a></li>
                    <li><a href="#" className='hover:text-white'>Status</a></li>
                </ul>
            </div>
            <div>
                <h3 className='font-semibold mb-2 text-base md:text-lg'>Community</h3>
                <ul className='text-sm text-gray-400 space-y-2'>
                    <li><a href="#" className='hover:text-white'>Twitter</a></li>
                    <li><a href="#" className='hover:text-white'>LinkedIn</a></li>
                    <li><a href="#" className='hover:text-white'>Facebook</a></li>
                    <li><a href="#" className='hover:text-white'>Dribble</a></li>
                    <li><a href="#" className='hover:text-white'>Podcast</a></li>
                </ul>
            </div>
            <div>
                <div>
                    <h3 className='font-semibold mb-2 text-base md:text-lg'>Company</h3>
                    <ul className='text-sm text-gray-400 space-y-2'>
                        <li><a href="#" className='hover:text-white'>About Us</a></li>
                        <li><a href="#" className='hover:text-white'>Careers</a></li>
                        <li className='mb-2'><a href="#">Legal</a></li>
                    </ul>
                </div>
                <div className='mt-2'>
                    <h3 className='font-semibold text-base md:text-lg'>Contact Us</h3>
                    <ul className='text-sm text-gray-400 space-y-2'>
                        <li><a href="#" className='hover:text-white'>info@abstract.com</a></li>
                    </ul>
                </div>
            <div >
            {/*<img src={abstractLogo} alt="Abstract Logo" className='w-8 h-8 md:w-10 md:h-10 invert mb-2'/>*/}
            <div className='mt-2'>
                <p className='text-sm text-gray-400 space-y-2'>© Copyright 2022</p>
                <p className='text-sm text-gray-400 space-y-2'>Abstract Studio Design, Inc.</p>
                <p className='text-sm text-gray-400 space-y-2'>All rights reserved</p>
            </div>
           </div>
            </div>
        </div>
     </footer>
   </>
  )
}

export default PageFooter