import React, { useState } from "react";


function FormFunction(){
    const[data,setData]=useState({
        name:"",
        password:"",
        email:"",
        mobile:""
    })
    let handleChange=(event)=>{
       setData(preValue=>{ /////preValue has previous object i.e data
           return{
               ...preValue,
               [event.target.name]:event.target.value
           }
       });
   
    }
return(
    <>
        <label>Name</label>
        <input type="text" name="name" onChange={handleChange} value={data.name}/><br/><br/>
        <label>Password</label>
        <input type="text" name="password" onChange={handleChange} value={data.password} /><br/><br/>
        <label>Email</label>
        <input type="text" name="email" onChange={handleChange} value={data.email} /><br/><br/>
        <label>Phone</label>
        <input type="text" name="mobile" onChange={handleChange} value={data.mobile} /><br/><br/>
       
    </>
)

}
export default FormFunction;