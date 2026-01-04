const mongoose=require('mongoose')
const connectToDo=async()=>{
    try{
        await mongoose.connect(""),
        console.log("Mongo DB connected")
    }
    catch(err){
        console.log(err.message)
    }   
}
module.exports=connectToDo