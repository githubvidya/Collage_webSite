import React from 'react'
import Navbar from './Navbar'
import Loading from './TopPhoto/Loading'
import 'remixicon/fonts/remixicon.css'

const Topnav = () => {
  return (
    <>
    <div className="w-full h-full relative">
     
    <div className=" w-full h-100 fixed z-20 ">
 <div className=" w-100 h-100 lg:h-6  flex justify-around  bg-slate-700 text-white font-bold  items-center flex-wrap  text-xs lg:text-sm " >
    <p className='z-20 ' > <i class="ri-home-8-line mr-1 text-black"></i>Divyabha Intermidiate Collage Shripalpur.</p>
<p className='z-20 '> <i class="ri-mail-line mr-1 text-black"></i> vidyatiwari526@gmail.com</p>
<p className='z-20'> <i class="ri-phone-line mr-1 text-black"></i> 9554263457</p>
<p className= ' bg-yellow-300	z-20 h-full px-10 text-red cursor-pointer text-black font-normal flex items-center' >Contect</p>
 </div>
 <Navbar/>
    </div>
    <Loading/>
    </div>
    </>
  )
}

export default Topnav