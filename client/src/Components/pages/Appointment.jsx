import React from 'react'
import bag from '../image/imgg-gi3-sbzwe5ba.png'
import { RiCalendar2Line } from '@remixicon/react'
import { NavLink } from 'react-router-dom'

const Appointment = () => {
  return (
    <div className="px-4 py-8 max-w-8xl mx-auto bg-purple-200 md:bg-purple-200">
      {/* Header Section */}
      <div className="mb-10">
        <h1 className="text-2xl md:mr-[1100px] md:text-4xl font-bold italic text-red-800 font-serif ml-[230px] mb-4">
          Schedule your <br />
          <span className="italic font-bold">appointment</span>
        </h1>
        <p className="text-purple-900 text-base ml-[120px] md:ml-[0px] font-serif italic max-w-md">
          Schedule an appointment today to explore our diverse range of products and receive personalized recommendations from our expert team. Experience shopping like never before with insights tailored to your unique preferences.
        </p>
      </div>

      {/* Content Section */}
      <div className="flex flex-col-reverse lg:flex-row lg:items-start lg:justify-between">
        {/* Image */}
        <div className="flex justify-center lg:justify-start">
          <img className="w-[250px] h-[250px] md:w-[300px] md:h-[300px] lg:w-[350px] lg:h-[350px]" src={bag} alt="Bag" />
        </div>

        {/* Appointment Form */}
        <div className="bg-white border shadow-md rounded-md p-6 w-full max-w-md mx-auto lg:mx-0 mb-10 lg:mt-[-150px]">
          <div className="flex justify-end gap-4 mb-6 font-serif text-sm hover:underline cursor-pointer font-medium">
        <NavLink to={`/`} >
            <p>Sign Up</p>
          </NavLink>
            <NavLink to={`/login`} >
            <p>Login</p>
            </NavLink>
          </div>

          <div className="flex items-center  gap-2 mb-8 font-semibold text-gray-800">
            <RiCalendar2Line />
            <p>Select Appointment</p>
          </div>

          {/* Appointment Options */}
          {[
            { title: 'Free Consultation', time: '30 minutes' },
            { title: 'Basic Service', time: '1 hour @ $99.00' },
            { title: 'Advanced Service', time: '1 hour @ $99.00' },
          ].map((item, index) => (
            <div key={index} className="border bg-white rounded-md shadow-lg p-4 mb-4">
              <h2 className="font-semibold">{item.title}</h2>
              <p>{item.time}</p>
              <div className="flex justify-end mt-2">
                 <NavLink to={`/appointment`} >
                <button className="bg-black text-white text-sm font-semibold px-4 py-2 rounded">Book</button>
                </NavLink>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="text-center mt-10 font-serif">
        <p>Powered by</p>
        <h2 className="font-bold text-xl">acuity:Scheduling</h2>
      </div>
    </div>
  )
}

export default Appointment
