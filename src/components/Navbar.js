import { Link } from "gatsby"
import React, { useState, useEffect } from "react"
import { useLocation } from "@reach/router"
import cx from "classnames"
import SvgPrincebazawuleLogo from "./icons/PrincebazawuleLogo"
import { ThemeToggler } from 'gatsby-plugin-dark-mode'


export default function Navbar() {
  const location = useLocation()
  
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const pageContent = document.querySelectorAll('.page-content')[0]
    if(isOpen) {
      pageContent.classList.add('invisible')
    } else {
      pageContent.classList.remove('invisible')
    }
  })  

  return (
    <div className="p-4 xl:px-20 flex flex-wrap items-center justify-between z-50">
      <h1>
        <Link
          to="/"
          activeClassName="active"
        >
          <SvgPrincebazawuleLogo title="princebazawule logo" fill="#10B981" />
        </Link>

      </h1>
      <nav
        className={`nav w-full h-full top-0 left-0 bg-teal-50 dark:bg-coolGray-900 flex flex-col justify-center items-center transform transition duration-300 z-50 ${
          isOpen ? "fade-in " : "fade-out"
        }`}
      >
        <Link
          className={cx(
            "nav-item text-emerald-500 dark:text-blueGray-100 ease-in-out tracking-tight font-black text-5xl leading-normal sm:text-5xl md:text-6xl md:leading-normal lg:text-6xl lg:leading-normal xl:text-6xl 2xl:text-8xl 2xl:leading-normal hover:text-blueGray-700 dark:hover:text-emerald-200 focus:text-blueGray-700 dark:focus:text-emerald-200 transition duration-300",
            { 'text-blueGray-800 dark:text-emerald-300 pointer-events-none focus:text-current dark:focus:text-emerald-300': location.pathname === "/about" }
          )}
          to="/about"
          activeClassName="active"
        >
          about
        </Link>
        <Link
          className={cx(
            "nav-item text-emerald-500 dark:text-blueGray-100 ease-in-out tracking-tight font-black text-5xl leading-normal sm:text-5xl md:text-6xl md:leading-normal lg:text-6xl lg:leading-normal xl:text-6xl 2xl:text-8xl 2xl:leading-normal hover:text-blueGray-700 dark:hover:text-emerald-200 focus:text-blueGray-700 dark:focus:text-emerald-200 transition duration-300",
            { 'text-blueGray-800 dark:text-emerald-300 pointer-events-none focus:text-current dark:focus:text-emerald-300': location.pathname === "/designer" }
          )}
          to="/designer"
          activeClassName="active"
        >
          designs
        </Link>
        <Link
          className={cx(
            "nav-item text-emerald-500 dark:text-blueGray-100 ease-in-out tracking-tight font-black text-5xl leading-normal sm:text-5xl md:text-6xl md:leading-normal lg:text-6xl lg:leading-normal xl:text-6xl 2xl:text-8xl 2xl:leading-normal hover:text-blueGray-700 dark:hover:text-emerald-200 focus:text-blueGray-700 dark:focus:text-emerald-200 transition duration-300",
            { 'text-blueGray-800 dark:text-emerald-300 pointer-events-none focus:text-current dark:focus:text-emerald-300': location.pathname === "/developer" }
          )}
          to="/developer"
          activeClassName="active"
        >
          coding
        </Link>
        <Link
          className={cx(
            "nav-item text-emerald-500 dark:text-blueGray-100 ease-in-out tracking-tight font-black text-5xl leading-normal sm:text-5xl md:text-6xl md:leading-normal lg:text-6xl lg:leading-normal xl:text-6xl 2xl:text-8xl 2xl:leading-normal hover:text-blueGray-700 dark:hover:text-emerald-200 focus:text-blueGray-700 dark:focus:text-emerald-200 transition duration-300",
            { 'text-blueGray-800 dark:text-emerald-300 pointer-events-none focus:text-current dark:focus:text-emerald-300': location.pathname === "/dj" }
          )}
          to="/dj"
          activeClassName="active"
        >
          music
        </Link>
        <Link
          className={cx(
            "nav-item text-emerald-500 dark:text-blueGray-100 ease-in-out tracking-tight font-black text-5xl leading-normal sm:text-5xl md:text-6xl md:leading-normal lg:text-6xl lg:leading-normal xl:text-6xl 2xl:text-8xl 2xl:leading-normal hover:text-blueGray-700 dark:hover:text-emerald-200 focus:text-blueGray-700 dark:focus:text-emerald-200 transition duration-300",
            { 'text-blueGray-800 dark:text-emerald-300 pointer-events-none focus:text-current dark:focus:text-emerald-300': location.pathname.indexOf("/blog") !== -1  || location.pathname.indexOf("/post/") !== -1 }
          )}
          to="/blog"
          activeClassName="active"
        >
          blog
        </Link>
        <Link
          className={cx(
            "nav-item text-emerald-500 dark:text-blueGray-100 ease-in-out tracking-tight font-black text-5xl leading-normal sm:text-5xl md:text-6xl md:leading-normal lg:text-6xl lg:leading-normal xl:text-6xl 2xl:text-8xl 2xl:leading-normal hover:text-blueGray-700 dark:hover:text-emerald-200 focus:text-blueGray-700 dark:focus:text-emerald-200 transition duration-300",
            { 'text-blueGray-800 dark:text-emerald-300 pointer-events-none focus:text-current dark:focus:text-emerald-300': location.pathname === "/contact" }
          )}
          to="/contact"
          activeClassName="active"
        >
          contact
        </Link>
      </nav>

      <div className='flex flex-nowrap'>
        <ThemeToggler>
          {({ theme, toggleTheme }) => (
              <div className='theme-switcher mr-3 sm:mr-8 -mt-2 leading-none scale-150'>
                <input type="checkbox" id="switch" onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')} checked={theme === 'dark'} />
                <label tabIndex='0' htmlFor="switch"></label>
              </div>
          )}
        </ThemeToggler>
        
        <button
          title="menu link"
          className="menu-btn w-14 h-14 relative bg-transparent rounded z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="group block w-5 absolute left-6 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <span
              className={`block absolute h-1.5 w-9 rounded-sm bg-current transform transition duration-300 ease-in-out text-emerald-500 dark:text-emerald-300 group-hover:text-blueGray-900 dark:group-hover:text-blueGray-100 ${
                isOpen ? "rotate-45" : "-translate-y-2.5"
              }`}
            ></span>
            <span
              className={`block absolute h-1.5 w-7 rounded-sm bg-current transform transition duration-300 ease-in-out text-emerald-500 dark:text-emerald-300 group-hover:text-blueGray-900 dark:group-hover:text-blueGray-100 ${
                isOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block absolute h-1.5 w-9 rounded-sm bg-current transform transition duration-300 ease-in-out text-emerald-500 dark:text-emerald-300 group-hover:text-blueGray-900 dark:group-hover:text-blueGray-100 ${
                isOpen ? "-rotate-45" : "translate-y-2.5"
              }`}
            ></span>
          </div>
        </button>
      </div>
    </div>
  )
}
