import React from 'react';
const date  =new Date()
const year = date.getFullYear()
const Footer = () => {
  return (
    <footer >
      <footer className="bg-white dark:bg-gray-800">
        <div className="max-w-screen-xl p-4 py-6 mx-auto lg:py-16 md:p-8 lg:p-10">
          
          
          <div className="text-center">
            
            <span className="block text-sm text-center text-gray-500 dark:text-gray-400">© Feb 2023 -{year}  Built  by <p  className="hover:cursor-pointer  hover:text-purple-500/70 dark:text-purple-500">Christopher Alphonse </p>
            </span>
           
              
          
             
          
              
           
          </div>
        </div>
      </footer>
    </footer>
  );
}

export default Footer;
