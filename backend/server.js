const express=require('express');
const cors=require('cors');
const dotenv=require('dotenv')
const mongoose=require('mongoose');
const authRouter=require('./routers/Auth');
const courseRouter=require('./routers/Course')

const app=express();


app.use(cors());
app.use(express.json());
dotenv.config({path:'./config/config.env'})

mongoose.connect(process.env.DATABASE_CONNECTION,()=>{
    console.log('connection made')
})
app.use('/auth',authRouter)
app.use('/course',courseRouter)


app.listen(5000,()=>{
    console.log("expreess app running")
})