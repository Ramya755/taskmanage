const model=require('../models/taskmangement')
const addtask= async (req,res)=>{
    try{
        const {title,description,endDate}=req.body
        const ctrl= new model({
            title:title,
            description:description,
            endDate:endDate,
        })
        await ctrl.save()
        res.status(201).json(ctrl)
    }
    catch(err){
        res.send(500).json({message:err.message})
    }  
}
const to_get_all=async(req,res)=>{
    try{
        const tasks=await model.find();
        res.status(200).json({data:tasks})
    }
    catch(err){
        res.status(500).json({message:err.message})
    }
}

module.exports={addtask,to_get_all}

