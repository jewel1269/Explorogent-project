import React from 'react';

function Boost() {
  return (
   <div >
     <div className="flex bg-custom-gradient flex-col md:flex-row gap-8">
      <div className="relative w-full md:w-1/2 rounded-md overflow-hidden">
        <img
          src="https://via.placeholder.com/500x400.png"
          alt="Team Working"
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-gray-900 via-gray-800 to-transparent p-4">
          <p className="text-white text-xl font-bold">
            Ready to Boost Your Business Online?
          </p>
          <p className="text-gray-400 mt-2">
            "Claim your strategy session now and learn how we can help you grow"
          </p>
        </div>
      </div>
      <div className="w-full md:w-1/2">
        <div className="flex items-center mb-4">
          <div className="w-6 h-6 rounded-full bg-green-500 mr-2"></div>
          <h3 className="text-lg font-bold">Lightening Fast</h3>
        </div>
        <p className="mb-6">
          20 times faster operation than employing in-house developers
        </p>
        <div className="flex items-center mb-4">
          <div className="w-6 h-6 rounded-full bg-green-500 mr-2"></div>
          <h3 className="text-lg font-bold">Speedy Delivery</h3>
        </div>
        <p className="mb-6">
          70% lower turnaround time for digital assets
        </p>
        <div className="flex items-center mb-4">
          <div className="w-6 h-6 rounded-full bg-green-500 mr-2"></div>
          <h3 className="text-lg font-bold">Cost-effective</h3>
        </div>
        <p className="mb-6">
          50% reduction in average cost per asset
        </p>
        <div className="flex items-center">
          <div className="w-6 h-6 rounded-full bg-green-500 mr-2"></div>
          <h3 className="text-lg font-bold">Customer Satisfaction</h3>
        </div>
        <p>Customers rate us 9.5 on average.</p>
      </div>
    </div>
   </div>
  );
}

export default Boost;