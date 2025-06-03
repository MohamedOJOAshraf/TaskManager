const taskModel = require('../models/tasks-schema')

const validation = require('../validation/task-validation')

const utils = require('../utils/msg')

const getAllTasks = async (req,res) =>{

    const tasks = await taskModel.find({},{__v:false})

    res.status(200).json({status:utils.SUCCESS,data:tasks})
}

const createTask = async (req,res) =>{
    try{
        await validation.validate(req.body)// validate before destructuring

        const newTask = new taskModel(req.body)
        await newTask.save()

        return res.status(201).json({status:utils.SUCCESS,data:newTask})

    }catch(err){
       return res.status(404).json({status:utils.ERROR,msg:err})
    }
}

const deleteTask = async (req,res) =>{
    try{    
        const taskId = req.params.Id;

        const task = await taskModel.findById(taskId);

        // check if task isn't found
        if(!task)
            return res.status(404).json({state:utils.FALIED,msg:utils.TASK_NOT_FOUND})
        

        await taskModel.deleteOne({_id:taskId})
        return res.status(201).json({state:utils.SUCCESS,msg:utils.TASK_IS_DELETED})

    }
    catch(err){
            return res.status(404).json({state:utils.ERROR,msg:err})
   }
}

const patchTask = async (req,res) =>{
    try{
        const taskId = req.params.Id;

        const task = await taskModel.findById(taskId)

        // check if task isn't found
        if(!task)
            return  res.status(404).json({state:utils.FALIED,msg:utils.TASK_NOT_FOUND})
        

        await taskModel.findByIdAndUpdate(taskId,req.body)
        return res.status(201).json({status:utils.SUCCESS,data:task})

    }catch(err){
        return res.status(404).json({state:utils.ERROR,msg:err})
    }
}

module.exports ={
    createTask,
    getAllTasks,
    deleteTask,
    patchTask
}
