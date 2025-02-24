const express=require("express");
const { Question, Chapter, Age } = require("./model");
const cors=require("cors");
const app=express();
app.use(cors());//allows requests from any origin


app.use(express.json());

require('dotenv').config();
const axios = require('axios');

const GEMINI_API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent";

app.post('/chat', async (req, res) => {
    try {
        const response = await axios.post(
            `${GEMINI_API_URL}?key=${process.env.GEMINI_API_KEY}`,
            {
                contents: [{ role: "user", parts: [{ text: req.body.message }] }]
            }
        );
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get("/",async (req,res)=>{
    const ages=await Age.find({});

    res.status(200).json({
        message:"Success",ages:ages
    })
})

app.get("/chapter",async (req,res)=>{
    const chapterid=req.query.ageid;

    const chapters=await Chapter.find({
        ageid:chapterid
    })

    res.status(200).json({
        message:"Success",chapter:chapters
    })
})


app.get("/questions",async (req,res)=>{
    const questionid=req.query.chapterid;

    const questions=await Question.find({
        chapterid:questionid
    })

    res.status(200).json({
        message:"Success",question:questions
    })
})

app.post("/agecreate",async (req,res)=>{
    const age=req.body.age;

    await Age.create({
        age:age
    })

    res.status(200).json({message:"age created successfully"})
})

app.post("/chaptercreate",async (req,res)=>{
    const ageid=req.body.ageid;
    const chaptername=req.body.chaptername;

    await Chapter.create({
        ageid:ageid,
        chapter:chaptername
    })

    res.status(200).json({message:"chapter created successfully"})
})

app.post("/questioncreate",async (req,res)=>{
    const chapterid=req.body.chapterid;
    const questionname=req.body.questionname;
    const answername=req.body.answername;


    await Question.create({
        chapterid:chapterid,
        question:questionname,
        answer:answername
    })

    res.status(200).json({message:"question created successfully"})
})


app.listen(3000)