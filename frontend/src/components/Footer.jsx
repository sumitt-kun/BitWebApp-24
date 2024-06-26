import React, { useState } from "react";
import { Link } from "react-router-dom";
function Footer() {

  return (
    <div className="grid bg-red-700 p-16 text-white md:grid-cols-3">
      <div className="text-center leading-10">
        <p>All Rights Reserved</p>
        <p>Copyright &copy; 2024</p>
        <a href="https://bitacademicapp.ac.in">
          bitacademicapp.ac.in
        </a>
      </div>
      <div>
        <ul className="text-center leading-10">
          <li>
            <button
              className="text-white hover:text-gray-300 focus:outline-none"
            >
                <Link to='/'> 
              Home
              </Link>
            </button>
          </li>
          <li>
            <button
              className="text-white hover:text-gray-300 focus:outline-none"
            >
                 <Link to='sg'> 
              Signup
              </Link>
            </button>
          </li>
          <li>
            <button
              className="text-white hover:text-gray-300 focus:outline-none"
            >
              Features
            </button>
          </li>
        </ul>
      </div>
      <div className="flex flex-col gap-3 text-center">
        <p>Your Review down here</p>
        <input
          type="text"
          placeholder="Name"
          className="rounded-md border px-4 py-2 text-center"
          autoComplete="Name"
          style={{color:'black'}}
        />
        <input
          type="text"
          placeholder="Enter your review"
          className="h-20 rounded-md border px-4 py-2 text-center"
          style={{color:'black'}}
        />
        <button
          className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default Footer;
