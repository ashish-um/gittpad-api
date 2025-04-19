const express = require('express');
const authRouter = require('./routes/auth');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();
app.use(cors());

const uri = process.env.MONGODB_URI;

mongoose.connect(uri).then(()=>{
    console.log("Connected to DB");
}).catch((err)=>console.log("faliled to connect to DB", err));

app.get('/', (req, res) => {
    res.send("Hi");
})

app.use('/auth', authRouter);

app.listen(process.env.PORT || 8080, ()=>console.log(`server running on port ${process.env.PORT}`));