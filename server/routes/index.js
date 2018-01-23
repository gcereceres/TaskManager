const express = require('express');
const taskHandler = require('../handlers/task');
const path = require('path');

module.exports = () => {
    const router = express.Router();
    
    // router.get('/', (req, res) => {
    //     res.sendFile(path.join(__dirname + '/dist/bundle.js'));
    //     console.log(path.join(__dirname + '/dist/bundle.js'));
    // })

    router.route('/task')
        .get(taskHandler.get)
        .post(taskHandler.post);

    router.route('/task/delete/:taskName')
        .delete(taskHandler.delete);

    return router;
};