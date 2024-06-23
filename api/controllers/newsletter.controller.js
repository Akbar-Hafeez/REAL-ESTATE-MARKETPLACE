
import { Newsletter } from "../models/newsletter.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";

import { errorHandler } from "../utils/error.js";

const newsletter = async (req, res,next) => {
  try {
   
    const{ email}=req.body
    console.log("email",email)
   
    const existedEmail=await Newsletter.findOne({
        $or:[{email}]
    })
    if (existedEmail) {
      next(error)
    }
    
    const user =await Newsletter.create({
       email
       })
    
   
    const newsletter = await Newsletter.findById(user._id)
  
    if (!newsletter) {
      next(error)
    }
    
    // res.status(201).json(rest);
    return res.status(201).json(
        new ApiResponse(200,newsletter,"Thank You ! We appreciate for contacting us. We will get back to you soon!")

    )
  } catch (error) {
   
    return next(errorHandler(401, 'You have already joined with this email !'));
 
  }
};
export  {newsletter}