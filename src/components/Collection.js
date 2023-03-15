import React from 'react'
import Image from 'next/image'
import div4 from 'public/assets/div4.png'
import div3 from 'public/assets/div3.png'
import div2 from 'public/assets/div2.png'

export default function Collection() {
  <link rel="preconnect" href="https://fonts.googleapis.com"></link>
  return (
    <div className='bg-[#F7F1E8] border-b border-[black]'>
          <div className='max-w-[1400px] mx-auto  ' >
      <div className=' font-[Inter,sans-serif] font-[400]  w-[100%] bg-[#F7F1E8] text-[25px] py-[22px] px-[22px] pb-[3rem]'>
        <div>
        <h1>Shop collection</h1>  
        </div>

        <div className='pt-[3rem] grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 '>

        <div>
          
        <div className='absolute border-2   border-[#0000001a] rounded-lg bg-[#F7F1E8] px-[10px] py-[5px] mt-[13px] ml-[40px]'>
                <p className='text-[12px]'>Top Rated: 5 / 5</p>
        </div>
          <div >
          <Image className='w-[88%]' src={div2} width='' height='' alt='not-found'/>
          </div>

        <div className='mt-[13px] w-[88%]  mx-auto sm:mx-auto'>
        <div className='leading-[2rem] '>

          <div className='text-[22px] font-[Inter,sans-serif] font-[400]'>
            <h2>Eym + Lucy Williams</h2>
          </div>
          <div className='text-[grey] text-[17px] font-[Inter,sans-serif]'>
            <p>Refillable candle (Rest)</p>
          </div>
          <div className='text-[grey] text-[17px] font-[Inter,sans-serif] '>
            <p>£150.00</p>
          </div>

        </div>
         </div>
        
        </div>
        {/* 2 */}
        <div>
          
          <div className='absolute border-2   border-[#0000001a] rounded-lg bg-[#F7F1E8] px-[10px] py-[5px] mt-[13px] ml-[40px]'>
                  <p className='text-[12px]'>Top Rated: 5 / 5</p>
          </div>
            <div >
            <Image className='w-[88%]' src={div3} width='' height='' alt='not-found'/>
            </div>
  
          <div className='w-[88%]  mx-auto sm:mx-auto'>
          <div className='leading-[2rem] flex'>

            <div className='mt-[13px]'>
            <div className='text-[22px] font-[Inter,sans-serif] font-[400]'>
              <h2>Eym + Lucy Williams</h2>
            </div>
            <div className='text-[grey] text-[17px] font-[Inter,sans-serif]'>
              <p>Refillable candle (Rest)</p>
            </div>
            <div className='text-[grey] text-[17px] font-[Inter,sans-serif] '>
              <p>£150.00</p>
            </div>
            </div>

          <div className=' border-2 w-[rem] h-[30px] hidden border-[grey] rounded-2xl bg-[#F7F1E8] px-[5px] flex items-center ml-[12px] mt-[13px] '>
                  <p className='text-[6px] font-[700]'>Coming soon</p>
          </div>
  
          </div>
           </div>
          
          </div>
          {/* 3 */}
          <div>
          
          <div className='absolute border-2   border-[#0000001a] rounded-lg bg-[#F7F1E8] px-[10px] py-[5px] mt-[13px] ml-[40px]'>
                  <p className='text-[12px]'>Top Rated: 5 / 5</p>
          </div>
            <div >
            <Image className='w-[88%]' src={div4} width='' height='' alt='not-found'/>
            </div>
  
          <div className='mt-[13px] w-[88%]  mx-auto sm:mx-auto'>
          <div className='leading-[2rem]'>
  
            <div className='text-[22px] font-[Inter,sans-serif] font-[400]'>
              <h2>Eden</h2>
            </div>
            <div className='text-[grey] text-[17px] font-[Inter,sans-serif]'>
              <p>Refillable candle (Rest)</p>
            </div>
            <div className='text-[grey] text-[17px] font-[Inter,sans-serif] '>
              <p>£45.00</p>
            </div>
  
          </div>
           </div>
          
          </div>
          {/* 4 */}
          <div className='hidden xl:block'>
          
          <div className='absolute border-2   border-[#0000001a] rounded-lg  bg-[#F7F1E8] px-[10px] py-[5px] mt-[13px] ml-[40px]'>
                  <p className='text-[12px]'>Top Rated: 5 / 5</p>
          </div>
            <div >
            <Image className='w-[88%]' src={div4} width='' height='' alt='not-found'/>
            </div>
  
          <div className='mt-[13px] w-[88%]  mx-auto sm:mx-auto'>
          <div className='leading-[2rem]'>
  
            <div className='text-[22px] font-[Inter,sans-serif] font-[400]'>
              <h2>Rest</h2>
            </div>
            <div className='text-[grey] text-[17px] font-[Inter,sans-serif]'>
              <p>Refillable candle (Rest)</p>
            </div>
            <div className='text-[grey] text-[17px] font-[Inter,sans-serif] '>
              <p>£45.00</p>
            </div>
  
          </div>
           </div>
          
          </div>
          {/* 5 */}
          <div className=' md:pt-[3rem] pt-[0]'>
          
          <div className='absolute border-2   border-[#0000001a] rounded-lg bg-[#F7F1E8] px-[10px] py-[5px] mt-[13px] ml-[40px]'>
                  <p className='text-[12px]'>Top Rated: 5 / 5</p>
          </div>
            <div >
            <Image className='w-[88%]' src={div4} width='' height='' alt='not-found'/>
            </div>
  
          <div className='mt-[13px] w-[88%]  mx-auto sm:mx-auto'>
          <div className='leading-[2rem]'>
  
            <div className='text-[22px] font-[Inter,sans-serif] font-[400]'>
              <h2>Home</h2>
            </div>
            <div className='text-[grey] text-[17px] font-[Inter,sans-serif]'>
              <p>Refillable candle (Rest)</p>
            </div>
            <div className='text-[grey] text-[17px] font-[Inter,sans-serif] '>
              <p>£45.00</p>
            </div>
  
          </div>
           </div>
          
          </div>
          {/* 6 */}
          <div className='pt-[3rem] ' >
          
          <div className='absolute border-2   border-[#0000001a] rounded-lg bg-[#F7F1E8] px-[10px] py-[5px] mt-[13px] ml-[40px]'>
                  <p className='text-[12px]'>Top Rated: 5 / 5</p>
          </div>
            <div >
            <Image className='w-[88%]' src={div4} width='' height='' alt='not-found'/>
            </div>
  
          <div className='mt-[13px] w-[88%]  mx-auto sm:mx-auto'>
          <div className='leading-[2rem]'>
  
            <div className='text-[22px] font-[Inter,sans-serif] font-[400]'>
              <h2>Create</h2>
            </div>
            <div className='text-[grey] text-[17px] font-[Inter,sans-serif]'>
              <p>Refillable candle (Rest)</p>
            </div>
            <div className='text-[grey] text-[17px] font-[Inter,sans-serif] '>
              <p>£150.00</p>
            </div>
  
          </div>
           </div>
          
          </div>
          {/* 7 */}
          <div className='pt-[3rem]'>
          
          <div className='absolute border-2   border-[#0000001a] rounded-lg bg-[#F7F1E8] px-[10px] py-[5px] mt-[13px] ml-[40px]'>
                  <p className='text-[12px]'>Top Rated: 5 / 5</p>
          </div>
            <div >
            <Image className='w-[88%]' src={div4} width='' height='' alt='not-found'/>
            </div>
  
          <div className='mt-[13px] w-[88%]  mx-auto sm:mx-auto'>
          <div className='leading-[2rem]'>
  
            <div className='text-[22px] font-[Inter,sans-serif] font-[400]'>
              <h2>Soul</h2>
            </div>
            <div className='text-[grey] text-[17px] font-[Inter,sans-serif]'>
              <p>Candle refill</p>
            </div>
            <div className='text-[grey] text-[17px] font-[Inter,sans-serif] '>
              <p>£45.00</p>
            </div>
  
          </div>
           </div>
          
          </div>
          
          

        </div>

      </div>
    </div>
    </div>

  )
}
