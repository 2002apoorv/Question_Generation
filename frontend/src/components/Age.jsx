import { useEffect, useState } from "react";
import axios from "axios";
import Chapter from "./Chapter";
import { Link } from "react-router";

function ONCLICK(id){
    console.log("The ID is "+id)

    return( 
            <>
                <div>Hello</div>
                <Chapter/>
            </>
        )
}

const Age = () => {
    const [ages, setAges] = useState([]);
    
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get("http://localhost:3000/");
          setAges(response.data.ages); // Extracting 'ages' from response
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
  
      fetchData();
    }, []);
  
    return (
      <div style={{display: "flex", 
        justifyContent: "center", 
        alignItems: "center", 
        flexDirection: "column",margin:"60px",fontFamily:"sans-serif"}}>

          <h1 style={{fontSize:"50px",margin:"50px",marginBottom:"10px",color:"#1C2833",webkitTextStroke: "2px #2C3E50",textShadow: "0px 0px 5px rgba(255, 255, 255, 0.5)"}}>Math is fun when you pick the right challenge!</h1>
          <h2 style={{fontSize:"30px",color:"#1C2833",marginBottom:"20px",webkitTextStroke: "1px #2C3E50"}}> We personalize questions based on your age. Pick your age group to start solving!</h2>
        
            {ages.map((age, index) => {
              const chapters={id:age._id};
              
              return <Link to="/chapter" state={chapters} style={{backgroundColor: "#F4A261",fontSize: "30px",width: "230px",height: "100px",textAlign: "center",display: "flex",    justifyContent: "center",alignItems: "center",padding:"30px",margin:"20px", borderRadius:"6px",color:"black",textDecorationLine:"none"}} key={age._id} onClick={()=>{ONCLICK(age._id)}}>{age.age}</Link>
            })}
            
      </div>
    );
  };

  export default Age