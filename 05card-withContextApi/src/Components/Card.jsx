import React from 'react'

export default function Card() {
    return (
<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-900 dark:border-gray-700">
  <a href="/">
    <img
      className="rounded-t-lg"
      src="https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      alt="Blog Thumbnail"
    />
  </a>
  <div className="p-5">
    <a href="/">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Top 10 Web Development Trends in 2025
      </h5>
    </a>
    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
      Stay ahead in the web dev world — discover the most important trends shaping frontend and backend development this year.
    </p>
    <div className="flex items-center justify-between">
      <span className="text-sm text-gray-500 dark:text-gray-400">March 5, 2025</span>
      <a
        href="/"
        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-indigo-300 dark:bg-indigo-500 dark:hover:bg-indigo-600 dark:focus:ring-indigo-800"
      >
        Read More
        <svg
          className="w-3.5 h-3.5 ml-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      </a>
    </div>
  </div>
</div>


    );
}