import React, { useState } from 'react';
import {AiOutlineMenu, AiOutlineSearch,AiOutlineClose, AiFillTag} from 'react-icons/ai';
import {BsFillCartFill, BsFillSaveFill} from 'react-icons/bs';
import {TbTruckDelivery} from 'react-icons/tb';
import {MdHelp,MdFavorite} from 'react-icons/md';
import {FaWallet,FaUserFriends} from 'react-icons/fa';

const Navbar = () => {
   const [nav,setNav]=useState(false);
    return (
       <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4
        '>
        <div className='flex items-center'>
        <div onClick={()=>setNav(!nav)} className='cursor-pointer'>
           <AiOutlineMenu  size={30}/>
        </div>
        <h1 className='text-2xl sm:text-3xl lg:text-4xl text-orange-900
        px-2
        '>FOODY <span className='font-bold text-red-950'>THINGS</span></h1>
        <div className='hidden lg:flex items-center rounded-full bg-gray-200 p-1 text-[14px]'>
            <p className='bg-black text-white rounded-full p-2'>Delivery</p>
            <p className='p-2'>PickUps</p>
        </div>
        </div>

        <div className='bg-gray-100 flex rounded-full items-center px-2 2-[200px] sm:w-[400px] lg:w-[500px] '>
         <AiOutlineSearch size={30}/>
         <input className='bg-transparentfocus:outline-none w-full rounded p-1' type="text" name="" placeholder='Food Item' id="" />
        </div>

       <button className='bg-black text-white hidden md:flex rounded-full items-center py-1'>
         <BsFillCartFill size={20} className='mr-2'/>Cart
       </button>


      {
         nav ?  <div className='bg-black/80 fixed z-10 w-full h-screen top-0 left-0'> </div>
         :''
      }


<div className={
   
   nav ? 'fixed top-0 left-0 w-[300px] z-10 h-screen bg-white duration-300'
:'fixed top-0 left-[-100%] w-[300px] z-10 h-screen bg-white duration-300'

}>


<AiOutlineClose onClick={()=>setNav(!nav)} size={28} className='absolute top-4 right-4 cursor-pointer'/>
<h2 className="text-2xl p-4">Food <span className='font-bold'>Things</span></h2>

<nav>
   <ul className='flex flex-col p-4 text-gray-800'>
   <li className='text-xl py-4 flex'><TbTruckDelivery className='mr-4' size={28}/>Orders </li>
   <li className='text-xl py-4 flex'><MdFavorite className='mr-4' size={28}/>Favorites </li>
   <li className='text-xl py-4 flex'><FaWallet className='mr-4' size={28}/>Wallet</li>
   <li className='text-xl py-4 flex'><MdHelp className='mr-4' size={28}/>Help </li>
   <li className='text-xl py-4 flex'><AiFillTag className='mr-4' size={28}/>Promotions </li>
   <li className='text-xl py-4 flex'><BsFillSaveFill className='mr-4' size={28}/>Best Ones </li>
   <li className='text-xl py-4 flex'><FaUserFriends className='mr-4' size={28}/>Invite Friends </li>
 
 </ul>
</nav>

</div>
       

       </div>
    );
};

export default Navbar;