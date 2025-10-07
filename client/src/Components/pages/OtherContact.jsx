import { RiMailAddLine, RiMessage2Line, RiUser3Line } from '@remixicon/react'
import React from 'react'

const OtherContact = () => {
  const handleSend = () => 
    alert("Sent successfully!");
  return (
    <div>
        <div className="w-full h-screen bg-purple-200">
            <div className="text-3xl  md:mr-[800px] md:text-4xl font-bold italic text-red-800 font-serif mt-24 ml-[200px] md:mt-40">Contact Us</div>
            <div className="">
         <p className="text-purple-900 text-base mt-14 md:mt-10 ml-[190px] md:ml-[120px] font-serif italic max-w-md">
          Interested in working together? Fill out <p>some info and we will be in touch shortly.</p><p> We can’t wait to hear from you!</p>
        </p>
       </div>

       <div className="mt-8  lg:mt-[-100px]">
         <form className='bg-purple-200'>
            <p className='text-purple-900 text-base font-serif mb-2 lg:mb-1 ml-[230px] lg:ml-[700px]'>Name</p>
                  <label htmlFor='First name' className='label'><RiUser3Line size={15} className='text-purple-900 ml-[210px] mt-1 absolute lg:ml-[700px]'/><p className='text-purple-900 lg:ml-[720px] ml-[230px] font-serif'>First Name:</p></label>
                <input type='text' id='first-name' name='first-name' className='input-fields shadow-xl bg-purple-200 border border-purple-900 w-[250px] h-9 rounded-full ml-[200px] lg:ml-[700px]'/>
         </form>
       </div>

        <div className=" mt-8 lg:ml-[1040px] lg:mt-[-60px]">
         <form className='bg-purple-200'>
                 <label htmlFor='Last name' className='label'><RiUser3Line size={15} className='text-purple-900 ml-[210px] mt-1 absolute lg:ml-[-50px]'/><p className='text-purple-900 lg:ml-[-30px] font-serif ml-[230px]'>Last Name:</p></label>
                <input type='text' id='last-name' name='last-name' className='input-fields shadow-xl bg-purple-200 border border-purple-900 w-[250px] lg:ml-[-60px] ml-[200px] h-9 rounded-full'/>
         </form>
       </div>
        <div className="mt-8 lg:ml-[900px] lg:mt-[50px]">
         <form className='bg-purple-200'>
                 <label htmlFor='Last name' className='label'><RiMailAddLine size={15} className='text-purple-900 ml-[210px] mt-1 absolute lg:ml-[-190px]'/><p className='text-purple-900 md:ml-[-170px] ml-[230px] font-serif'>Email:</p></label>
                <input type='text' id='email' name='email' className='input-fields shadow-xl bg-purple-200 border border-purple-900 lg:w-[530px] w-[250px] lg:ml-[-200px] ml-[200px] h-9 rounded-full'/>
         </form>
       </div>

       <div className="mt-8 lg:ml-[1050px] lg:mt-[80px]">
         <form className='bg-purple-200'>
                 <label htmlFor='Last name' className='label'><RiMessage2Line size={15} className='text-purple-900  mt-1 absolute lg:ml-[-330px] ml-[210px]'/><p className='text-purple-900 md:ml-[-310px] ml-[230px] font-serif'>Message:</p></label>
                <input type='text' id='last-name' name='last-name' className='input-fields shadow-xl bg-purple-200 border border-purple-900 lg:w-[530px] ml-[200px]  w-[250px] lg:ml-[-350px] h-[130px] lg:h-[200px] rounded-xl'/>
         </form>
       </div>
       <div className="lg:bg-purple-200   ml-[350px] h-screen flex items-start">
      <button
        onClick={handleSend}
        className="mt-9 md:mt-9 lg:ml-[350px] bg-purple-950 text-white text-lg font-serif rounded-full px-6 py-2 hover:opacity-85"
      >
        Send
      </button>
    </div>


        </div>

       
    </div>
  )
}

export default OtherContact