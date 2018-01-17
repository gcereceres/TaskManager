const express = require('express');
const taskHandler = require('../handlers/task');

module.exports = () => {
    const router = express.Router();

    router.get('/', (req, res) => {
        res.send('Hello Nearsoft!');
    })

    router.route('/task')
        .get(taskHandler.get)
        .post(taskHandler.post);


    return router;
};