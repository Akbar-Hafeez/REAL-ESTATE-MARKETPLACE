import mongoose from "mongoose";

const newsletterSchema = new mongoose.Schema({
 
  email: {
    type: String,
    required: true,
  }
 
},{timestamps:true});

export const Newsletter = mongoose.model("Newsletter",newsletterSchema);