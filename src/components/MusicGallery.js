import React, { useRef, useEffect, useState } from "react"
import { gsap } from "gsap"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { OutboundLink } from "gatsby-plugin-google-gtag"
import SvgUparrowIcon from "../components/icons/UparrowIcon"
import useWindowWidth from "../utils/useWindowWidth"
import '../styles/gallery.module.scss'

export default function MusicGallery( { data }) {

    const play = data.music.nodes

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
        rotationY: 6 * position.y,
        rotationX: 6 * position.x,
        translateZ: 5,
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
                {play.map(item => {

                    const image = getImage(item.frontmatter.thumb.childImageSharp)
                    const alt = item.frontmatter.title

                    // console.log(image)
                    
                    return (
                        <OutboundLink
                            href={item.frontmatter.link}
                            target='_blank'
                            rel='noreferrer'
                            key={item.frontmatter.slug}
                            className="slide-item flex flex-col justify-center items-center rounded-lg ring-0 ring-white ring-opacity-0 flex-shrink-0 self-stretch w-9/12 md:w-2/4 h-56 mx-4 my-4 xl:w-10/12 xl:h-2/4 xl:mx-auto xl:my-4 bg-teal-500 overflow-hidden"
                        >
                            <div className="group project-item flex flex-col justify-center items-center relative">

                                <div className='absolute text-center z-30 text-xl text-gray-900 dark:text-white opacity-0 group-hover:opacity-100 font-bold transition duration-300'>
                                    <h4>{item.frontmatter.title}</h4>
                                    <p className='mt-2 text-base font-normal italic'>{item.frontmatter.stack}</p>
                                </div>
                                <div className="overlay absolute w-full h-full bg-emerald-100 dark:bg-blueGray-900 bg-opacity-0 dark:bg-opacity-0 group-hover:bg-opacity-90 group-hover:h-1/3 transition duration-300 z-20"></div>
                                {item && (
                                <GatsbyImage 
                                    image={image}
                                    alt={alt}
                                    placeholder="blurred"
                                    layout="constrained"
                                    width={750}
                                    height={422}
                                    className="z-10 transition duration-300 w-full h-64 xl:h-96 scale-105 group-hover:scale-125"
                                />)}
                            </div>
                        </OutboundLink>
                    )
                }) }
            </div>

            <button className="btn z-30 prev -ml-10 flex flex-col justify-center items-center w-12 h-12 rounded-lg bg-gray-10 bg-opacity-10 absolute left-4 xl:left-1/2 xl:-translate-x-1/2 top-1/2 transform -translate-y-1/2 xl:-top-24 xl:translate-y-0">
                <span className='scale-125 lg:scale-150 -rotate-90 xl:rotate-0'><SvgUparrowIcon title="previous arrow" fill='#1E293B' /></span>
            </button>
            <button className="btn z-30 next ml-36 lg:ml-0 flex flex-col justify-center items-center w-12 h-12 rounded-lg bg-gray-10 bg-opacity-10 absolute right-4 xl:left-1/2 xl:-translate-x-1/2 top-1/2 transform -translate-y-1/2 xl:top-full xl:translate-y-full xl:bottom-0 xl:rotate-90">
                <span className='scale-125 lg:scale-150 transform rotate-90 xl:rotate-90 translate-x-10 md:translate-x-14 lg:translate-x-0'><SvgUparrowIcon title="next arrow" fill='#1E293B' /></span>
            </button>
        </section>
    )
}