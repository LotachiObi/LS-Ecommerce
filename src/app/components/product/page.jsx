import React from 'react'
import { productsItems } from '../productitems/page'
import Image from 'next/image'
import {AiFillStar, AiOutlineStar } from "react-icons/ai"

function Prodt() {

const generateRating = (rating) => {
  switch (rating) {
    case 1:
      return (
        <div className="flex gap-1 text-[20px] text-[#FF9529]">
          <AiFillStar />
          <AiOutlineStar />
          <AiOutlineStar />
          <AiOutlineStar />
          <AiOutlineStar />
        </div>
      );

    case 2:
      return (
        <div className="flex gap-1 text-[20px] text-[#FF9529]">
          <AiFillStar />
          <AiFillStar />
          <AiOutlineStar />
          <AiOutlineStar />
          <AiOutlineStar />
        </div>
      );

    case 3:
      return (
        <div className="flex gap-1 text-[20px] text-[#FF9529]">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiOutlineStar />
          <AiOutlineStar />
        </div>
      );

    case 4:
      return (
        <div className="flex gap-1 text-[20px] text-[#FF9529]">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiOutlineStar />
        </div>
      );

    case 5:
      return (
        <div className="flex gap-1 text-[20px] text-[#FF9529]">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
      );

    default:
      return null;
  }
};


    return (

        <div className='py-6'>
            <ul className="grid grid-cols-1 place-items-center sm:place-items-center sm:grid-cols-2 lg-grid-cols-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10">
                {productsItems.map(products => (
                    <div>
                        <div className='px-10 py-6 aspect-[11/10] rounded-md overflow-hidden'>
                            <Image src={products.Image}
                                alt={products.Title}
                                width={520}
                                height={480}
                                className='w-full h-auto object-cover transition-transform hover:scale-110 origin-bottom duration-300' />
                        </div>
                        <div>
                            <div className='flex justify-around items-center'>
                                <p className='text-lg font-semibold'>{products.Title}</p>
                            </div>
                            <div className='flex justify-around items-center'>
                                {generateRating(products.Rating)}
                            </div>
                            <div className='flex justify-around items-center'> <p className="text-bold">{products.Price}</p></div>
                        </div>

                        <div className='flex justify-around items-center'>
                            <button className='border-black bg-red-500 text-white p-4 rounded-full'>Add to cart</button>
                        </div>

                    </div>

                ))}
            </ul>

        </div>
    )
}

export default Prodt;