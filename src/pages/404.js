import { Link } from "gatsby"
import React, { useRef, useEffect, useState } from 'react'
import { gsap } from "gsap"
import Layout from '../components/Layout'

export default function NotFound() {

    const [position, setPosition] = useState({ x: 0, y: 0 })
    const textRef = useRef()
    const listRef = useRef()

    const handlePositionChange = e => {
        setPosition({
          x: e.clientX / window.innerWidth - 0.5,
          y: e.clientY / window.innerHeight - 0.5,
        })
    }

    useEffect(() => {
        gsap.to(textRef.current, {
          rotationY: -5 * position.y,
          rotationX: -5 * position.x,
          transformPerspective: 700,
          ease: 'power3',
          transformOrigin: "center",
        })
    })

    return (
        <>
            <Layout>
                <div 
                    // className="flex flex-col sm:flex-grow 3xl:w-11/12 4xl:w-10/12 3xl:mx-auto justify-between flex-1"
                    className="flex flex-col sm:flex-grow 3xl:w-full justify-center flex-1"
                >
                    <section 
                        ref={textRef}
                        // className="xl:min-h-8/10 py-8 sm:py-6 xs:px-10 sm:px-14 md:px-16 lg:px-20 xl:px-4 2xl:px-8 flex flex-col justify-center sm:flex-initial cursor-default"
                        className="xl:min-h-8/10 py-8 sm:py-6 xs:px-10 sm:px-14 md:px-16 lg:px-20 xl:px-4 2xl:px-8 flex flex-col justify-center sm:flex-initial cursor-default"
                        onMouseMove={e => handlePositionChange(e)}
                        role="button"
                    >
                            <h1 className="selection:bg-opacity-0 text text-gray-900 dark:text-blueGray-100 tracking-tighter sm:tracking-tight xl:tracking-tighter font-black text-7xl leading-normal xs:text-8xl xs:leading-normal sm:text-9xl sm:leading-normal md:text-11xl md:leading-normal lg:text-11xl lg:leading-normal xl:text-11xl xl:leading-normal 2xl:text-11xl 2xl:leading-normal 3xl:text-13xl 3xl:leading-normal 4xl:text-14xl 4xl:leading-normal">
                                <span className='transition duration-300 ease-in-out bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500'>
                                    Ooops!
                                </span>
                            </h1>

                            <h2 className="mb-8 lg:mb-14 xs:mt-2 text text-gray-900 dark:text-blueGray-100 tracking-tighter sm:tracking-tight font-black text-3xl leading-none xs:text-4xl xs:leading-none sm:text-5xl sm:leading-none md:text-6xl md:leading-none lg:text-6xl lg:leading-none xl:text-6xl xl:leading-none 2xl:text-6xl 2xl:leading-none 3xl:text-7xl 3xl:leading-none 4xl:text-7xl 4xl:leading-none">
                                not sure what happened there...
                            </h2>
                            
                            <p className="mb-8 text text-gray-800 dark:text-blueGray-100 tracking-tighter sm:tracking-tight font-normal text-xl leading-normal xs:text-2xl xs:leading-normal sm:text-2xl sm:leading-normal md:text-2xl md:leading-normal lg:text-2xl lg:leading-normal xl:text-2xl xl:leading-normal 2xl:text-3xl 2xl:leading-normal 3xl:text-3xl 3xl:leading-normal 4xl:text-3xl 4xl:leading-normal">
                                no worries, I gotcha' - let's go back to the <Link to="/"><button className="flex mt-4 sm:mt-8 md:mt-14 lg:mt-8 xl:mt-12 transition duration-500 ease-in-out text-white dark:text-gray-900 text-2xl xs:text-3xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-5xl 3xl:text-5xl font-bold rounded-full bg-green-500 dark:bg-green-400 dark:hover:bg-green-700 border-0 py-2 px-8 lg:px-12 lg:tracking-tight xl:px-12 xl:tracking-tight 2xl:px-12 2xl:tracking-tight 3xl:px-12 3xl:tracking-tight focus:outline-none focus:ring-6 focus:ring-green-500 focus:ring-opacity-50 hover:bg-green-800 dark:hover:text-blueGray-100">homepage</button></Link>.
                            </p>
                    </section>
                </div>
            </Layout>
        </>
    )
}
