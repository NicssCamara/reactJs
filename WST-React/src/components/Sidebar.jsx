import React, { Component } from 'react'
import { useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

function Sidebar() {
    const location = useLocation();
    const activeClass = 'rounded-md bg-blue-600 text-white p-2';

    const NavLinkFunction = () => {
        const sideBarArray = new Map([
          ['Dashboard', '/dashboard'],
          ['Admin', '/admin'],
          ['Students', '/students'],
        ]);
        
  
        return (
            <ul className="flex flex-col py-4 space-y-1">
                {[...sideBarArray].map(([key, value]) => (
                    <li key={value}>
                        <NavLink
                            exact
                            to={value}
                            className={`relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-300 hover:rounded-md dark:hover:bg-blue-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-blue-800 pr-6 ${location.pathname === value ? activeClass : ''}`}
                        >
                            {getIcon(key)} 
                            <span className="ml-4 text-sm tracking-wide truncate text-white"> 
                                {key}
                            </span>
                        </NavLink>
                    </li>
                ))}
            </ul>
        );
     }

    // Function to return appropriate icon based on key
    const getIcon = (key) => {
        switch (key) {
            case 'Dashboard':
                return (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-white">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0 1 20.25 6v12A2.25 2.25 0 0 1 18 20.25H6A2.25 2.25 0 0 1 3.75 18V6A2.25 2.25 0 0 1 6 3.75h1.5m9 0h-9" />
                </svg>

                
                );
            case 'Admin':
                return (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-white">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" />
                </svg>
                
                );
            case 'Students':
                return (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-white">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>
                
                );
            default:
                return null;
        }
    }
     
     return (
      <aside className="bg-blue-800 w-64 px-4 py-8">
        <h2 className="text-lg text-white font-semibold mb-4">Sidebar</h2>
        {NavLinkFunction()}
      </aside>
    );
}

export default Sidebar;
