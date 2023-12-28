import React, { useEffect, useState } from 'react'
import {FaArrowUp} from "react-icons/fa";
const GoToTop = () => {
  const [isVisible , setIsVisible]= useState(false);
  const GoToBtn=()=>{
window.scrollTo({top:0,left:0,behavior:'smooth'})
  }

  const listenToScroll =()=>{
    let heightToHidden = 450;
    const winscrool = document.body.scrollTop || document.documentElement.scrollTop;
  
if(winscrool>heightToHidden){
setIsVisible(true)
}
else{
setIsVisible(false)
}
  };
  useEffect(()=>{
    window.addEventListener("scroll",listenToScroll);
    return()=> window.removeEventListener("scroll",listenToScroll)
  },[]);
  return (
    <div className="main-wraper">
    {isVisible &&(
      <div className='top-btn' onClick={GoToBtn}>
<FaArrowUp className='top-btn--icon'/>
    </div>
    )}

    </div>
    
  )
}

export default GoToTop
