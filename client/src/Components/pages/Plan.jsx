import React from 'react'
import img from '../image/imgg-gi3-x74d9zeq.png'
import bag from '../image/imgg-gi3-sbzwe5ba.png'
import socks from '../image/imgg-gi3-lrqd4338.png'
import { NavLink } from 'react-router-dom'


const Plan = () => {
  return (
    <div>
        <div className="w-full h-screen">
            <div className="text-2xl ml-[250px] lg:ml-[20px]  md:mr-[800px] md:text-4xl font-bold italic text-red-800 font-serif mt-16 flex">Choose your plan</div>

                  <div className="grid gap-12 md:grid-cols-3 mt-10 shadow-xl">
                    {/* Card 1 */}
                    <div className="flex flex-col items-center text-center bg-purple-50 p-6 rounded-lg shadow-md">
                      <img className="w-40 h-40 md:w-64 md:h-64 object-cover mb-4" src={img} alt="Capsule Chic" />
                      <h3 className="text-xl md:text-2xl text-purple-950 italic font-serif font-extrabold hover:underline cursor-pointer">
                        Gold Subscription
                      </h3>
                      <p className="text-purple-950 mt-2 text-lg font-semibold">$25.00</p>
                      <p className='text-purple-950 mt-2 text-lg font-semibold'>Every month</p>
                      <p className="text-purple-900 text-base mt-4 font-serif">
                        Get anytime access to our growing collection of classes, workshops, and exclusive content. New items added every month.
                      </p>
                      <NavLink to={`/subscribe`} >
                      <button className='mt-5 md:mt-0 bg-purple-950 text-white text-lg font-serif rounded-full px-6 py-2 hover:opacity-70'>Subcribe</button>
                      </NavLink>
                    </div>
            
                    {/* Card 2 */}
                    <div className="flex flex-col items-center text-center bg-purple-50 p-6 rounded-lg shadow-md">
                      <img className="w-40 h-40 md:w-64 md:h-64 object-cover mb-4" src={bag} alt="Bag Brilliance" />
                     <h3 className="text-xl md:text-2xl text-purple-950 italic font-serif font-extrabold hover:underline cursor-pointer">
                        Diamond Subscription
                      </h3>
                      <p className="text-purple-950 mt-2 text-lg font-semibold">$55.00</p>
                      <p className='text-purple-950 mt-2 text-lg font-semibold'>Every month</p>
                      <p className="text-purple-900 text-base mt-4 font-serif">
                        Get anytime access to our growing collection of classes, workshops, and exclusive content. New items added every month.
                      </p>
                       <NavLink to={`/subscribe`} >
                      <button className='mt-5 md:mt-0 bg-purple-950 text-white text-lg font-serif rounded-full px-6 py-2 hover:opacity-70'>Subcribe</button>
                      </NavLink>
                    </div>
            
                    {/* Card 3 */}
                    <div className="flex flex-col items-cg4yhenter text-center bg-purple-50 p-6 rounded-lg shadow-md">
                      <img className="w-40 h-40 md:w-64 md:h-64 ml-56 md:ml-20 object-cover mb-4" src={socks} alt="Footwear Comfort" />
                      <h3 className="text-xl md:text-2xl text-purple-950 italic font-serif font-extrabold hover:underline cursor-pointer">
                        Platinum Subscription
                      </h3>
                      <p className="text-purple-950 mt-2 text-lg font-semibold">$100.00</p>
                      <p className='text-purple-950 mt-2 text-lg font-semibold'>Every month</p>
                      <p className="text-purple-900 text-base mt-4 font-serif">
                        Get anytime access to our growing collection of classes, workshops, and exclusive content. New items added every month.
                      </p>
                       <NavLink to={`/subscribe`} >
                      <button className='mt-5 md:ml-[0px] ml-[-30px] md:mt-0 bg-purple-950 w-[130px] text-white text-lg font-serif rounded-full px-6 py-2 hover:opacity-70'>Subcribe</button>
                      </NavLink>
                    </div>
                  </div>
        </div>
    </div>
  )
}

export default Plan