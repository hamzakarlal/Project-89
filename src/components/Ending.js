import React from 'react'
import Image from 'next/image'
import Micone from 'public/assets/mic1.png'
import Mictwo from 'public/assets/mic2.png'
import Micthree from 'public/assets/mic3.png'
import Micfour from 'public/assets/mic4.png'

export default function index() {
    <link rel="preconnect" href="https://fonts.googleapis.com"></link>
  return (
    <div className='max-w-[1400px] mx-auto'>
        <div className='bg-[#F7F1E8] w-[100%] mx-auto border-b-2 border-[black]'>
          <div className=' '>
          <div className='text-[22px] ml-[2rem] font-[Inter,sans-serif] '>
            <h1 className='pt-[2rem]'>Share your journey #eymnaturals</h1>
          </div>
          <div className='text-[22px] ml-[2rem] md:mt-[9rem] sm:mt-[7rem] mt-[4rem] font-[Inter,sans-serif] '>
            <p>Follow us @eymnaturals</p>
          </div>
          <div className='grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 mt-[1rem] ml-[2rem] mb-[2rem]'>
            <div className='pb-[1rem] md:pb-[0]'>
              <Image className='w-[90%]' src={Micone} width='' height=''/>
            </div>
            <div className='pb-[1rem] md:pb-[0]'>
              <Image className='w-[90%]' src={Mictwo} width='' height=''/>
            </div>
            <div className='pb-[1rem] md:pb-[0]'>
              <Image className='w-[90%]' src={Micthree} width='' height=''/>
            </div>
            <div className='pb-[1rem] md:pb-[0]'>
              <Image className='w-[90%]' src={Micfour} width='' height=''/>
            </div>
          </div>

          </div>    
        </div>
        {/* 2 */}
        <div className='bg-[#FFFF44] w-[100%] mx-auto border-b-2 border-[black] flex justify-center items-center pb-[2rem]'>
          <div className=' '>
            <div className='lg:text-[47px] md:text-[37px] sm:text-[27px] text-[24px] md:ml-[2rem] ml-[0] mt-[6rem] font-[Inter,sans-serif]  font-[500] leading-tight text-center'>
                <h1>Join the family — sign up to our <br className='hidden md:block'/> newsletter for updates on all things Eym.</h1>
            </div>
            <div className="sm:pt-[4rem] pt-[2rem] flex justify-center items-center">
              <button class="border-7 border-[black] bg-[black] rounded-3xl hover:bg-[#FFFF44] transition-all duration-500 border-[1px] border-[black]">
                <h1
                  className="text-[white] font-[Inter,sans-serif] sm:text-[18px] text-[14px] px-[30px] py-[10px] font-[500] hover:transition-all duration-500 hover:text-[black]  ">
                  Sign up now
                </h1>
              </button>
            </div>

          </div>    
        </div>
    </div>
  )
}
