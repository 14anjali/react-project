import React from 'react';

export default function Contact() {
  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100 px-4">
      <div className="max-w-6xl w-full bg-white shadow-2xl rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
        {/* Left Section - Info */}
        <div className="p-10 bg-gradient-to-br from-orange-600 to-orange-500 text-white flex flex-col justify-center">
          <h1 className="text-4xl font-extrabold leading-tight">
            Get in Touch
          </h1>
          <p className="text-lg mt-3 opacity-90">
            Fill in the form to start a conversation
          </p>

          <div className="mt-10 space-y-6">
            <div className="flex items-center">
              <svg
                className="w-8 h-8 text-white opacity-90"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
              >
                <path d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <p className="ml-4 text-md font-medium">
                Acme Inc, Street, State, Postal Code
              </p>
            </div>

            <div className="flex items-center">
              <svg
                className="w-8 h-8 text-white opacity-90"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
              >
                <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.95.68l1.5 4.5a1 1 0 01-.5 1.2l-2.3 1.1a11 11 0 005.5 5.5l1.1-2.3a1 1 0 011.2-.5l4.5 1.5a1 1 0 01.68.95V19a2 2 0 01-2 2H17C9.7 21 3 14.3 3 6V5z" />
              </svg>
              <p className="ml-4 text-md font-medium">+44 1234567890</p>
            </div>

            <div className="flex items-center">
              <svg
                className="w-8 h-8 text-white opacity-90"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
              >
                <path d="M3 8l7.9 5.3a2 2 0 002.2 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <p className="ml-4 text-md font-medium">info@acme.org</p>
            </div>
          </div>
        </div>

        {/* Right Section - Form */}
        <form className="p-10 flex flex-col justify-center bg-white">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Send Us a Message
          </h2>

          <input
            type="text"
            placeholder="Full Name"
            className="w-full mb-4 py-3 px-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:outline-none"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full mb-4 py-3 px-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:outline-none"
          />

          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full mb-4 py-3 px-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:outline-none"
          />

          <textarea
            placeholder="Your Message"
            rows="4"
            className="w-full mb-6 py-3 px-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:outline-none"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 rounded-lg transition duration-300 shadow-md"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
