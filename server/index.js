const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

app.use('/api', require('./routes')());

mongoose.connect('mongodb://localhost:27017/tasks', (error) => {
    if(error){
        console.log('Ooops, Shit happened',error);
    }else{
        console.log('Connected to MongoDB');

        app.listen(3005);
        console.log('App running on port: 3005');
    }
});