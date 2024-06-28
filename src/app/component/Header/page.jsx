'use client'
import React from 'react';


const Header = () => {
  return (
    <div className='bg-custom-gradient'>
        <div 
      className="w-full  bg-center bg-cover lg:h-[780px]" 
      style={{ backgroundImage: "url('/Rectangle 53.jpg')" }}
    >
      <div className="flex items-center justify-center w-full h-full bg-gray-900/40">
        <div className="text-center">
          <h1 className="text-3xl font-semibold text-white lg:text-4xl">
            Stack <span className="text-blue-400">Karoo</span> 
          </h1>
          <h1 className="text-3xl font-semibold text-white lg:text-4xl">
          Grow your
          </h1>
          <h1 className="text-3xl font-semibold text-white lg:text-4xl">
          BUSINESS <br /> WITH USS !
          </h1>
         
        </div>
      </div>
      <div className="flex items-center shadow-lg shadow-orange-700 lg:ml-[27%] justify-center p-3   font-medium text-white capitalize transition-colors duration-300 transform bg-orange-600 rounded-md lg:w-1/2 hover:bg-blue-500 focus:outline-none focus:bg-blue-500 relative bottom-10">
      <p className="w-full px-5 py-2 text-center  p-16 text-2xl">
          Unlock Your Business’s Full Potential Now..!
          </p>
      </div>
    </div>
    <h1 className='text-2xl mt-24 text-center'>“Book a consultation with our experts and start transforming your Digital Presence”</h1>
    <h1 className='text-4xl text-blue-600 font-bold mt-16 text-center'>Why Do Businesses Trust Stackkaroo’s Web Development <br /> and UI/UX Designs?</h1>
    <h1 className='text-2xl  mt-16 text-center'>Stackkaroo can help you in creating a measurable impact on your target customers. The world is <br /> going to change and hence your business should also change. With Stackkaroo you will be able to <br /> empower your business to reach new heights.</h1>
    </div>
  );
};

export default Header;
