import React, { useEffect } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import '../styles/global.scss'

export default function Layout({ children }) {
    
    useEffect(() => {
          const replacers = document.querySelectorAll('[data-replace]')

          Array.from(replacers).forEach(NODE => {
            let replaceClasses = JSON.parse(NODE.dataset.replace.replace(/'/g, '"'))
    
            Object.keys(replaceClasses).forEach(function(key) {
              NODE.classList.remove(key)
              NODE.classList.add(replaceClasses[key])
            })
          })
      }, [])
      
    return (
        <>
        {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
          <div className='selection:bg-yellow-100 selection:text-blueGray-800 dark:selection:bg-teal-200 dark:selection:text-blueGray-900 bg-teal-50 bg-opacity-80 dark:bg-coolGray-900 min-h-full flex flex-col justify-between m-0 p-0 opacity-0 transition-opacity duration-500' data-replace='{ "opacity-0" : "opacity-100" }'>
              <Navbar />
              <div className="w-11/12 mx-auto flex-1 flex flex-col">
                  { children }
              </div>
              <Footer />
          </div>
        </>
    )
}
