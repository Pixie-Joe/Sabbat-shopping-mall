import React from 'react'
import hat from '../image/imgg-gi3-x74d9zeq.png';
import bag from '../image/imgg-gi3-sbzwe5ba.png';
import socks from '../image/imgg-gi3-lrqd4338.png';
import jew from '../image/imgg-gi3-tlmhlj4a.png';

const Social = () => {
  return (
    <div>
        <div className="">
             <div className="py-20 px-4 md:px-16 ">
                <h2 className="text-2xl md:text-4xl mt-[70px] lg:mt-[250px] font-bold italic text-red-800 font-serif mb-10 text-center">
                    Follow us on social
                </h2>
            </div>
          
          <div className="lg:flex flex-col-4" >
            <div className="">
           <img src={hat} className='w-80 h-52 rounded-xl mb-10  lg:mb-0 ml-[200px] lg:ml-[10px]' />
           </div>

           <div className="">
           <img src={bag} className='w-80 h-52 rounded-xl mb-10 lg:mb-0  ml-[200px] lg:ml-[20px]' />
           </div>

           <div className="">
           <img src={socks} className='w-80 h-52 rounded-xl mb-10 lg:mb-0  ml-[200px] lg:ml-[30px]' />
           </div>

           <div className="">
           <img src={jew} className='w-80 h-52 rounded-xl mb-10 lg:mb-0  ml-[200px] lg:ml-[40px]' />
           </div>
           </div>

           <a href='https://www.instagram.com/luka_sabbat/?__pwa=1 ' target="_blank" ><button className="mt-4 ml-[550px] md:mt-[100px] bg-purple-950 w-36 text-white text-lg font-serif rounded-full px-6 py-2 hover:opacity-85">
            Social
            </button>
            </a>
        </div>
    </div>
  )
}

export default Social