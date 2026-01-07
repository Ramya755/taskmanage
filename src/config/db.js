const mongoose=require('mongoose')
require('dotenv').config({
  path: require('path').resolve(__dirname, '../../.env')
});
const mongoUrl = process.env.url_mongo;


const connectToDo=async()=>{
    try{
        await mongoose.connect(mongoUrl),
        console.log("Mongo DB connected")
    }
    catch(err){
        console.log(err.message)
    }   
}
module.exports=connectToDo