import React from 'react'

export const Contact = () => {
    return (
        <div style={{ display: 'flex', justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
            <h1 style={{ fontSize: "50px",marginTop:"30px"}}>
                Have a question? We're here to help.
            </h1>

            <p style={{ fontSize: "35px",fontWeight:"15px" }}>Reach out to us</p>

            <br />
            <br />
            <ul style={{ backgroundColor: "white", width: "700px", height: "250px", borderRadius: "5px", paddingTop: "15px", boxShadow:"0px 0px 10px rgba(0,0,0,0.1)" }}>
                <li style={{ fontSize: "30px", padding: "10px" }}><img src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/gmail.ico" alt="Gmail Icon" width="20px" />&nbsp; Email: apoorv2002singh@gmail.com</li>
                <li style={{ fontSize: "30px", padding: "10px" }}><img
                    src="https://cdn-icons-png.flaticon.com/512/724/724664.png"
                    alt="Phone Icon"
                    width="20px"
                    style={{ marginRight: "8px" }}
                />Phone No. : +91 9876543210</li>
                <li style={{ fontSize: "30px", padding: "10px" }}><img 
          src="https://cdn-icons-png.flaticon.com/512/684/684908.png" 
          alt="Location Icon" 
          width="20px" 
          style={{ marginRight: "8px" }}
        />Address: St. Joseph's College Prayagraj,Uttar Pradesh PINCODE:211001</li>

            </ul>
        </div>
    )
}
