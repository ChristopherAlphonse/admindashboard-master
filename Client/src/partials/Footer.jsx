import { AiFillGithub } from "react-icons/ai";
import { Link } from 'react-router-dom';
import React from 'react';

const Footer = () => {
  return (
    <footer >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
       
        <div className="md:flex md:items-center md:justify-between py-4 md:py-8 border-t ">
          
          <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
            <li className="ml-4">
              <Link to="#" className="flex justify-center items-center rounded-full shadow transition duration-150 ease-in-out" aria-label="Github">
                <AiFillGithub />
              </Link>
            </li>
          </ul>
          
          <div className="text-sm text-gray-600 mr-4">
            Made by <span><a className='text-sm text-blue-800' href="https://christopheralphonse.com">Christopher Alphonse</a></span>. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
