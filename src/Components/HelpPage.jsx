import React from 'react'
import { ArrowRight } from 'lucide-react'
import { useState } from 'react'


const HelpPage = () => {
  const [query, setQuery] = useState('');
  
  const handleSearch = () => {
    if(query.trim()) {
      alert(query)
    }
  }
  const handleKeyDown = (e) => {
    if(e.key === 'Enter') {
      handleSearch()
    }
  } 

  return (
   <>
   <section className='bg-[#dadbf1] flex justify-center items-center flex-col px-6 py-16 md:py-32 md:px-20 w-full'>
    <h1 className='text-4xl sm:text-5xl md:text-7xl text-black my-4 text-center'>How can we help?</h1>
    <div className='relative w-full max-w-2xl'>
    <input type="text" 
    placeholder='Search'
    value={query}
    onChange={(e) => setQuery(e.target.value)}
    onKeyDown={handleKeyDown}
    className='text-base md:text-md border-[1px] border-black rounded-md mb-4 py-4
    md:py-6 pl-4 pr-12 w-full outline-none shadow-xl font-light'/>
    <div className='absolute inset-y-0 right-0 flex items-center pr-4 cursor-pointer touch-manipulation min-w-[44px]'
    onclick={() => handleSearch()}>
    <ArrowRight className='w-5 h-5 md:w-6 md:h-6  text-black'/>
    </div>
    </div>
   </section>
   </>
  )
}

export default HelpPage