import React from 'react';
import { Link } from "react-router-dom"; 

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-7xl">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-orange-100 via-white to-orange-50 py-20 sm:py-28 px-6 sm:px-12 lg:px-20 rounded-2xl shadow-lg sm:mx-16 mx-2">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left: Text */}
          <div className="text-center lg:text-left space-y-6">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
              Download Now  
              <span className="block text-orange-600 mt-2">Lorem Ipsum</span>
            </h1>
            <p className="text-lg text-gray-700 max-w-lg mx-auto lg:mx-0">
              Discover modern solutions built with React and TailwindCSS.  
              Simple, fast, and responsive UI for your projects.
            </p>
            <Link
              className="inline-flex items-center px-8 py-4 font-semibold text-lg rounded-xl bg-orange-600 text-white shadow-md hover:bg-orange-700 hover:shadow-lg transition"
              to="/"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 16l-6-6h12l-6 6z" />
              </svg>
              Download Now
            </Link>
          </div>

          {/* Right: Illustration */}
          <div className="flex justify-center lg:justify-end">
            <img 
              className="w-80 sm:w-96 drop-shadow-xl rounded-xl" 
              src="https://www.shutterstock.com/image-vector/relaxed-businessman-freelancer-summer-wear-260nw-2140238025.jpg" 
              alt="Hero Illustration" 
            />
          </div>
        </div>
      </section>

      {/* Secondary Section */}
      <section className="grid place-items-center sm:mt-24 mt-16 px-6">
        <img 
          className="sm:w-96 w-56 drop-shadow-lg rounded-xl" 
          src="https://www.shutterstock.com/image-illustration/stick-figure-lounges-beach-chair-260nw-2663674645.jpg" 
          alt="Secondary Illustration" 
        />
      </section>

      {/* Bottom Heading */}
      <h1 className="text-center text-3xl sm:text-5xl py-16 font-extrabold tracking-tight text-gray-800">
        Lorem Ipsum Yojo
      </h1>
    </div>
  );
}
