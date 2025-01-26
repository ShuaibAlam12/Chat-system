const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const chat = require("./models/Chat.js");
const methodOverride = require("method-override");
const { log } = require("console");

app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname,"public")));
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));


main().then((res) => {
    console.log("Mongoose connection build successfully!");
}).catch((err) => {
    console.log(err);

})
async function main() {
        await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");

}

//chat Index Route

app.get("/chats",async(req,res)=>{
    let chats= await chat.find();
    // console.log(chats);
    res.render("index.ejs",{chats});
})

app.get("/", (req, res) => {
    res.send("Hello bachcha party");
})

//New Route
app.get("/chats/new",(req,res)=>{
    res.render("new.ejs");
})
app.post("/chats/newMsg",(req,res)=>{
    let {from,msg,to}=req.body;
    chat.insertMany({
        from:from,
        msg:msg,
        to:to,
        created_at:new Date()
    }).then((res)=>{
        console.log(res);
        
    }).catch((err)=>{
        console.log(err);
        
    })
    res.redirect("/chats");
})

//Edit or Update
app.get("/chats/:_id/edit",async (req,res)=>{
   let {_id}=req.params;
   let data=await chat.findById(_id);
   res.render("Edit.ejs",{data});
})

app.put("/chats/:_id",async(req,res)=>{
    let {_id}=req.params;
    let {msg:newMsg}=req.body;
    let updatedChat=await chat.findByIdAndUpdate(_id,{msg:newMsg},{runValidators:true,new:true});
   res.redirect("/chats");
});


//Delete Route
app.delete("/delete/:_id",async(req,res)=>{
    let {_id}=req.params;
    console.log(_id);
    
    await chat.deleteOne({_id:_id});
    res.redirect("/chats");
})

//listening Port
let port = 3000;
app.listen(port, () => {
    console.log(`Listening on the port ${port}`);
})