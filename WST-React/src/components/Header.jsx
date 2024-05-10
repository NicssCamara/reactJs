import React from 'react';

export default function Header() {
  return (
    <header className="bg-blue-900 text-white py-2 flex justify-between">
      <div className="flex items-center justify-start md:justify-center pl-3 w-14 md:w-64 h-14 dark:bg-gray-800 border-none">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        </svg>
        <span className="hidden md:block font-bold text-lg ml-3">Header</span>
      </div>

      <ul className="flex items-center">
        <li className="mr-6">
          <a href="#" className="flex items-center hover:text-blue-300 text-white"> 
            <span className="inline-flex mr-1">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
            </span>
            Logout
          </a>
        </li>
      </ul>
    </header>
  );
}
