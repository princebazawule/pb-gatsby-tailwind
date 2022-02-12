import React, { useRef, useEffect, useState } from "react"
import { gsap } from "gsap"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { OutboundLink } from "gatsby-plugin-google-gtag"
import SvgUparrowIcon from "../components/icons/UparrowIcon"
import useWindowWidth from "../utils/useWindowWidth"
import '../styles/gallery.module.scss'

export default function AboutGallery( { images }) {
    const photos = images

    return (
        <section
            className='gallery relative rounded-lg px-2 lg:px-2 3xl:px-10 mt-8 sm:mt-20 md:mt-24 lg:mt-32 xl:mt-0 xl:right-10 2xl:right-12 3xl:right-56 4xl:right-72 xl:absolute xl:top-1/2 xl:transform xl:-translate-y-1/2 xl:w-1/4 2xl:w-1/4'
            role="region"
        >
            <div className='flex flex-row xl:flex-col justify-center items-center xl:content-center flex-nowrap w-full overflow-x-scroll xl:overflow-y-scroll h-full'>
                {photos.map(item => {

                    const image = getImage(item.node.childImageSharp)
                    const alt = item.name
                    
                    return (
                            <div 
                                key={item.name}
                                className="group project-item flex flex-col w-72 justify-center items-center relative mx-2 xl:mx-0 my-2">
                                {item && (
                                <GatsbyImage 
                                    image={image}
                                    alt={alt}
                                    placeholder="blurred"
                                    layout="constrained"
                                    width={750}
                                    height={422}
                                    className="z-10 transition duration-300 group-hover:scale-105 rounded-lg w-full"
                                />)}
                            </div>
                    )
                }) }
            </div>
        </section>
    )
}