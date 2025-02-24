import { useEffect, useState } from "react";
import { BrowserRouter, Link, Links, Route, Routes } from "react-router";
import axios from "axios";
import Age from "./components/Age";
import { Header } from "./components/Header";
import Chapter from "./components/Chapter";
import Question from "./components/Question";
import { Home } from "./components/Home";
import { Contact } from "./components/Contact";
import { About } from "./components/About";
import { Chatbot } from "./components/Chatbot";





function App() {
    
    
    return(
        <div >
                
                <BrowserRouter>
                    <Header/>
                        <Routes>
                            <Route path="/" element={<Home/>}/>
                            <Route path="/age" element={<Age/>}/>
                            <Route path="/chapter" element={<Chapter/>}/>
                            <Route path="/question" element={<Question/>}/>
                            <Route path="/contact" element={<Contact/>}/>
                            <Route path="/about" element={<About/>}/>
                            <Route path="/generate" element={<Chatbot/>}></Route>
                        </Routes>
                </BrowserRouter>
                
                
                
                
        </div>
    )
}

export default App;
