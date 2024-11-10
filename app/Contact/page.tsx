'use client';
// pages/contact.tsx
import React, { useState } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission, e.g., send formData to a backend or API
    console.log('Form submitted:', formData);
  };

  return (
            <div><Navbar/>
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white" >
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md mt-5">
        <h1 className="text-3xl font-bold mb-6 text-center text-pink-500">Contact Us</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 text-black rounded-md focus:outline-none focus:ring focus:ring-pink-500"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 text-black rounded-md focus:outline-none focus:ring focus:ring-pink-500"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-3 py-2 text-black rounded-md focus:outline-none focus:ring focus:ring-pink-500"
              rows={4}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 rounded-md transition duration-200"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>


  </div>
  );
};

export default Contact;
