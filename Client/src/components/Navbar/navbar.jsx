import { ShowOnLogin, ShowOnLogout } from "../../components/protect/HiddenLink";

import React from "react";

const Navbar = () => {
  return (
    <nav className="rounded border-gray-200 bg-white px-2 py-2.5 dark:bg-gray-800 sm:px-4">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <a href="/" className="flex items-center">
          <span
            style={{ fontFamily: "Logo" }}
            className="self-center whitespace-nowrap text-4xl font-semibold text-gray-900"
          >
            Invent
          </span>
        </a>

        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-800 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:text-sm md:font-medium md:dark:bg-gray-800">
            <li>
              <ShowOnLogout>
                <button
                  className=" w-full rounded-sm border border-gray-300 bg-transparent py-4 px-9 font-semibold transition duration-200 ease-in-out hover:border-gray-400 hover:bg-gray-100 "
                  type="button"
                >
                  <a href="register" className="text-gray-900">
                    {" "}
                    Register
                  </a>
                </button>
              </ShowOnLogout>
            </li>

            <li>
              <ShowOnLogout>
                <button
                  className="w-full rounded-sm border border-indigo-200 bg-indigo-600  py-4 px-9 font-semibold text-white  transition duration-200 ease-in-out "
                  type="button"
                >
                  <a href="login"> Login</a>
                </button>
              </ShowOnLogout>
            </li>
            <li>
              <ShowOnLogin>
                <a
                  className="mr-5 block rounded py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white"
                  href="/dashboard"
                >
                  Dashboard
                </a>
              </ShowOnLogin>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
