import React from 'react'
import Image from 'next/image'
import svg from 'public/assets/svg.png'
import svgone from 'public/assets/svg1.png'

export default function index() {
  return (
    <div className='max-w-[1400px] mx-auto '>
      <div className=' font-[Inter,sans-serif] w-[100%] bg-[#F7F1E8] pt-[2rem] '>
        <div className='grid lg:grid-cols-2  block '>
          <div className='font-[600] text-[20px] sm:pl-[2rem] text-center'>
            <h1>Elevate your mood</h1>
            <div className='font-[400] text-[grey] lg:pt-[30rem] pt-[2rem]'>
              <h1>© Eym Naturals</h1>
            </div>
          </div>
          <div className='lg:flex grid md:grid-cols-2 sm:grid-cols-1 text-center sm:text-justify   w-[50%] mx-auto justify-center xl:w-[100%] tracking-wider'>

            <div className='lg:w-[43%]  w-[100%] mx-auto pt-[2rem] sm:pt-[0]  '>  
            <div className='font-[600] text-[20px]'>
              <h1>Newsletter</h1>
            </div>
            <div className='font-[600] text-[15px] pb-[1rem]'>
              <p>Join our newsletter to <br/> receive 15% off  your first <br/> order and only the good <br/> news.</p>
            </div>
            <div>
              <form className='sm:w-[80%] w-[100%] bg-[#F7F1E8]'>
                <span className='sm:flex block '>
                  <input className='sm:w-[50%] w-[100%] border-[1px] bg-[#F7F1E8] pl-2 border-[black] py-[10px] ' type="text" placeholder='First name' name="" value=""/>
                  <input className='sm:w-[50%] w-[100%] border-[1px] border-t-0 sm:border-t-[1px]  bg-[#F7F1E8] pl-2 border-l-0 border-[black] border-l-[1px] py-[10px] sm:py-auto' type="text" placeholder='Last name' name="" value=""/>
                </span>
                 <input className='w-[100%] border-b-[1px] bg-[#F7F1E8] pl-2 border-l-[1px] border-r-[1px] border-[black] py-[10px] ' type="text" placeholder='Email' name="" value=""/>
                  <button type="" className='text-[white]  w-[100%] py-[10px] bg-black text-center'>
                      <h1>Subscribe</h1>
                  </button>
              </form>
              <div className='font-[400] text-[grey] pt-[2rem] sm:pt-[13.5rem]'>
                <h1>Privacy Policy <br/>Terms & Conditions</h1>
              </div>
            </div>
          </div>

          <div className='sm:w-[15%]  w-[50%] mx-auto pt-[2rem] sm:pt-[0] sm:ml-[7rem]'>  
            <div className='font-[600] text-[20px]'>
              <h1>Help</h1>
            </div>
            <div className='font-[600] text-[15px] pb-[1rem]'>
              <ul>
              <li>Account</li>
              <li>Shipping</li>
              <li>Returns</li>
              <li>Contact</li>
              <li>Stockists</li>
              <li>Covid-19</li>
              <li>Sign Up</li>
              </ul>
            </div>
            {/* <div className='font-[400] text-[grey] pt-[19.5rem] flex'>
              <h1>We accept</h1>
              <Image className='w-[100%] ' src={svg} width='' height=''/>
              <Image className='w-[100%]' src={svgone} width='' height=''/>
            </div> */}
          </div>

          <div className='sm:w-[18%] w-[100%] mx-auto  sm:ml-[2rem]'>  
            <div className='font-[600] text-[20px]'>
              <h1>Follow us</h1>
            </div>
            <div className='font-[600] text-[15px] pb-[1rem]'>
              <ul>
              <li>Instagram</li>
              <li>Facebook</li>
              </ul>
            </div>
          </div>

          </div>
        </div>
        
      </div>
    </div>
  )
}
