import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-300">
      <div className="mx-auto w-full max-w-screen-xl p-6 lg:py-10">
        {/* Top Section */}
        <div className="md:flex md:justify-between md:items-center border-b border-gray-700 pb-8 mb-8">
          {/* Logo */}
          <div className="flex items-center justify-center md:justify-start mb-6 md:mb-0">
            <Link to="/" className="flex items-center space-x-2">
              <img
                src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                className="h-14"
                alt="Logo"
              />
              <span className="text-white text-xl font-bold">MyBrand</span>
            </Link>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 text-sm">
            <div>
              <h2 className="mb-4 font-semibold text-white uppercase tracking-wider">
                Resources
              </h2>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="hover:text-orange-400 transition">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-orange-400 transition">
                    About
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-4 font-semibold text-white uppercase tracking-wider">
                Follow us
              </h2>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://github.com/hiteshchoudhary"
                    className="hover:text-orange-400 transition"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github
                  </a>
                </li>
                <li>
                  <Link to="/" className="hover:text-orange-400 transition">
                    Discord
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-4 font-semibold text-white uppercase tracking-wider">
                Legal
              </h2>
              <ul className="space-y-2">
                <li>
                  <Link to="#" className="hover:text-orange-400 transition">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:text-orange-400 transition">
                    Terms &amp; Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="sm:flex sm:items-center sm:justify-between text-sm">
          <span className="block text-center sm:text-left mb-4 sm:mb-0">
            © 2025{' '}
            <a
              href="https://hiteshchoudhary.com/"
              className="text-orange-400 hover:underline"
            >
              Anjali
            </a>{' '}
            . All Rights Reserved.
          </span>

          {/* Social Icons */}
          <div className="flex justify-center space-x-6 text-gray-400">
            <a href="#" className="hover:text-orange-400 transition">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="hover:text-orange-400 transition">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="hover:text-orange-400 transition">
              <i className="fab fa-github"></i>
            </a>
            <a href="#" className="hover:text-orange-400 transition">
              <i className="fab fa-dribbble"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
