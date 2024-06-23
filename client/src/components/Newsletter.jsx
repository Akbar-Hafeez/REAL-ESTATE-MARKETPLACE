
import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';

export default function Newsletter() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('/api/news/newsletter', data, {
        withCredentials: true,
      });

      if (!response.data.success) {
        toast.error(response.data.message);
        console.log('Joining Newsletter error:', response.data);
        return;
      }

      toast.success('Thank you! We appreciate you contacting us. We will get back to you soon!');
      reset();  // Reset form values
    } catch (error) {
      console.error('Error in joining newsletter:', error.response.data.message);
      toast.error(error.response.data.message);
    }
  };

  return (
    <>
      <Toaster />
      <div className="bg-transparent border border-gray-800 flex px-1 py-1 rounded-full">
        <form onSubmit={handleSubmit(onSubmit)} className="flex w-full">
          <input
            type="email"
            name="email"
            id="email"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: 'Invalid email address',
              },
            })}
            placeholder="Enter your email"
            className="w-full border-2 rounded-full border-white outline-none bg-transparent pl-4 text-sm text-gray-300"
          />
          {errors.email && (
            <div className="para px-3 pt-1">{errors.email.message}</div>
          )}
          <button
            type="submit"
            className="rounded-3xl px-6 py-3 font-medium button"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Loading...' : 'Subscribe'}
          </button>
        </form>
      </div>
    </>
  );
}
