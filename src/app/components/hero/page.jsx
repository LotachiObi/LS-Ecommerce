import Image from 'next/image';
import React from 'react'


const Hero = () => {


  return (
    <div>
        <div className="flex container pt-6 lg:pt-0"> 
            <div>
            <h1 className=' text-5xl px-6 py-3 sm:text-8xl lg:text-8xl font-bold mb-2 text-balance font-heading uppercase pt-[100px]'>Welcome to <br /> Lenaid Studio Shop</h1>
            <p className='text-red-500 px-10 py-6 font-semibold  text-lg'>Explore our wide range of products carefully curated
            to meet your needs.</p>
            <div className='w-[150px] h-[33px] rounded-md bg-red-500 mx-20'> <p className='items-center text-center text-white text-2xl'>Shop Now</p> </div>
            </div>

        <div className='hidden md:flex'>
                <Image src="/man.png" alt="A Model" width={850} height={520} className='pb-[10px] '/>
        </div>
                
            </div>
        
    </div>
  )
}

export default Hero;