import React from 'react';
import Navbar from './Navbar';

const Contact = () => {
    return (
        <>
        <div className="bg-fixed bg-[url('/img/6185fe84ae336e00658ded9d8cbbfa4d.jpg')] bg-cover text-white min-h-screen flex items-center justify-center p-5">
          <div className="bg-black bg-opacity-65  p-10 rounded-lg shadow-lg max-w-lg w-full border-2 border-solid border-black">
            <h2 className="text-3xl font-bold mb-8 text-white text-center">Contact Us</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-xl text-white font-medium mb-1" htmlFor="name">Name</label>
                <input
                  className="w-full px-3 py-2 bg-transparent text-white border border-gray-600 rounded placeholder-black focus:outline-none focus:border-blue-500"
                  type="text"
                  id="name"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-xl text-white font-medium mb-1" htmlFor="email">Email</label>
                <input
                  className="w-full px-3 py-2 bg-transparent text-white border border-gray-600 rounded placeholder-black focus:outline-none focus:border-blue-500"
                  type="email"
                  id="email"
                  placeholder="Your Email"
                />
              </div>
              <div>
                <label className="block text-xl text-white font-medium mb-1" htmlFor="message">Message</label>
                <textarea
                  className="w-full px-3 py-2 bg-transparent text-white border border-gray-600 rounded placeholder-black focus:outline-none focus:border-blue-500"
                  id="message"
                  rows="4"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <button
                className="w-full py-3 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded transition duration-300"
                type="submit"
              >
                Send Message
              </button>
            </form>
          </div>
        </div> </>
      );
}

export default Contact;
