import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useLocation } from "react-router";




function Question() {
  const location = useLocation();
  const passeddata = location.state;


  const [questions, setQuestions] = useState([]);
  const [answer, setAnswer] = useState(0);
  const [submission, setSubmission] = useState("");

  function checkans(inputans, ans,genques) {
    console.log("Hello from check" + inputans + "and" + ans)
    console.log(genques)
    if (inputans == ans)
      setSubmission(<div style={{ display: "flex", justifyContent: "center", margin: "50px", color: "green" }}><div>Your answer is correct</div></div>)
    else
      setSubmission(<div style={{ display: "flex", justifyContent: "space-evenly", margin: "50px", color: "red" }}><div style={{ paddingTop: "10px" }}>Your answer is wrong</div><Link to="/generate" state={genques} style={{ display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "greenyellow", color: "white", height: "50px", width: "250px", fontSize: "23px", borderRadius: "6px", textDecoration: "none", border: "solid black 1px" }}>Generate New Question</Link></div>)
  }


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://question-generation-one.vercel.app/questions", {
          params: {
            chapterid: passeddata.id
          }
        });
        setQuestions(response.data.question); // Extracting 'ages' from response
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  //console.log(chapters+"hello");

  return (
    <>
      {questions.map((question, index) => {
        const genques={id:question._id,question:question.question}
        return <>
          <div style={{ backgroundColor: "white", fontSize: "30px", width: "900px", height: "300px", padding: "30px", margin: "40px 300px" }} key={question._id} ><div><b>Question)</b>{question.question}</div>
            <br />
            <br />
            <div style={{ display: "flex" }}>
              <input type="text" value={answer} onChange={(e) => { setAnswer(e.target.value) }} style={{ height: "40px", width: "700px", borderTopLeftRadius: "3px", borderBottomLeftRadius: "3px" }} />
              <button style={{ backgroundColor: "greenyellow", display: "flex", justifyContent: "center", textAlign: "center", alignItems: "center", width: "150px", fontSize: "20px", borderTopRightRadius: "10px", borderBottomRightRadius: "10px" }} onClick={() => {
                const ans = checkans(answer, question.answer,genques)
                console.log(ans)
              }}>Submit</button></div>
            <div>{submission}</div>
          </div>
        </>
      })}
    </>
  )
}


export default Question
