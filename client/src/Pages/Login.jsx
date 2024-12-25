import React from 'react'
import { useState } from 'react';
import axios from 'axios';

const Login = () => {

    const [formData, setFormData] = useState({email: '', password: ''});

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
              const response = await axios.post('http://localhost:5000/api/auth/login', formData);
              localStorage.setItem('token', response.data.token);
        } catch (error) {
            console.log(error);
        }

    }

  return (
    <div className="flex justify-center items-center h-screen bg-cover bg-center bg-no-repeat" style={{
        backgroundImage: "url('https://static7.depositphotos.com/1007989/789/i/950/depositphotos_7892551-stock-illustration-medical-background.jpg')",
      }}>
        <form onChange={handleSubmit} className='w-full max-w-md bg-white p-8 rounded-lg shadow-lg'>
            <h2 className='text-2xl font-bold text-center text-purple-600 mb-6'>Login</h2>
            <div className='mb-4'>
                <input type='email' name='email' placeholder='Email' className='text-black w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent' onChange={handleChange} />
            </div>
            <div className='mb-6'>
                <input placeholder='Password' className='text-black w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent' type='password' name='password' onChange={handleChange}/>
            </div>
            <button type='submit' className='w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 transition'>Login</button>
            <div className='mt-3 text-center'>
            <a href='/register' className='w-full text-black'>Not a User?</a>
            </div>
        </form>      
    </div>
  )
}

export default Login