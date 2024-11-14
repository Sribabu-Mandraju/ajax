import React from 'react';
import {useState} from 'react';
import { FaBars } from "react-icons/fa6";
const Navbar=()=>{
    const[isopen,setisopen]=useState(false);
    const toggle=()=>{
        setisopen(!isopen);
    }
const data=[{name:"Home"},{name:"About"},{name:"Contact"},{name:"Help"}];
    return(
<div>
<div className="h-[40px] w-full bg-black flex justify-between items-center">

<div className="text-white  ml-[10px]"><img src="https://hoooobank.netlify.app/assets/logo.efc6c435.svg" className="h-[50px] w-[150px]"/></div>
<div className="md:hidden text-white" onClick={toggle}>
<FaBars />
    </div>


<ul className="hidden md:flex gap-[30px] mr-[20px] ">
    {
        data.map((nav,index)=>{
            return(
            <li className="text-white list-none" key={index}>{nav.name}</li>);
        })
    }
    </ul>

<div className={`md:hidden ${isopen?'block':'hidden'} absolute top-[40px]  bg-black w-full flex justify-center items-center`}>
<ul className="flex flex-col space-y-[20px]">
{
    data.map((nav,index)=>
    <li className="key={index} text-white list-none"><a href="#">{nav.name}</a></li>)
}
</ul>
</div>

</div>
</div>

    );
}
export default Navbar;