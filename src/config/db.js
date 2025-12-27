const mongoose=require('mongoose')
const connectToDo=async()=>{
    try{
        await mongoose.connect("mongodb+srv://ramya:MfWwNGAd9APQvDba@task.husid4b.mongodb.net/task__1"),
        console.log("Mongo DB connected")
    }
    catch(err){
        console.log(err.message)
    }   
}
module.exports=connectToDo