import React from 'react';
import { FaApple } from "react-icons/fa";
import { BiLogoPlayStore } from "react-icons/bi";
const Content=()=>{
    return(
        <div className="flex md:flex-row flex-col md:m-[100px]">
            <div className="md:h-[500px] md:w-[600px] w-full mt-[50px] ml-[10px]"><img src="https://hoooobank.netlify.app/assets/bill.fd47dad8.png"/></div>
            <div className="md:mt-[100px] m-[5px]">
            <div className="text-white font-bold text-[50px]"> Easily control your<br/>
            billing & invoicing.</div>
            <div className="text-[#808080] font-bold text-[20px] md:mt-[10px]">We consider the payment methods you'll offer your <br/>
            customers when you start your business. This is an <br/>important part of managing your business cash <br/>
            flow and meeting your customer's needs.</div>
            <div className="flex flex-row mt-[40px]">

            <div className="w-[140px] h-[50px] bg-black rounded-[10px] flex flex-row">
                <div className="text-white text-[30px]"><FaApple /> </div>
                 <div>
                    <div className="text-white font-bold text-[10px]"> Download on the</div>
                    <div className="text-white font-bold text-[15px]"> Applestore</div>
                    </div>
                    </div>

                    <div className="w-[140px] h-[50px] bg-black rounded-[10px] flex flex-row">
                <div className="text-white text-[30px]">
                <BiLogoPlayStore />
                     </div>
                 <div>
                    <div className="text-white font-bold text-[10px]"> GET IT ON </div>
                    <div className="text-white font-bold text-[15px]"> Google Play</div>
                    </div>
                    </div>



            </div>

            </div>
            </div>
    );
}
export default Content;