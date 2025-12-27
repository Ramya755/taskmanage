const express=require('express');
const taskctrl=require('../controllers/taskcontroller')
const route=express.Router()

route.post('/add',taskctrl.addtask)
route.get('/all',taskctrl.to_get_all)
module.exports=route


