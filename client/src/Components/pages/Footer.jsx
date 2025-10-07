import React, { useState } from 'react'

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => setIsOpen(!isOpen);
  return (
    <div>
        <div className="lg:bg-purple-200  bg-purple-200 w-[700px] lg:w-full lg:h-[1000px] h-[1000px] ">
            <div className="text-3xl  md:mr-[800px] md:text-4xl font-bold italic text-red-800 font-serif ml-[200px] mt-44 md:mt-0">Sabbat shop</div>

            <p className=' md:mr-[800px] italic text-red-800 font-serif mt-10 md:mt-0 ml-[220px]'><a href='#' className='hover:underline'>Sign up</a> and get 10% off your first order!</p>
         <div className="lg:flex flex-column lg:ml-[700px]">
             <div className="text-purple-900 flex flex-col-1 lg:flex-col-3  justify-center " style={{fontStyle: 'italic'}}>
          <div className="mt-[80px] ml-[80px]">
          <ul className='text-sm  ml-[-100px]'>
            <h1 className='text-3xl lg:text-3xl mb-5 text-red-800 font-semibold'>special offers</h1>
            <li className='mb-2'>Buy One, Get One Free (The first 5 things you buy )</li>
            <li className='mb-2'>50% Off Second Item</li>
            <li className='mb-2'>Clearance Sale – Up to 70% Off</li>
            <li className='mb-2'>Flat 20% Off Storewide</li>
            <li className='mb-2'>Seasonal Sales</li>
            <li className='mb-2'>Celebrate with 15% Off!</li>
          </ul>
          </div>
          </div>
           
           
          <div className="text-purple-900 flex flex-col-1 lg:flex-col-3  justify-center " style={{fontStyle: 'italic'}}>
          <div className="mt-[80px] ml-[80px]">
          <ul className='text-sm'>
            <h1 className='text-3xl lg:text-3xl mb-5 text-red-800 font-semibold ml-[-50px]'>Get in touch</h1>
            <li className='mb-2 ml-[-50px]'>sabbatshop@gmail.com</li>
            <li className='mb-2 ml-[-50px]'>+2349135751407</li>
          </ul>
          </div>
          </div>
          </div>  

            <div className="w-full h-[900px] lg:h-[500px] rounded-2xl absolute overflow-hidden shadow-xl lg:mt-32 mt-[-130px]">
              <div className="">
            <p className='md:ml-[-800px] italic text-red-800 font-serif mt-[250px] mr-[500px]  md:mt-[1px] cursor-pointer'>Terms & Conditions</p>
            <footer className='md:ml-[10px] text-nowrap italic text-red-800 font-serif mt-[10px] mr-[-450px]  md:mt-[1px] cursor-pointer'>
               &copy; copyright.All rights reserved
            </footer>
            </div>

            <iframe
              title="Store Location"
              src="https://www.google.com/maps?q=123+Demo+Street,+New+York,+NY+12345&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading=""
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

          </div>

         

             
        </div>
    </div>
  )
}

export default Footer