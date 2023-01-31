const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const cors = require('cors');

const app = express();
app.use(express.json());

const PORT = 5000; 

app.use(cors());

const TodoItemRoute = require('./routes/todoItems');

mongoose.connect(process.env.DB_CONNECT)
.then(()=> console.log("Database connected"))
.catch(err=>console.log(err));

app.listen(PORT, ()=> console.log("Server connected on port", PORT));

app.use('/', TodoItemRoute);