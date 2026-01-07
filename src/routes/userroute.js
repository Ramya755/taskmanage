const express=require('express');
const taskctrl=require('../controllers/taskcontroller')
const route=express.Router()

route.post('/add',taskctrl.addtask)
route.get('/all',taskctrl.to_get_all)
route.put('/update',taskctrl.updatebyid)
route.delete('/delete/:id',taskctrl.deletebyid)
module.exports=route


