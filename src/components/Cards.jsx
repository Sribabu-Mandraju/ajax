import React from 'react';
import { CgQuote } from "react-icons/cg";
const Cards = () => {
  const data = [
    {
      text: "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
      name: "Herman Jensen",
      job: "Founder & Leader",
      pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHQSEpuKDinuIBCdWOL7-yu5RuFAOBxJsG-Q&s.jpg"
    },
    {
      text: "Money makes your life easier. If you're lucky to have it, you're lucky.",
      name: "Steve Mark",
      job: "Founder & Leader",
      pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwG7Mafmd2Y548ueHLbM0b5-8OlLtetgYkPg&s.jpg"
    },
    {
      text: "It is usually people in the money business, finance, and international trade that are really rich.",
      name: "Kenn Gallagher",
      job: "Founder & Leader",
      pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT77xypTvXF_bFWVvt49P4cbJ0FsAeZJ1GgCA&s.jpg"
    }
  ];
  const boxStyle = {
    background: 'linear-gradient(144.39deg, #ffffff -278.56%, #6d6d6d -78.47%, #11101d 91.61%)',
    boxShadow: '0px 20px 100px -10px rgba(66, 71, 91, .1)',
    borderRadius: '10px',
  };
  return (

<div>
<div className="md:mt-[50px] flex md:flex-row flex-col justify-center md:gap-[150px] m-[50px]">
 <div className="text-white text-[50px] font-bold">What people are <br/>saying about us</div>
<div className="text-[#808080] font-bold text-[20px] md:mt-[25px] mt-[15px]">Everything you need to accept card payments <br/>and grow your business anywhere on the planet.</div>
  </div>

    <div className="flex md:flex-row flex-col md:ml-[60px] md:mt-[50px] md:justify-between">
      {data.map((item, index) => (
        <div key={index} style={boxStyle} className="  m-[10px] h-[400px] md:w-[350px] w-[90%] hover:rounded-[10px]">
            <div className="text-[#00cec8] text-[50px] w-[50px] m-[30px]"><CgQuote /></div>
          <div className="flex flex-col m-[30px]">
            <div className="text-[#808080] font-bold text-[20px]">{item.text}</div>
            <div className="flex flex-row mt-[40px]">
              {/* Fix: remove quotes around {item.pic} */}
              <div>
                <img src={item.pic} alt={item.name} className="rounded-full w-[50px] h-[50px]" />
              </div>
              <div className="text-white text-[20px] ml-[10px]">
                <div className="font-bold">{item.name}</div>
                <div>{item.job}</div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Cards;
