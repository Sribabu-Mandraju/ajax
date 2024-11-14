import React from 'react';
const Money=()=>{
    const gradientStyle = {
        background: 'linear-gradient(157.81deg, #def9fa -43.27%, #bef3f5 -21.24%, #9dedf0 12.19%, #7de7eb 29.82%, #5ce1e6 51.94%, #33bbcf 90.29%)',
      };
      const shadowStyle = {
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.6), 0 6px 16px rgba(0, 0, 0, 0.4), 0 12px 24px rgba(0, 0, 0, 0.2)',
      };
      const data=[
        {
            pic:"https://hoooobank.netlify.app/assets/Star.b8bf87ea.svg",
            name:"Rewards",
            text:"The best credit cards offer some tantalizing combinations of promotions and prizes"
        },
        {
            pic:"https://hoooobank.netlify.app/assets/Shield.6d9e87e5.svg",
            name:"100% Secured",
            text:"We take proactive steps make sure your information and transactions are secure."
        },
        {
            pic:"https://hoooobank.netlify.app/assets/Send.454b3199.svg",
            name:"Balance Transfer",
            text:"A balance transfer credit card can save you a lot of money in interest charges."
        }
      ]
    return(
<div className="flex md:flex-row flex-col sm:gap-[30px] md:gap-[80px] mt-[50px] md:mt-[100px] justify-center items-center">
<div className="flex flex-col  gap-[30px]">
<div className="text-white text-[50px] font-bold sm:p-[20px]">You do the business,<br/>
we'll handle the money.</div>
<div className="text-[#808080] text-[20px]">With the right credit card, you can improve your <br/>
financial life by building credit, earning rewards and <br/>
saving money. But with hundreds of credit cards on <br/>
the market.</div>

<button style={gradientStyle} className="h-[50px] w-[150px] rounded-[10px] font-bold text-black">Get Started</button>
</div>



<div className="flex flex-col md:gap-[30px] mt-[50px] gap-[50px]">
    {
    data.map((item,index)=>(
   <div className="md:h-[100px] md:w-[500px] h-[150px] w-[200px] hover:rounded-[10px] text-white hover:bg-[black] hover:opacity:[70%]"  key={index}>
    <div className="flex md:flex-row md:gap-[20px] gap-[30px]">
    <div className="flex justify-center items-center ">
  <img className="h-[60px] w-[60px] " src={item.pic} alt="description"  />
</div>

                <div>
    <div className="font-bold text-[20px]">{item.name}</div>
    <div className="text-[#808080] font-bold text-[15px]">{item.text}</div>
    </div>
    </div>
   </div> 
))}
</div>


</div>

    );
}
export default Money;