import axios from 'axios';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';

export default function Newsletter() {
    const [input, setInput] = useState({
       
        email: ""
       });
    
      const {
        register,
        handleSubmit,
        control,
        formState: { errors, isSubmitting },
      } = useForm();
    
      const handleChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
      };
     
      const onSubmit = async (e) => {
        try {
          const response = await axios.post(
'            /api/news/newsletter',
            input,
            { withCredentials: true }
          );
    
     
          if (!response.data.success) {
            toast.error(response.data);
            console.log("Joining NewsLetter error:", response.data);
            return;
          }
    
          toast.success("Thank You ! We appreciate for contacting us. We will get back to you soon!");
          
         
          setInput({
            
            email: ""
           
          });
        } catch (error) {
          console.error("Error in joining newsletter:", error.response.data.message);
          toast.error(error.response.data.message);
        }
      };
  return (
    <>
    <Toaster/>
    <div className="bg-transparent border border-gray-800 flex px-1 py-1 rounded-full">
        
      <input  type="email"
                    value={input.email}
                    name="email"
                    id='email'
                    onChange={handleChange}
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value:
                          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                        message: "Invalid email address",
                      },
                    })}  placeholder='Enter your email' className="w-full border-2 rounded-full border-white outline-none bg-transparent pl-4 text-sm text-gray-300" />
                    {errors.email && (
                  <div className="para px-3 pt-1">{errors.email.message}</div>
                )}
          <button onSubmit={onSubmit} type='submit' value='submit'
            className="rounded-3xl px-6 py-3  font-medium button"> {isSubmitting ? "Subscribing..." : "Subscribe"}</button>
    </div>
    </>
  )
}
