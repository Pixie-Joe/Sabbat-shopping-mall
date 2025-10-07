import React from 'react'
import img from '../image/imgg-gi3-x74d9zeq.png'
import { NavLink } from 'react-router-dom'

const MainAbout = () => {
  return (
    <div>
        <div className="lg:mt-[-700px]">
            <div className="bg-purple-200 h-screen">
                 <img className="w-[300px] h-48 md:w-[550px] md:h-full object-cover  md:mb-4 mt-[1000px] ml-48 shadow-xl" src={img} alt="Hat" />
            </div>

            <div className="absolute">
                <h2 className="text-2xl md:text-4xl  font-bold italic text-red-800 lg:ml-[1000px] font-serif mt-[-500px] ml-[250px] lg:mt-[-600px] text-center">
                    About 
                   <p>our company</p> 
                </h2>
            </div>

            <div className="absolute">
                 <p className="text-purple-900 text-base ml-[120px] mt-[-350px] md:ml-[1000px] lg:mt-[-450px] font-serif md:py-6 leading-relaxed italic max-w-md">
                    At Sabbat shop, we are committed to providing an exceptional shopping experience by offering a carefully curated selection of high-quality products. Our team of experts is dedicated to ensuring every customer finds exactly what they need, combining style and functionality with unparalleled service.
                  </p>
                  
                   <NavLink to={`/aboutpage`}>
                   <button className="mt-4 md:mt-10 ml-[300px]  md:ml-[1000px] bg-purple-950 text-white text-lg font-serif rounded-full px-6 py-2 hover:opacity-85">
                    Learn more
                  </button>
                  </NavLink>
            </div>
        </div>
    </div>
  )
}

export default MainAbout