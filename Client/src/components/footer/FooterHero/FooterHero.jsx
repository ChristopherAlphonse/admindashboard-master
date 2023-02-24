import React from "react";

const Footer = () => {
  return (
    <footer className=" p-7">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-sm font-semibold text-black">
          &copy; 2023 INVENT. All Rights Reserved.
        </div>
        <div>
          <ul className="flex space-x-6">
            <li>
              <a
                href="#"
                className="text-gray-900 transition duration-200 hover:text-blue-600"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-900 transition duration-200 hover:text-red-900"
              >
                YouTube
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-900 transition duration-200 hover:text-[#ff0050]"
              >
                TikTok
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-900 transition duration-200 hover:text-yellow-400"
              >
                SnapChat
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
