import React from 'react';
import { FiArrowUpRight } from "react-icons/fi";
const Hero=()=>{
    const styles = {
        background: 'linear-gradient(90deg, #def9fa 0%, #bef3f5 17%, #9dedf0 42%, #7de7eb 55%, #5ce1e6 71%, #33bbcf 100%)',
        WebkitBackgroundClip: 'text', 
        color: 'transparent',
        fontWeight: 'bold',
      };
      const boxbg= {
        background: 'linear-gradient(90deg, #def9fa 0%, #bef3f5 17%, #9dedf0 42%, #7de7eb 55%, #5ce1e6 71%, #33bbcf 100%)',
        WebkitBackgroundClip: 'text', 
        color: 'transparent',
        
        
      };
    return(
        <div className="flex md:flex-row md:p-[30px] md:mt-[50px] sm:mt-[20px] sm:p-8 flex-col">

            <div className="flex flex-col gap-[10px] md:gap-[10px] md:ml-[50px] md:mt-[50px] mt-[100px] sm:flex-1 sm:flex-1">

           <div className="md:h-[40px] h-[60px] w-full md:w-[600px] rounded-[10px] flex items-center justify-center" style={boxbg}>
            <img src="https://hoooobank.netlify.app/assets/Discount.61d9dc08.svg" className="h-[50px] w-[50px]"/>{" "}
            <p className="text-[#808080] text-[20px] sm:text-[25px]">
                <span className="text-white">20%</span>{" "}
                Discount For 1 {" "}
                <span className="text-white">Month</span>{" "}
                Account
            </p>
           </div>
          <p className="text-white md:text-[80px] text-[60px] font-[bold] p-[20px]">
           The Next<br></br> 
           <span style={styles}>Generation<br/></span>
           Payment<br />
           Method.
          </p>
        <p className="text-[#808080] text-2xl sm:text-center">Our team of experts use a methodology to identify <br/>
        the credit cards most likely to fit your needs. We <br/>
        examine annual percentage rates, annual fees.</p>
            </div>


            
            <div className="md:flex-2 flex-3 flex justify-center items-center mt-[50px]">
  <div style={styles} className="h-[120px] w-[120px] rounded-full border-[white] border-2 flex justify-center items-center">
    <div className="bg-black h-[90px] w-[90px] rounded-full flex justify-center items-center">
      <p style={styles} className="text-white">
        <span>get<FiArrowUpRight className="text-[white]" /></span>
        started
      </p>
    </div>
  </div>
</div>




            <div className="md:flex-3 md:mt-[30px] flex-2 flex justify-center items-center mt-[50px]">
<img src="https://hoooobank.netlify.app/assets/robot.352cd501.png" className="w-full sm:w-[400px] md:w-[700px] lg:w-[600px]"/>
            </div>

        </div>
    );
}
export default Hero;