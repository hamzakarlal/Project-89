import React from 'react'
import Image from 'next/image'
import DivOne from 'public/assets/div1.png'
import Menu from 'public/assets/menu.png'
import Frame from 'public/assets/Frame.png'
import div from 'public/assets/div.png'


export default function Header() {
  <link rel="preconnect" href="https://fonts.googleapis.com"></link>
  return (
    <div>
      <div className=" max-w-[1400px] mx-auto">
      {/*  */}
      <div
        className="w-[100%] bg-[#F7F1E8] grid grid-cols-2 px-[1.6rem] h-[64px] items-center fixed border-b-2 border-[grey] z-50"
      >
        <div className=" flex ">
          <div className="flex ">
            <div className='md:hidden block'>
            <Image className='w-[70%]' src={Menu} width="" height="" alt='not-found'/>
            </div>
            <ul
              className=" font-[Inter,sans-serif] md:flex justify-center gap-[2.8rem] xl:text-[18px] md:text-[13px] hidden   "
            >
              <li>Shop</li>
              <li>Philosophy</li>
              <li>Gifting</li>
              <li>Journal</li>
              <li className='hidden lg:block'>Our Story</li>
            </ul>

          </div>
        </div>
        <div className=" flex justify-between font-[Inter,sans-serif] xl:text-[18px] lg:text-[13.5px]">
        <div className="flex justify-start ">
              <Image className='w-[69%] h-[auto] mx-auto ml-[-28px]' src={Frame} width='' height='' alt='not-found'/>
            </div>
          <h1 className=''>Cart</h1>
        </div>
      </div>

     {/* hero */}
      <div className="bg-[#F5EEE3] w-[100%] mx-auto md:flex  pt-[4rem] ">
        <div className=" md:w-[51%] w-[100%] border-r-2 border-[grey]" >
          <Image src={div} width="" height="" alt='not-found'/>
        </div>
        <div className="border-b-2 border-[grey] md:w-[49%] w-[100%] flex justify-center text-center lg:items-center md:pt-[8rem]">
          <div className="center h-[10%] items-center leading-[3rem] pb-[2rem] md:pb-[0] pt-[2rem] md:pt-0 ">
            <div>
              <h1 className="font-[Inter,sans-serif] text-[24px] tracking-[1px] font-[500]">
                Eden, the blissful one.
              </h1>
            </div>
            <div>
              <p className="font-[Inter,sans-serif] text-[18px] leading-tight font-[500]">
                Our newest sell-out fragrance is back in stock baby!
              </p>
            </div>
            <div className="pt-[20px]">
              <button class="border-7 border-[black] bg-[black] rounded-3xl transition-all hover:duration-500 hover:bg-[#FFFF44] hover:border-[1px]  hover:border-[black] ">
                <h1
                  className="text-[white] font-[Inter,sans-serif] md:text-[18px] text-[12px] md:px-[20px] px-[10px] font-[500] transition-all hover:duration-500 hover:text-[black]">
                  Shop Eden
                </h1>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* shape */}
      <div className="w-[100%] md:h-[150px] h-[100%] boder-b-2 border-[grey] bg-[#F7F1E8]  ">
        <div className=' font-[Inter,sans-serif] md:text-[20px] text-[15px] font-[500] md:pl-[2rem] px-[2rem] py-[2rem]  '>
          <h1>
            Our 100% natural fragrance has been perfected over years to
            <br className='hidden md:block' />
            bring both emotional and physical healing properties. Powered
            <br className='hidden md:block' />
            by aromatherapy.
          </h1>
        </div>
      </div>
      {/* picture-box */}

      <div className='bg-[#C5A9B3] w-[100%] mx-auto md:flex block '>
        <div className=' border-b-2 border-t-2 border-[grey] md:w-[51%] w-[100%] flex justify-center text-center lg:items-center '>
          <div className='center  lg:items-center md:pt-[5rem] leading-[2rem] pt-[2rem] md:pt-[0] pb-[2rem] md:pb-[0] '>
          <div className='font-[Inter,sans-serif] text-[#000000] md:text-[44px] text-[38px] font-[500] leading-tight pb-[1.5rem] '>
            <h1>Eym + <br /> Lucy Williams</h1>
          </div>
          <div className='leading-[1.5rem] font-[Inter,sans-serif] pb-[1.5rem]'>
            <p>Murano-glass, refillable candles. <br /> Designed with Lucy Willliams to be <br/> burnt,refilled and kept forever.</p>
          </div>
          <div className="pt-[20px]">
              <button class="border-7 border-[black] bg-[black] rounded-3xl transition-all hover:duration-500 hover:bg-[#FFFF44] hover:border-[1px]  hover:border-[black]">
                <h1
                  className="text-[white] font-[Inter,sans-serif]  md:text-[18px] text-[14px] px-[20px] py-[7px] font-[500] transition-all hover:duration-500 hover:text-[black]">
                  Shop the collection
                </h1>
              </button>
            </div>
          </div>
        </div>
        <div className='md:w-[49%] w-[100%] border-l-2 border-[grey]'>
          <Image src={DivOne} width="" height="" alt='not-found'/>
        </div>
      </div>

    </div>
    </div>
  )
}
