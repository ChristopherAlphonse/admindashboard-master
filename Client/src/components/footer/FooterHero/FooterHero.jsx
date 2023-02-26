import React from 'react';

const date = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="rounded-lg bg-white p-4 shadow  md:flex md:items-center md:justify-between md:p-6">
      <span className="text-sm text-gray-500 dark:text-gray-400 sm:text-center">
        © 1640- {date} {''}
        All Rights Reserved.
      </span>
      <ul className="mt-3 flex flex-wrap items-center text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
          <a
            href="#"
            className="mr-4 text-zinc-500 hover:text-green-600 md:mr-6 "
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#"
            className="mr-4 text-zinc-500 hover:text-green-600 md:mr-6"
          >
            Privacy Policy
          </a>
        </li>
        <li>
          <a
            href="#"
            className="mr-4 text-zinc-500 hover:text-green-600 md:mr-6"
          >
            Licensing
          </a>
        </li>
        <li>
          <a href="#" className=" text-zinc-500 hover:text-green-600">
            Contact
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
