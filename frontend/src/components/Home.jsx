import React from 'react'
import homephoto from "./home6.jpg"
import { Link } from 'react-router'

export const Home = () => {
    return (
        <div style={{display:"flex",justifyContent:"center", padding:"50px 100px",marginTop:"40px", backgroundImage:`url(${homephoto})`,height:"600px",fontFamily:"sans-serif"}}>
            
            <div style={{paddingTop:"50px",margin:"0px"}}>
                <h1 style={{fontSize:"150px",padding:"0px",margin:"0px",fontWeight:"30px",color:"black",webkitTextStroke: "2px white"}}>&nbsp;Generate </h1>
                <h2 style={{fontSize:"60px",padding:"0px",margin:"0px",fontWeight:"10px",color:"black",webkitTextStroke: "1.5px white"}}>&nbsp;Math Questions Instantly!</h2>
                <h3 style={{fontSize:"25px",paddingTop:"10px",margin:"0px",fontWeight:"10px",color:"black",webkitTextStroke: "0.5px white"}}>&nbsp;&nbsp;&nbsp;&nbsp;Get AI-powered, customizable math problems for all levels.</h3>
                <center><Link to="/age" style={{ fontSize:"18px",margin:"20px", backgroundColor:"rgb(37 99 235 )",display:"flex",justifyContent:"center",alignItems:"center",color:"white",borderRadius:"6px",border:"black 10px",height:"10px",padding:"21px 25px",textDecorationLine:"none",width:"150px"}}>Get Started</Link></center>
            </div>

        </div>
    )
}
