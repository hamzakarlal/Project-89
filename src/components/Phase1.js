import React from 'react'
import Image from 'next/image'
import Logoone from 'public/assets/logo1.png'
import Logotwo from 'public/assets/logo2.png'
import Logothree from 'public/assets/logo3.png'
import Logofour from 'public/assets/logo4.png'
import div6 from 'public/assets/div6.png'
import div5 from 'public/assets/div5.png'


export default function Phase1() {
  <link rel="preconnect" href="https://fonts.googleapis.com"></link>
  return (
    <div className='bg-[#F7F1E8]'>
          <div className='max-w-[1400px] mx-auto '>
         <div className='bg-[#F7F1E8] pt-[1rem] lg:pt-[0] w-[100%] mx-auto lg:flex border-l-2 border-[black]  block border-b-2 border-[black] pb-[1rem] md:pb-[0] '>
        <div className=' lg:w-[51%] w-[100%] '>
          <div className='md:text-[24px] sm:text-[12px] text-[10px] ml-[2rem] md:mt-[2rem] mt-[0rem] font-[Inter,sans-serif] '>
            <h1>Find the right scent for your mood ↓</h1>
          </div>
         <div className='lg:text-[47px] md:text-[30px] sm:[25px] text-[20px] sm:leading-none leading-[3rem]  ml-[2rem] md:mt-[6rem] sm:mt-[3rem] mt-[1rem] font-[Inter,sans-serif]  font-[500] leading-tight transition-all duration-500 hover:text-[grey]'>
          <div>
            <p className='transition-all duration-500 hover:text-[black]'>Feel Sleepy</p>
          </div>
          <div>
            <p className='transition-all duration-500 hover:text-[black]'>Feel Joyful</p>
          </div>
          <div>
            <p className='transition-all duration-500 hover:text-[black]'>Feel Relaxed</p>
          </div>
          <div>
            <p className='transition-all duration-500 hover:text-[black]'>Feel Uplifted</p>
          </div>
          <div>
            <p className='transition-all duration-500 hover:text-[black]'>Feel Grounded</p>
          </div>
          <div>
            <p className='transition-all duration-500 hover:text-[black]'>Feel Zen</p>
          </div>
          <div>
            <p className='transition-all duration-500 hover:text-[black]'>Feel Blissful</p>
          </div>
        </div>
         
        </div>
        <div className='w-[49%] lg:block hidden border-l-2 border-r-2 border-[black]'>
          <Image className='w-[90%]  mt-[2rem] mb-[2rem] mx-auto flex items-center' src={div5} width='' height='' alt='not-found'/>
        </div>
      </div>
      {/* 2 */}
      <div className='bg-[#F7F1E8] w-[100%] border-l-2 mx-auto md:flex block border-b-2 border-[black] pt-[1rem] md:pt-[0] '>
        <div className=' md:w-[51%] w-[100%] '>
          <div className='text-[20px] ml-[2rem] mt-[2rem] font-[Inter,sans-serif]'>
            <h1>What theyve said</h1>
          </div>
          <div className='text-[22px] ml-[2rem] mt-[5rem] font-[Inter,sans-serif]'>
            <p>Totally natural and non-toxic, this Eym candle offers a <br className='hidden md:block' /> mellowing scent – think frankincense and patchouli– <br className='hidden md:block' /> without the compromising your immediate environment.</p>
          </div>

          <div className='grid grid-cols-4  md:mt-[10rem] mt-[2rem] ml-[2rem] '>
            <div>
              <Image className='md:w-[8rem] w-[5rem]' src={Logoone} width='' height='' alt='not-found'/>
            </div>
            <div>
              <Image className='md:w-[8rem] w-[5rem]' src={Logotwo} width='' height='' alt='not-found'/>
            </div>
            <div>
              <Image className='md:w-[8rem] w-[5rem]' src={Logothree} width='' height='' alt='not-found'/>
            </div>
            <div>
              <Image className='md:w-[8rem] w-[5rem]' src={Logofour} width='' height='' alt='not-found'/>
            </div>
          </div>

         
        </div>
        <div className='md:w-[49%] w-[100%] border-l-2 border-[black] border-r-2'>
          <Image className='w-[90%]  mt-[2rem] mb-[2rem] mx-auto flex items-center' src={div6} width='' height='' alt='not-found'/>
        </div>
      </div>


      
    </div>
    </div>

  )
}
