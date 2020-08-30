const express = require("express");
const authMid = require('../middlewares/auth');

const Project = require("../../app/models/project");

const Task = require("../../app/models/task");

const router = express.Router();

router.use(authMid);// ja faz com que primeiro ocorra as validações desse middlwares para se tiver correto('dar o next()'), dar a mensagem ok:true

router.get('/', async (req, res)=>{
    try {
        
        const projects = await Project.find().populate(['user', 'tasks']);

        return res.send({projects});

    }catch(err){
        return res.status(400).send({error: 'error load project!'});
    }
});



/* CRIANDO CRUDS  */

router.get('/:projectId', async (req, res)=>{
    try {
        
        const project = await Project.find({ user: req.params.projectId }).populate(['user', 'tasks']);

        return res.json([project]);

    }catch(err){
        return res.status(400).send({error: 'error load one project!'});
    }
}); 

router.post('/', async (req,res)=>{
    
    try {

        const {title, description, tasks } = req.body;

        const project = await Project.create({title, description,  user: req.userId});

        await Promise.all(tasks.map(async task => {
            const projectTask = new Task({ ...task, project: project._id });

            await projectTask.save();

            project.tasks.push(projectTask);
        }));

        await project.save();

        return res.json([project]);




    }catch(err) {
        console.log(err)
        return res.status(400).send({error: 'erro ao criar, tente novamente!'})
    }
});


router.put('/:projectId', async (req,res)=>{
    try {

        const {title, description, tasks } = req.body;

        const project = await Project.findByIdAndUpdate(req.params.projectId, {
        title, 
        description
        }, { new: true });

        project.tasks = [];
        await Task.remove({project: project._id});

        await Promise.all(tasks.map(async task => {
            const projectTask = new Task({ ...task, project: project._id });

            await projectTask.save();

            project.tasks.push(projectTask);
        }));

        await project.save();

        return res.send({project});




    }catch(err) {
        console.log(err)
        return res.status(400).send({error: 'erro ao atualizar, tente novamente!'})
    }
});

router.delete('/:projectId', async (req,res)=>{
    try {
        
        const project = await Project.findByIdAndRemove(req.params.projectId).populate('user');

        return res.send();

    }catch(err){
        return res.status(400).send({error: 'error delete project!'});
    }
});




module.exports = app => app.use('/projects', router);