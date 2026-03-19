import React from 'react'
import { cardData } from '../data/cardData'

const CardsPage = () => {
  return (
    <>
     <section className='bg-white px-6 py-10 md:px-16 lg:px-24 w-full'>
      <div className='grid grid-cols-1 gap-3 py-8 px-2 md:p-4 md:gap-8 md:grid-cols-2'>
        {cardData.map((item) => {
          const Icon = item.icon 
          return (
            <div key={item.id} className="flex flex-col md:flex-row items-center md:items-start gap-6 mt-8 md:mt-14">
              <div className='shrink-0'>
                <Icon/>
              </div>
              <div className='tracking-wide max-w-xs md:max-w-sm'>
                  <h2 className='text-lg font-semibold mb-2'>{item.heading}</h2>
                  <p className='text-base font-light mb-2'>{item.description}</p>
                  <a href={item.link} className="text-[#4c5fd4] text-sm font-light">
                    Learn More →
                </a>
              </div>
            </div>
          )
        })}
      </div>

     </section>
    </>
  )
}

export default CardsPage