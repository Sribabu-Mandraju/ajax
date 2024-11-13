import React from 'react';

const BelowHero=()=>{
    const styles = {
        background: 'linear-gradient(90deg, #def9fa 0%, #bef3f5 17%, #9dedf0 42%, #7de7eb 55%, #5ce1e6 71%, #33bbcf 100%)',
        WebkitBackgroundClip: 'text', 
        color: 'transparent',
        fontWeight: 'bold',
      };
    return(
        <div className="flex md:flex-row flex-col md:gap-[100px] mt-[30px] gap-[30px] md:mt-[50px] justify-center items-center">
        <p  className="text-[35px] text-white font-bold">3800+<span style={styles} className="text-[20px]">ACTIVE USERS</span></p>
        <p  className="text-[35px] text-white font-bold">230+<span style={styles} className="text-[20px]">COMPANYS TRUSTED</span></p>
        <p  className="text-[35px] text-white font-bold">$230M+<span style={styles} className="text-[20px]">TRANSACTIONS</span></p>

        </div>
    );
}
export default BelowHero;