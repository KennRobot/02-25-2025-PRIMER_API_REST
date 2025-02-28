const {tasks} = require('../models/task');

exports.getAllTasks = (req, res) => {
    res.status(200).json(tasks);
};

exports.getTastById = (req, res) => {
    const id = parseInt(req.params.id);
    const task = tasks.find(item => item.id === id);
    if(task){
        res.status(200).json(task);
    }else{
        res.status(404).json({message: "Tarea no encontrada"});
    }
};

exports.createTask = (req, res) => {
    const newTask = {
        id: tasks.length,
        title: req.body.title
    };
    tasks.push(newTask);
    res.status(201).json(newTask);

};

exports.updateTask = (req, res) => {
    const id = parseInt(req.params.id);
    const task = tasks.find(item => item.id === id);
    if(task){
        task.title = req.body.title;
        res.status(200).json(task);
    }else{
        res.status(404).json({message: "Tarea no encontrada"});
    }
};
