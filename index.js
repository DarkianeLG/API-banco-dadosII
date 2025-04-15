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
const app = express();
app.use(express.json());
const port = 3000

import Task from "./model/task.js"

app.get('/tasks', async (req, res)=>{
    const tasks = await Task.findAll();
    res.status(200).json(tasks);
});

app.post('/tasks', async(req, res)=>{
    try{
    const newTask = await Task.create(req.body);
    res.status(2001).json(newTask);
        }catch(err){
            console.log(err);
            res.status(400).json("Erro ao criar tarefa");
        }
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});