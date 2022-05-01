import mongoose from 'mongoose';
import { Home } from './home.schema';
const { Schema } = mongoose;

export const User = new Schema({
  
    username:{
        type: string,
        unique: true,
        required:true
    },
    email : {
        type: string,
        unique: true,
        required:true
    },
    password:{
        type: string,
        required:true
    },
    homes:[Home]
  
});