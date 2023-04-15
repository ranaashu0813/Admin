import mongoose  from "mongoose";
const hotelschema = new mongoose.Schema({

    
    Hotel_Name:{
        type:String,
        required:true,
        unique : true,
    },
    Address:{
        type:String,
        required:true
    },
    Amenities:{
        type:String,
        required:true
    },
    Budget:{
        type:Number,
        required:true
    },
    photos:{
        type:[String],
        
    }

   

},{timestamps:true});

export default mongoose.model("hotel_user",hotelschema);