import mongoose from 'mongoose';
import { Conditioner } from './conditioner.schema';
import { Light } from './light.schema';
const { Schema } = mongoose;

export const Home = new Schema({
  
    name: String,
    gas:{
        type:Boolean,
        default: false
    },
    fire:{
        type:Boolean,
        default: false
    },
    light:[Light],
    conditioners:[Conditioner] ,
    humidity: Number , 
    temp:Number 

    
});