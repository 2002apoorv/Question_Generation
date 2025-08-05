import { useState } from "react";
import axios from "axios";
import { useLocation } from "react-router";

export const Chatbot = () => {
    const location = useLocation();
    const passedData = location.state;
    console.log("hi")
    console.log(passedData.id);

    const [input, setInput] = useState("");
    const [response, setResponse] = useState("");
    const [gques,setGques]=useState("");
    const [gans,setGans]=useState("");
    function Clicked() {
        console.log("bulb"+input+"ankit");
    }


    const handleSend = async () => {
        try {
            const res = await axios.post("https://question-generation-one.vercel.app/chat", { message: input });
            setResponse(res.data.candidates[0]?.content?.parts[0]?.text || "No response");
            

        } catch (error) {
            console.error("Error:", error);
            setResponse("Error getting response.");
        }
    };

    function quesans(){
        const st=String(response).trim().indexOf("{");
        console.log(response)
        console.log("the type of response is"+typeof(response))
        console.log(st)
        const et=response.indexOf("}");
        const sawal=response.substring(st+1,et);
        console.log("the sawal is:"+sawal)
        setGques(sawal);
        const as=response.indexOf("[");
        const es=response.indexOf("]");
        const jawab=response.substring(as+1,es)
        setGans(jawab);
    }

    return (
        <div>
            <center>
                <h1>Gemini Chatbot</h1>
                <button onClick={()=>{setInput("This is the question:" + passedData.id + " Now generate a new question with different values and enclose the new generated question in { } and generate the answer to the generated question and write it inside  [ ]");}}>Generate </button>
                <button onClick={handleSend}>Send</button>
                <button onClick={quesans}>Generate Question</button>
                <p>{input}</p>
                <p>{response}</p>
                <p>question{gques}</p>
                <p>answer{gans}</p>
            </center>

        </div>
    );
}

