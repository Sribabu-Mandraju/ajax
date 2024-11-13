import React from 'react';

const BoxFooter = () => {
  const boxStyle = {
    background: 'linear-gradient(144.39deg, #ffffff -278.56%, #6d6d6d -78.47%, #11101d 91.61%)',
    boxShadow: '0px 20px 100px -10px rgba(66, 71, 91, .1)',
    borderRadius: '10px',
  };

  return (
    <div
      style={boxStyle}
      className="mt-[100px] m-[15px] h-auto w-[90%] md:h-[250px] md:w-[90%] md:m-[50px] md:mt-[100px] bg-white rounded-[10px]">
      <div className="flex flex-col md:flex-row md:justify-around">
        <div className="text-center">
          <div className="text-white font-bold text-[50px] md:pt-[30px] md:ml-[50px]">
            Come try our service now!
          </div>
          <div className="text-[#808080] text-[20px] font-bold md:pt-[30px] md:ml-[50px]">
            Everything you need to accept card payments and
            <br />
            grow your business anywhere on the planet.
          </div>
        </div>
        <button className="h-[50px] w-[150px] bg-[#00cec8] ml-[70px] m-[20px] md:mt-[100px] rounded-[10px] text-black font-bold text-[20px]">
          Get Started
        </button>
      </div>
    </div>
    
  );
};

export default BoxFooter;
