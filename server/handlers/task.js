const task = require('../models/task');

module.exports = {
    get: get,
    post: post
};

function get(req, res) {
    task.find().then((tasks)=>{
        res.send({ tasks });
    }).catch((err)=>{
        console.log(err);
        //res.sendStatus(500);
        res.status(500).send('Ooops!, Something went wrong');
    })
}

function post(req, res){
    const taskRequest = req.body.task;
    let newTask = new task({
        name: taskRequest.name
    });
    newTask.save((err, task) => {
        if (err) return console.error(err);
    })
}
