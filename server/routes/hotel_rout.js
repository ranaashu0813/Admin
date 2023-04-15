import express from 'express'; 

const app = express(); 

import hotel from '../model/hotel.js'
const Router = express.Router();
 
//posting data

//here we are finding all the data with the help of find method

Router.get( "/" , async (req,res,next)=>{
   
    try{    
  
         const gethotel= await hotel.find();
         res.status(200).json(gethotel);

    }catch(err){
        next(err);
    }
})


//finding  user by its id 

Router.get( "/:id" , async (req,res,next)=>{

    try{    
  
        const gethotel= await hotel.findById(req.params.id);
        res.status(200).json(gethotel);

   }catch(err){
       next(err);
   }
})


//here we are creating new user 

Router.post( "/add" , async (req,res)=>{
    const newhotels = new hotel(req.body)
    try{    
  
         const savedhotel = await newhotels.save();
         res.status(200).json(savedhotel);

    }catch(err){
        res.status(500).json(err);
    }
})

//making function of deletion in the given 


Router.delete( "/:id" , async (req,res)=>{
   
    try{    
  
         const deleteHotel= await hotel.findByIdAndDelete(req.params.id);
         res.status(200).json(deleteHotel);

    }catch(err){
        res.status(500).json(err);
    }
})

//code of updation

Router.put( "/update/:id" , async (req,res)=>{
   
    try{    
  
         const updateHotel= await hotel.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true});
         res.status(200).json(updateHotel);

    }catch(err){
        res.status(500).json(err);
    }
})


export default Router;