import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useLocation } from "react-router";

function Chapter(){
    const location=useLocation();
    const passeddata=location.state;
    
    const [chapters, setChapters] = useState([]);
    
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get("http://localhost:3000/chapter",{
            params:{
              ageid:passeddata.id
            }
          });
          setChapters(response.data.chapter); // Extracting 'ages' from response
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
      fetchData();
    }, []);
  
    return(
      <div style={{display: "flex", 
        justifyContent: "center", 
        alignItems: "center", 
        flexDirection: "column",margin:"60px",fontFamily:"sans-serif"}}>

          <h1>Choose the Chapter you want to practise</h1>
          
            {chapters.map((chapter, index) => {
              const questions={id:chapter._id};
              
              return <Link to="/question" state={questions} style={{backgroundColor: "pink",fontSize: "25px",width: "300px",height: "80px",textAlign: "center",display: "flex",    justifyContent: "center",alignItems: "center",padding:"10px",margin:"20px",borderRadius:"5px",color:"black",textDecorationLine:"none"}} key={chapter._id} >{chapter.chapter}</Link>
            })}
      </div>
    );
  }

  export default Chapter