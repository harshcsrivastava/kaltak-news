import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import kaltakLogo from '../assets/logo.png'
import '../app.css'

function Header() {
  return (
    <header className='shadow sticky z-50 top-0'>
         <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-center gap-4 lg:gap-0 lg:justify-between items-center mx-auto max-w-screen-xl">
                
                  <Link to="/" className='w-32 '>
                    <img src={kaltakLogo} alt="kaltak-logo" />
                  </Link>
                  <div>
                    <ul className='flex gap-8 '>
                      <li>
                        <NavLink
                          to = "/"
                          className={({isActive}) =>
                              `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-yellow-500" : "text-black"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                          }
                        >
                          Home
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to = "/headlines"
                          className={({isActive}) =>
                              `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-yellow-500" : "text-black"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                          }
                        >
                          Headlines
                        </NavLink>
                      </li><li>
                        <NavLink
                          to = "/business"
                          className={({isActive}) =>
                              `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-yellow-500" : "text-black"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                          }
                        >
                          Business
                        </NavLink>
                      </li><li>
                        <NavLink
                          to = "/tech-crunch"
                          className={({isActive}) =>
                              `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-yellow-500" : "text-black"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                          }
                        >
                          Tech Crunch
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                  <div className='flex items-center justify-between gap-4'>
                    <Link 
                    to="https://www.linkedin.com/in/harshcsrivastava/"
                    target='_blank' 
                    className='logo'>
                      <img src="https://i.pinimg.com/originals/b2/f8/28/b2f828513f21444829a619ce563d4d4e.png" alt="linked-logo" className='icon linkedin'/>
                    </Link>
                    <Link 
                    to="https://github.com/harshcsrivastava" 
                    target='_blank'
                    className='logo'>
                      <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="github-logo" className='icon'/>
                    </Link>
                  </div>
            </div>
        </nav>

    </header>
  )
}

export default Header