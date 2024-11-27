import React from 'react'
import Prodt from '../product/page'


function Explore() {
  return (
    <div>
        <div className='p-[10px] pt-16'>
        <h1 className="bg-gray-600 capitalize text-white text-center text-2xl justify-between p-[10px] rounded-md place-items-center w-fit mx-auto h-[60px]">Explore our products with discount!</h1>

        <div >
          <div>
          <Prodt />
          </div>
        </div>
        </div>
    </div>
  )
}

export default Explore