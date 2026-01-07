const model = require('../models/taskmangement')
const addtask = async (req, res) => {
    try {
        const { title, description, endDate } = req.body
        const ctrl = new model({
            title: title,
            description: description,
            endDate: endDate,
        })
        await ctrl.save()
        res.status(201).json(ctrl)
    }
    catch (err) {
        res.send(500).json({ message: err.message })
    }
}
const to_get_all = async (req, res) => {
    try {
        const tasks = await model.find();
        res.status(200).json({ data: tasks })
    }
    catch (err) {
        res.status(500).json({ message: err.message })
    }
}
const updatebyid = async (req, res) => {
    try {
        const { id, title, description } = req.body;
        const ubi = await model.findByIdAndUpdate({ _id: id }, {
            title: title,
            description: description
        })
        res.status(200).json({ data: ubi })
    } catch (error) {
        res.status(500).json({ data:ubi })
    }
}
const deletebyid=async(req,res)=>{
    try{
        const {id}=req.params
        const dbi=await model.findByIdAndDelete(id)
        res.status(200).json({data:dbi})
    }
    catch(error){
        res.status(500).json({message:error.message})
    }
}
module.exports = { addtask, to_get_all, updatebyid ,deletebyid}

