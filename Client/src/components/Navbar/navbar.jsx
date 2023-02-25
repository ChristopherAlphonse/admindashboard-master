import React from 'react';

const navbar = () => {
  return (
    <div className="border-b border-paragraph">
      <header>
        <nav className="  px-4 py-5 lg:px-6">
          <div className="mx-auto flex max-w-screen-xxl flex-wrap items-center justify-between">
            <a href="/" className="flex items-center">
              <span className="self-center whitespace-nowrap text-3xl font-semibold  text-green-600">
                1NVENT
              </span>
            </a>
            <div className="flex items-center lg:order-2">
              <a
                href="#"
                className="ml-4 mr-2 flex transform items-center justify-center rounded-md border border-green-600 bg-white  px-5 py-2.5 font-medium uppercase text-green-700 shadow outline-none ring-offset-2 transition hover:-translate-y-1 hover:shadow-lg focus:shadow-lg focus:ring-2 focus:ring-green-600"
              >
                Log in
              </a>
              <a
                href="#"
                className="flex transform items-center justify-center rounded-md bg-green-700 px-5 py-2.5 font-medium uppercase text-white shadow outline-none ring-offset-2 transition hover:-translate-y-1 hover:bg-green-800 hover:shadow-lg focus:bg-green-800 focus:shadow-lg focus:ring-2 focus:ring-green-600 active:bg-green-900"
              >
                Get started
              </a>
              <button
                data-collapse-toggle="mobile-menu-2"
                type="button"
                className="ml-1 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 lg:hidden"
                aria-controls="mobile-menu-2"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <svg
                  className="hidden h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <div
              className="hidden w-full items-center justify-between lg:order-1 lg:flex lg:w-auto"
              id="mobile-menu-2"
            >
              <ul className="mt-4 flex flex-col font-medium lg:mt-0 lg:flex-row lg:space-x-8">
                <li>
                  <a
                    href="#"
                    className="block rounded bg-primary-700 py-2 pr-4 pl-3 text-white dark:text-white lg:bg-transparent lg:p-0 lg:text-primary-700"
                    aria-current="page"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="b block text-zinc-500 hover:text-green-600"
                  >
                    Company
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="b block text-zinc-500 hover:text-green-600"
                  >
                    Marketplace
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="b block text-zinc-500 hover:text-green-600"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="b block text-zinc-500 hover:text-green-600"
                  >
                    Team
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="b block text-zinc-500 hover:text-green-600"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default navbar;
