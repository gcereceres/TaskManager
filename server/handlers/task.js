const task = require('../models/task');

module.exports = {
    get: get,
    post: post,
    delete: del
    // put: put
};

function get(req, res) {
    task.find().then((tasks)=>{
        res.send({ tasks });
    }).catch((err)=>{
        console.log(err);
        //res.sendStatus(500);
        
    })
}

function post(req, res){
    const taskRequest = req.body.task;
    let newTask = new task({
        name: taskRequest.name,
        done: false
    });
    newTask.save((err, task) => {
        if (err) return console.error(err);
    })
}

function del(req, res){
    const taskName = req.params.taskName;
    console.log(`task to delete: ${taskName}`)
    task.findOneAndRemove({name:taskName},(err, taskRemoved)=>{
        if(err){
            console.log(err);
            res.status(500).send(`Ooops!, Something went wrong deleting task: ${taskName}`);
        }else{
            if(!taskRemoved){
                res.status(500).send(`Task: ${taskName} does ot exist.`);
            }
            console.log(`Task ${taskRemoved} removed succesfully`);
            res.status(200);
        }
    });
}

// function put(req, res){
//     const taskRequest = req.body.task;
//     const taskId = req.body.task.id;

//     console.log(`task to edit: ${taskRequest.name}`);

//     task.findByIdAndUpdate(taskId, {$set: {name:taskRequest.name}},{new: true}, (err, task) => {
//         if (err){
//             res.status(500).send(`Ooops!, Something went wrong updating task: ${taskName}`);
//         }else{
//             console.log(`Task ${taskRequest.name} updated succesfully`);
//             res.status(task);
//         }
//     });
// }
