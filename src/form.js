import React, { useEffect, useState } from "react";


function Form() {
    const data={
        name:"",
        email:"",
        password:""
    }
    const [flag,setFlag]=useState(false);
    const [inputdata,setInputdata]=useState(data);
    useEffect(()=>{
     console.log("Registered");

    },[flag]);
    function handleData(e)
    {
        setInputdata({...inputdata,[e.target.name]:e.target.value});
        console.log(inputdata);
    }
    function handleSubmit(e)
    {
        e.preventDefault();
        if(!inputdata.name||!inputdata.password||!inputdata.email)
        {
            alert("All fields are required to fill!");
        }
        else{
            setFlag(true);
        }
    }
  return (
    <div>
    <pre>{(flag)?<h2 className="ui-define">Hello {inputdata.name} ! You have registered </h2>: ""}</pre>
      <form className="container" onSubmit={handleSubmit}>
        <div className="header">
          <h1>Registration Form</h1>
        </div>
        <div><input type="text" placeholder="Enter your name" name="name" value={inputdata.name} onChange={handleData}></input></div>
        <div><input type="email" placeholder="Enter your email" name="email" value={inputdata.email} onChange={handleData}></input></div>
        <div><input type="text" placeholder="Enter your password" name="password" value={inputdata.password} onChange={handleData}></input></div>
        <div><button type="submit">Submit</button></div>
      </form>
    </div>
  );
}

export default Form;
