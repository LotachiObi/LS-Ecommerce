import Image from 'next/image';
import React from 'react'

const testimonyItems = [{
    Id:"1",
    Name: "Mtusi",
    Country: "Senegal",
    Image: "",
    Content: "I love exploring the clothes here",
    
    },
    {
    Id:"2",
    Name: "Jeremiah",
    Country: "Nigeria",
    Image: "",
    Content: "This site is awesome, I like the page",
    
    },
    {
    Id:"3",
    Name: "Timilerin",
    Country: "Benin Rep",
    Image: "",
    Content: "It was easy finding quality outfits with this app, thanks",
    
    }]
    

const Testimonial = () => {
  return (
    <div>
        <div className=" container pt-16 pb-16 grid-cols-2">
            <h2 className="font-medium text-2xl pb-4 uppercase mx-auto place-items-center text-center p-4">Testimonials</h2>
            <div className="grid lg:grid-cols-[300px, 1fr] gap-4">
            {testimonyItems.map(testimony =>(
                <div className="text-center flex flex-col items-center gap-2">
                    <div>
                
                             <div>
                            <div className='flex justify-between '>
                                <p className='text-lg font-semibold text-[20px]'>{testimony.Name}</p>
                                <p className='text-lg text-slate-400 font-semibold'>{testimony.Country}</p>
                            </div>
                            
                            <div className=''>
                                <p className='font-medium'> {testimony.Content}</p>
                                
                          
                            </div>
                        </div>
                    </div>
                     
                </div>
            ))}
        

            </div>

        </div>
    </div>
  )
}

export default Testimonial;