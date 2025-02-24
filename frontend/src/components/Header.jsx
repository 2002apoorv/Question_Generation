import React from 'react'
import logo from "./logo2.jpg"
import { Link } from 'react-router'

export const Header = () => {
    return (
        <div style={{ display: "flex", justifyContent: "space-between", backgroundColor:"white",margin:"0px" }}>
            <div>
                <img src={logo} style={{width:"100px",height:"70px"}}/>
            </div>
            <div style={{ display: "flex", fontSize:"18px",fontWeight:"10px", paddingTop:"15px"}}>
                <Link to="/" style={{padding:"10px",color:"black",textDecorationLine:"none"}}>Home</Link>
                <Link to="/age" style={{padding:"10px",color:"black",textDecorationLine:"none"}}>Questions</Link >
                <Link to="/contact" style={{padding:"10px",color:"black",textDecorationLine:"none"}}>Contact Us</Link >
                <Link to="/about" style={{padding:"10px",color:"black",textDecorationLine:"none"}}>About</Link >
            </div>
            <Link to="/age" style={{ fontSize:"18px",margin:"20px", backgroundColor:"rgb(37 99 235 )",display:"flex",justifyContent:"center",alignItems:"center",color:"white",borderRadius:"6px",height:"30px",padding:"5px 25px",textDecorationLine:"none"}}>
                    Get Started
            </Link>
        </div>
    )
}
