const express = require('express');
const router = express.Router()

const {createTask,getAllTasks, deleteTask,patchTask} = require('../controller/tasks-controller')

router.route('/postTask').post(createTask)

router.route('/getAllTasks').get(getAllTasks)

router.route('/deleteTask/:Id').delete(deleteTask)

router.route('/patchTask/:Id').patch(patchTask)

module.exports = router
