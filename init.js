const mongoose=require("mongoose");
const chat=require("./models/Chat.js");
main().then((res)=>{
    console.log(res);
    
}).catch((err)=>{
    console.log(err);
})
async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
    console.log("mongoDB connected");
    
}

const allChats=[
    { 
        from: "Alice", 
        to: "Bob", 
        msg: "Hey Bob, how are you?", 
        created_at: new Date() 
      },
      { 
        from: "Bob", 
        to: "Alice", 
        msg: "I'm good, Alice. How about you?", 
        created_at: new Date() 
      },
      { 
        from: "Alice", 
        to: "Bob", 
        msg: "I'm doing well. Did you finish the project?", 
        created_at: new Date() 
      },
      { 
        from: "Bob", 
        to: "Alice", 
        msg: "Yes, I completed it yesterday!", 
        created_at: new Date() 
      },
      { 
        from: "Charlie", 
        to: "Alice", 
        msg: "Hi Alice, are you free for a call?", 
        created_at: new Date() 
      },
      { 
        from: "Alice", 
        to: "Charlie", 
        msg: "Hi Charlie, I can call in 10 minutes.", 
        created_at: new Date() 
      },
      { 
        from: "David", 
        to: "Alice", 
        msg: "Hey Alice, can you review my document?", 
        created_at: new Date() 
      },
      { 
        from: "Alice", 
        to: "David", 
        msg: "Sure, send it over. I'll check it soon.", 
        created_at: new Date() 
      }
]
chat.insertMany(allChats);