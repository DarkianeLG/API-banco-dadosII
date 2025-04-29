/*
import User from "./model/user.js";
salvar();
async function salvar() {
    const user = await User.create({
        firstName: 'Maria',
        lastName: 'Silva'
    });
    console.log('User saved successfuly!')
}
*/

/*
import Task from "./model/task.js"
*/

import express from 'express';
import cors from 'cors';
const app = express();
app.use(express.json());
app.use(cors());
const port = 3000;

import TaskRouter from './router/tasks-router.js';

app.use('/tasks', TaskRouter);

//TODO: Refatorar
import User from './model/user.js';
app.post('/users', async (req,res)=>{
    try{
        const user = await User.create(req.body);
        res.status(201).json(user);
    }catch(err){
        console.log(err);
        res.status(400).json("Erro ao criar usuario");
    }
});

app.listen(port, () => {
    console.log(`App de exemplo esta rodando na porta ${port}`)
});