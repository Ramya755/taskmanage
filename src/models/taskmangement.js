const mongoose=require('mongoose')
const Taskmodel=mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    endDate:{
        type:String,
        required:true
    },
    taskaddedDate:{
        type:String,
        default:Date.now()
    }
},
    {
        timeStramps:true
}
)
module.exports=mongoose.model("usertask",Taskmodel)
