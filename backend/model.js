const mongoose=require("mongoose");

mongoose.connect("mongodb+srv://apoorv2002singh:NhkqYjQqG10kn13E@cluster0.mmtos.mongodb.net/QuestionGen")

const ageSchema=new mongoose.Schema({
    age:{
        type:Number,
        required:true
    }
})

const chapterSchema=new mongoose.Schema({
    ageid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Age'
    },
    chapter:{
        type:String,
        required:true
    }
})

const questionSchema=new mongoose.Schema({
    chapterid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Chapter'
    },
    question:{
        type:String,
        required:true
    },
    answer:{
        type:String,
        required:true
    }
})

const Age= mongoose.model("Age",ageSchema);
const Chapter= mongoose.model("Chapter",chapterSchema);
const Question=mongoose.model("Question",questionSchema);

module.exports={
    Age,Chapter,Question
}