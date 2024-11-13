import React from 'react';
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
const Footer=()=>{

    const styles = {
        background: 'linear-gradient(90deg, #def9fa 0%, #bef3f5 17%, #9dedf0 42%, #7de7eb 55%, #5ce1e6 71%, #33bbcf 100%)',
        WebkitBackgroundClip: 'text', 
        color: 'transparent',
        fontWeight: 'bold',
      };
    return(
      <div>
        <div className="flex md:flex-row flex-col  md:m-[50px] ml-[50px] mt-[50px] flex-col md:justify-between ">
            <div className="mt-[40px]">
             <div><img src="https://hoooobank.netlify.app/assets/logo.efc6c435.svg"/></div>
             <div className="font-bold text-[#808080] text-[20px]">A new way to make payments <br/>easy, reliable and secure.</div>
            </div>
            <div className="flex flex-col gap-[15px] mt-[40px]">
             <div className="text-[20px] text-white font-bold">Useful Links</div>
             <div  className="text-[#808080] font-bold cursor-pointer hover:text-[#00cec8]">Content</div>
              <div  className="text-[#808080] font-bold cursor-pointer hover:text-[#00cec8]">How it Works</div>
               <div  className="text-[#808080] font-bold cursor-pointer hover:text-[#00cec8]">Create</div>
                <div  className="text-[#808080] font-bold cursor-pointer hover:text-[#00cec8]">ExploreHow</div>
                 <div className="text-[#808080] font-bold cursor-pointer hover:text-[#00cec8]">Terms & Services</div>
            </div>


              

            <div className="flex flex-col gap-[15px] mt-[40px]">
             <div className="text-[20px] text-white font-bold">Community</div>
             <div  className="text-[#808080] font-bold cursor-pointer hover:text-[#00cec8]">Help Center</div>
              <div  className="text-[#808080] font-bold cursor-pointer hover:text-[#00cec8]">Partners</div>
               <div  className="text-[#808080] font-bold cursor-pointer hover:text-[#00cec8]">Suggestions</div>
                <div  className="text-[#808080] font-bold cursor-pointer hover:text-[#00cec8]">Blog</div>
                 <div className="text-[#808080] font-bold cursor-pointer hover:text-[#00cec8]">Newsletters</div>
            </div>



            <div className="flex flex-col gap-[15px] mt-[40px]">
             <div className="text-[20px] text-white font-bold">Partner</div>
             <div  className="text-[#808080] font-bold cursor-pointer hover:text-[#00cec8]">Our Partner</div>
              <div  className="text-[#808080] font-bold cursor-pointer hover:text-[#00cec8]">Become a Partner</div>
            </div>

            </div>



<div className="md:m-[50px] m-[30px] h-[2px] bg-white"></div>

<div className="flex md:justify-around items-center justify-center flex-col ">
  <div className="text-white font-bold text-[20px] sm:text-center">2022 HooBank. All Rights Reserved.</div>


  <div className="flex flex-row  text-white mt-[20px] text-[20px] gap-[10px]">
    <div><FaInstagram /></div>
    <div><FaFacebook /></div>
    <div><FaTwitter /></div>
    <div><FaLinkedin /></div>
  </div>
</div>


            </div>
    );
}
export default Footer;
