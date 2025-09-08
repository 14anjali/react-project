import React from 'react'

export default function About() {
  return (
    <div className="py-20 bg-gradient-to-r from-gray-50 via-white to-gray-100">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-20">
        <div className="md:flex md:gap-12 lg:items-center">
          
          {/* Left: Image */}
          <div className="md:w-5/12 lg:w-1/2">
            <img
              src="https://cdn.dribbble.com/users/1162077/screenshots/3848914/programmer.gif"
              alt="About illustration"
              className="rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Right: Content */}
          <div className="mt-10 md:mt-0 md:w-7/12 lg:w-1/2">
            <h2 className="text-3xl font-extrabold text-gray-900 md:text-5xl leading-tight">
              React development crafted with <span className="text-orange-600">passion</span>
            </h2>

            <p className="mt-6 text-lg text-gray-700 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum omnis voluptatem
              accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde
              aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!
            </p>

            <p className="mt-4 text-gray-700 leading-relaxed">
              Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at?
              Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia.
            </p>

            <div className="mt-8">
              <a
                href="#"
                className="inline-block px-8 py-4 text-white font-semibold bg-orange-600 rounded-xl shadow-md hover:bg-orange-700 hover:shadow-lg transition"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
