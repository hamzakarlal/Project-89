import React from 'react'
import Image from 'next/image'
import icon1 from 'public/assets/icon1.png'
import icon from 'public/assets/icon.png'
import icon2 from 'public/assets/icon2.png'

export default function Phase() {
  <link rel="preconnect" href="https://fonts.googleapis.com"></link>
  return (
    <div className='max-w-[1400px] mx-auto bg-[#F7F1E8] border-b-2 border-[black] pb-[3rem]'>

      <div className='font-[Inter,sans-serif] font-[400] text-[25px] md:py-[22px] md:px-[22px]'>
        <div>
        <h1 className='pl-[2rem]  sm:pl-[0] pt-[2rem] sm:pt-[0]'>Our philosophy</h1>  
        </div>
        
        <div className='grid xl:grid-cols-3 md:grid-cols-2  font-[Inter,sans-serif]  font-[400] text-[21px] md:pl-[2rem]'>

        <div className='pt-[5rem] md:leading-[5rem] leading-[3rem]  '>
          <div className='pl-[2rem] md:pl-[0] pb-[2rem] md:pb-[0]  '>
          <div>
            <Image className='md:w-[18%] w-[20%]' src={icon} width='' height='' alt='not-found'/>
          </div>
          <div>
            <h1>1. Only 100% natural fragrance</h1>
          </div>
          <div className='leading-tight'>
            <h2>No chemicals, no scent boosters and <br/> binders. Just pure essential oils.</h2>
          </div>
          </div>
          <div className='border-b-[1px] md:hidden border-[black] '>
            
          </div>
          </div>
          {/* 2 */}
          <div className='pt-[5rem] md:leading-[5rem] leading-[3rem]'>
            <div className='pl-[2rem] md:pl-[0] pb-[2rem] md:pb-[0]'>
          <div>
            <Image className='md:w-[18%] w-[20%]' src={icon1} width='' height='' alt='not-found'/>
          </div>
          <div>
            <h1>2. The power of natural perfume</h1>
          </div>
          <div className='leading-tight'>
            <h2>Botanical based perfumes perfected <br/> to bring both emotional and physical <br/> healing properties.</h2>
          </div>
          </div>
          <div className='border-b-[1px] md:hidden border-[black]'>
            
          </div>

          </div>
          {/* 3 */}
          <div className='pt-[5rem] md:leading-[5rem] leading-[3rem] pl-[2rem] md:pl-[0] pb-[2rem] md:pb-[0]'>
          <div>
            <Image className='md:w-[18%] w-[20%]' src={icon2} width='' height='' alt='not-found'/>
          </div>
          <div>
            <h1>3. Created consciously</h1>
          </div>
          <div className='leading-tight'>
            <h2>Sustainably sourced ingredients, <br/> fragrance and packaging, always. <br/> Proudly British made.</h2>
          </div>

          </div>

        </div>
      </div>

  </div>
  )
}
