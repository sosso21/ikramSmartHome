import mongoose from 'mongoose';
const { Schema } = mongoose;

export const Conditioner = new Schema({
  
  name:string,
  isActif:{
      type:Boolean,
      default: false
  },
  
});