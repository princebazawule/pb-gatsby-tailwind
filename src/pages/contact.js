import { graphql } from "gatsby"
import React, { useRef, useEffect, useState } from 'react'
import { gsap } from "gsap"
import Layout from "../components/Layout"
import Seo from '../components/Seo'
import { getIconComponentByName } from "../utils/icons-map"
import { OutboundLink } from "gatsby-plugin-google-gtag"
import "../styles/contact.module.scss"

export default function Contact({ data }) {

  const { siteUrl } = data.site.siteMetadata
  const { images } = data

  const profileImages = images.edges
  const selectDefaultImage = profileImages.filter(item => item.node.name === 'og-default')
  const defaultImageSrc = selectDefaultImage[0].node.childImageSharp.fluid.src

  // console.log(data)

  const [position, setPosition] = useState({ x: 0, y: 0 })
  const textRef = useRef()

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

  const { social } = data.site.siteMetadata
  const { shop } = data.site.siteMetadata
  const { play } = data.site.siteMetadata

  return (
    <>
      <Layout>
        <Seo title="Connect" keywords={[`connect`, `contact`, `social`, `social links`, `links`]} description={`Prince Bazawule - Connect with me on social media, request a collaboration, explore my music and shop my designs`} image={`${siteUrl}${defaultImageSrc}`} />

        <section 
          ref={textRef}
          className="xl:min-h-8/10 py-8 sm:py-6 xs:px-10 sm:px-14 md:px-16 lg:px-10 xl:px-4 2xl:px-8 flex flex-col justify-center sm:flex-initial cursor-default"
          onMouseMove={e => handlePositionChange(e)}
          role="region"
        >
          <h1 className="text text-blueGray-900 dark:text-blueGray-100 tracking-tighter sm:tracking-tight xl:tracking-tighter font-black text-4xl leading-normal xs:text-5xl xs:leading-normal sm:text-6xl sm:leading-normal md:text-7xl md:leading-normal lg:text-8xl lg:leading-normal xl:text-8xl xl:leading-normal 2xl:text-8xl 2xl:leading-normal 3xl:text-9xl 3xl:leading-normal 4xl:text-10xl 4xl:leading-normal">
            <span className="transition duration-300 ease-in-out bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
              Connect
            </span>
          </h1>

          <h2 className="mb-8 lg:mb-14 xs:mt-2 text text-blueGray-900 dark:text-blueGray-100 tracking-tighter sm:tracking-tight font-black text-2xl leading-none xs:text-3xl xs:leading-none sm:text-4xl sm:leading-none md:text-5xl md:leading-none lg:text-5xl lg:leading-none xl:text-5xl xl:leading-none 2xl:text-5xl 2xl:leading-none 3xl:text-6xl 3xl:leading-none 4xl:text-6xl 4xl:leading-none">
            let’s connect
          </h2>

          <div className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-between lg:w-11/12 2xl:w-10/12 3xl:w-10/12">
            <div className="contact-content lg:w-5/12">
              <p className="mb-8 text text-gray-800 dark:text-blueGray-100 tracking-tighter sm:tracking-tight font-normal text-xl leading-normal xs:text-2xl xs:leading-normal sm:text-2xl sm:leading-normal md:text-2xl md:leading-normal lg:text-2xl lg:leading-normal xl:text-2xl xl:leading-normal 2xl:text-3xl 2xl:leading-normal 3xl:text-3xl 3xl:leading-normal 4xl:text-3xl 4xl:leading-normal">
                <OutboundLink
                  href="mailto:prince.bazawule@gmail.com"
                  target='_blank'
                  rel='noreferrer'
                  title='email link'
                  className="text-emerald-500 dark:text-emerald-200 no-underline hover:text-emerald-800 dark:hover:text-emerald-50 hover:underline transition duration-300"
                >
                  <i>say hello</i>
                </OutboundLink>{" "}
                via email or connect on socials.
              </p>
              <p className="mb-8 text text-gray-800 dark:text-blueGray-100 tracking-tighter sm:tracking-tight font-normal text-xl leading-normal xs:text-2xl xs:leading-normal sm:text-2xl sm:leading-normal md:text-2xl md:leading-normal lg:text-2xl lg:leading-normal xl:text-2xl xl:leading-normal 2xl:text-3xl 2xl:leading-normal 3xl:text-3xl 3xl:leading-normal 4xl:text-3xl 4xl:leading-normal">
                Visit the online <i>shops</i> or <i>play</i> some mixes.
              </p>
            </div>

            <div className="contact-lists mt-10 lg:mt-0 flex flex-row sm:flex-wrap sm:justify-between text-gray-800 dark:text-blueGray-100 tracking-tighter sm:tracking-tight font-normal text-xl leading-normal xs:text-2xl xs:leading-normal sm:text-2xl sm:leading-normal md:text-2xl md:leading-normal lg:text-2xl lg:leading-normal xl:text-2xl xl:leading-normal 2xl:text-3xl 2xl:leading-normal 3xl:text-3xl 3xl:leading-normal 4xl:text-3xl 4xl:leading-normal">
              <div className="mb-8 mx-4 xs:mx-8 sm:mx-10 md:mx-12 lg:mx-6 xl:mx-8 3xl:mx-16 4xl:mx-20 flex flex-col justify-start items-center">
                <h4 className="font-bold mb-8 lg:text-3xl xl:text-4xl">
                  socials
                </h4>
                <ul className='flex flex-col justify-center items-center'>
                        {social.map(item => {
                            return (
                                <li 
                                    className='mb-6 scale-75'
                                    key={item.network}
                                >
                                    <OutboundLink href={item.link} className='social-icon transition text-sm scale-80' target='_blank' rel='noreferrer' title='social icon'>
                                        {getIconComponentByName(item.network, item.color)}
                                    </OutboundLink>
                                </li>
                            )
                        })} 
                    </ul>
              </div>

              <div className="mb-8 mx-4 xs:mx-8 sm:mx-10 md:mx-12 lg:mx-6 xl:mx-8 3xl:mx-16 4xl:mx-20 flex flex-col justify-start items-center">
                <h4 className="font-bold mb-8 lg:text-3xl xl:text-4xl">shop</h4>
                <ul className='flex flex-col justify-center items-center'>
                        {shop.map(item => {
                            return (
                                <li 
                                    className='mb-6 scale-75'
                                    key={item.network}
                                >
                                    <OutboundLink href={item.link} className='social-icon transition text-sm scale-80' target='_blank' rel='noreferrer' title='social icon'>
                                        {getIconComponentByName(item.network, item.color)}
                                    </OutboundLink>
                                </li>
                            )
                        })} 
                    </ul>
              </div>

              <div className="mb-8 mx-4 xs:mx-8 sm:mx-10 md:mx-12 lg:mx-6 xl:mx-8 3xl:mx-16 4xl:mx-20 flex flex-col justify-start items-center">
                <h4 className="font-bold mb-8 lg:text-3xl xl:text-4xl">play</h4>
                <ul className='flex flex-col justify-center items-center'>
                        {play.map(item => {
                            return (
                                <li 
                                    className='mb-6 scale-75'
                                    key={item.network}
                                >
                                    <OutboundLink href={item.link} className='social-icon transition text-sm scale-80' target='_blank' rel='noreferrer' title='social icon'>
                                        {getIconComponentByName(item.network, item.color)}
                                    </OutboundLink>
                                </li>
                            )
                        })} 
                    </ul>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  )
}

export const query = graphql`
  query ContactInfo {
    site {
      siteMetadata {
        social {
          artwork
          color
          link
          network
        }
        shop {
          artwork
          color
          link
          network
        }
        play {
          artwork
          color
          link
          network
        }
        siteUrl
      }
    }

    images: allFile(filter: {absolutePath: {regex: "/(images/profile)/"}}) {
      edges {
        node {
          id
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
          name
        }
      }
    }

    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`
