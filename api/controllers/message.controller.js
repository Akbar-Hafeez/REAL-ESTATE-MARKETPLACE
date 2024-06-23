import { Message } from "../models/message.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";
// import { ApiError } from "../utils/apiError.js";
import { errorHandler } from "../utils/error.js";

const sendMessage = async (req, res,next) => {
  try {
   
    const{ name,address,phoneNumber,email,message,subject}=req.body
    console.log("name:",name)
    if (
        [name,address,phoneNumber,email,message].some((field)=> field?.trim( ) === "") 
    ) {
       
       next(error)
    }
    const existedMessage=await Message.findOne({
        $or:[{phoneNumber},{email}]
    })
    if (existedMessage) {
      next(error)
    }
    
    const user =await Message.create({
      name,
      address,
      phoneNumber,
      email
      ,message,
      subject
    
    })
    
   
    const sendMessage = await Message.findById(user._id)
  
    if (!sendMessage) {
      next(error)
    }
    
    // res.status(201).json(rest);
    return res.status(201).json(
        new ApiResponse(200,sendMessage,"Message send successfully")

    )
  } catch (error) {
   
    return next(errorHandler(401, 'Message Already exist with same email or phone number u can contact us on our helpline or email for further assistance!'));
 
  }
};
export  {sendMessage}