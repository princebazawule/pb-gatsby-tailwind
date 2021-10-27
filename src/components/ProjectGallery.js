import { Link } from "gatsby"
import React, { useRef, useEffect, useState } from "react"
import { gsap } from "gsap"
import { StaticImage } from "gatsby-plugin-image"
import SvgUparrowIcon from "../components/icons/UparrowIcon"
import useWindowWidth from "../utils/useWindowWidth"
import '../styles/gallery.module.scss'

export default function ProjectGallery( { data }) {

    const projects = data.projects.nodes
    const width = useWindowWidth()

    const [position, setPosition] = useState({ x: 0, y: 0 })
    const galleryRef = useRef()

    const handlePositionChange = e => {
        setPosition({
        x: e.clientX / window.innerWidth - 0.5,
        y: e.clientY / window.innerHeight - 0.5,
        })
    }

    useEffect(() => {
        const galleryScroller = document.querySelector('.gallery-scroller');
        const galleryItem = document.querySelector('.gallery-scroller a');
        const galleryItemSize = width < 1280 ? (galleryItem ? galleryItem.clientWidth : null) : (galleryItem ? galleryItem.clientHeight : null)

        const scrollToNextPage = () => {
            width < 1280 ? galleryScroller.scrollBy(galleryItemSize, 0) :  galleryScroller.scrollBy(0, galleryItemSize)
        }
    
        const scrollToPrevPage = () => {
            width < 1280 ? galleryScroller.scrollBy(-galleryItemSize, 0) : galleryScroller.scrollBy(0, -galleryItemSize)
        }

        const btnNext = document.querySelector('.btn.next');
        const btnPrev = document.querySelector('.btn.prev');

        btnNext.addEventListener('click', scrollToNextPage);
        btnPrev.addEventListener('click', scrollToPrevPage);
    })
    
    useEffect(() => {
        gsap.to(galleryRef.current, {
        // rotationY: 2 * position.y,
        rotationX: 6 * position.x,
        // translateZ: 5,
        transformPerspective: 200,
        ease: 'power3',
        transformOrigin: "center",
        })
    })

    return (
        <section
            ref={galleryRef}
            className='gallery relative rounded-lg px-2 lg:px-2 3xl:px-10 mt-24 sm:mt-20 md:mt-24 lg:mt-32 xl:mt-0 xl:right-10 2xl:right-12 3xl:right-56 4xl:right-72 xl:absolute xl:top-1/2 xl:transform xl:-translate-y-1/2 xl:w-1/4 2xl:w-1/4 xl:h-3/5'
            onMouseMove={e => handlePositionChange(e)}
            role="button"
        >
            <div className='gallery-scroller flex flex-row xl:flex-col justify-start xl:content-center flex-nowrap w-full overflow-x-scroll xl:overflow-y-scroll h-full'>
                {projects.map(project => {
                    return (
                        <Link
                            to={`/projects/${project.frontmatter.slug}`}
                            key={project.id}
                            className="slide-item flex flex-col justify-center items-center rounded-lg ring-0 ring-white ring-opacity-0 flex-shrink-0 self-stretch w-9/12 md:w-2/4 h-56 mx-4 my-4 xl:w-10/12 xl:h-2/4 xl:mx-auto xl:my-4 bg-teal-500 overflow-hidden"
                        >
                            <div className="group project-item transition duration-300 scale-100 hover:scale-105 4xl:scale-110 4xl:hover:scale-y-125 flex flex-col justify-center items-center relative">

                                <div className='absolute text-center z-30 text-2xl 2xl:text-xl text-gray-900 dark:text-white font-bold transition duration-300'>
                                    <h4>{project.frontmatter.title}</h4>
                                    <p className='text-sm'>{project.frontmatter.stack}</p>
                                </div>
                                <div className="overlay absolute w-full h-full bg-emerald-100 dark:bg-blueGray-900 bg-opacity-90 dark:bg-opacity-90 group-hover:h-1/3 duration-200 z-20"></div>
                                <StaticImage
                                    src="https://picsum.photos/id/506/256/144"
                                    className="max-w-full z-10 group-hover:scale-150 transition duration-200"
                                    alt="profile - project"
                                    placeholder="blurred"
                                    layout="fixed"
                                    fit="cover"
                                    cropfocus="attention"
                                    width={720}
                                    height={480}
                                />
                            </div>
                        </Link>
                    )
                })}
            </div>

            <button className="btn prev flex flex-col justify-center items-center w-12 h-12 rounded-lg bg-gray-10 bg-opacity-10 absolute left-4 xl:left-1/2 xl:-translate-x-1/2 top-1/2 transform -translate-y-1/2 xl:-top-24 xl:translate-y-0">
                <span className='scale-125 -rotate-90 xl:rotate-0'><SvgUparrowIcon title="previous arrow" fill='#1E293B' /></span>
            </button>
            <button className="btn next flex flex-col justify-center items-center w-12 h-12 rounded-lg bg-gray-10 bg-opacity-10 absolute right-4 xl:left-1/2 xl:-translate-x-1/2 top-1/2 transform -translate-y-1/2 xl:top-full xl:translate-y-full xl:bottom-0 xl:rotate-90">
                <span className='scale-105 lg:scale-150 transform rotate-90 xl:rotate-90'><SvgUparrowIcon title="next arrow" fill='#1E293B' /></span>
            </button>
        </section>
    )
}