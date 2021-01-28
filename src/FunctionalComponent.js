import React, { useState } from "react";

function FunctionalComponent(){
   let dateobj= new Date();
    let[count,increaseCount]=useState(0);
    let[count1,increaseCount1]=useState(dateobj.getSeconds());
    let mycount=()=>{
        increaseCount(count+1)
        increaseCount1(dateobj.getSeconds())
    };
  

  
    return(
        <>
        <h1>{count}</h1>
        <h1>{count1}</h1>
        <button onClick={mycount}> Click Me </button>
        </>
    )

}
export default FunctionalComponent;