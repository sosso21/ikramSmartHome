import mongoose from 'mongoose';
const { Schema } = mongoose;

export const Light = new Schema({
  
  name:string,
  isActif:{
      type:Boolean,
      default: false
  },
  color:[{
      type:String ,
      enum:[
          "RED",
          "GREEN",
          "BLUE"
      ],
  }]
  
});