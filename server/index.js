import  Express  from "express";

import path from 'path'; 
import cors from 'cors'; 
import dotev from "dotenv";
import mongoose  from "mongoose";
import bodyParser from "body-parser";

import creatError from 'http-errors';
const app = Express();
dotev.config();


mongoose.Promise = global.Promise; 

mongoose.connect(process.env.MONGO,{
useNewUrlParser  :true


}).then(()=>{
    console.log("database connection is successfully");
},
error=>{
    console.log("not connected" + error);

})

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
    extended:false
}))

app.use(cors());

import hotel_user from './routes/hotel_rout.js'

app.use('/newuser', hotel_user); 

const port = process.env.port || 4000; 

const server = app.listen(port , ()=>{
    console.log("port connection succesfully " + port);
})

app.use((req, res , next)=>{
    next(creatError(404));
})

app.get('/', (req, res)=>{
    res.send('invalid ');
})

//error handling 

app.use(function (err, req, res, next){
    if(!err.statusCode ) err.statusCode =500; 
    res.status(err.statusCode).send(err.message);
})