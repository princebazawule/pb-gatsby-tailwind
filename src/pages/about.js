import { graphql, Link } from 'gatsby'
import React, { useRef, useEffect, useState } from 'react'
import { gsap } from "gsap"
import Layout from "../components/Layout"
import Seo from '../components/Seo'
import { getIconComponentByName } from "../utils/icons-map"
import { OutboundLink } from "gatsby-plugin-google-gtag"
import "../styles/contact.module.scss"
import AboutGallery from "../components/AboutGallery"

export default function About({ data }) {

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
        rotationY: -2 * position.y,
        rotationX: 2 * position.x,
        transformPerspective: 1200,
        ease: 'power3',
        transformOrigin: "center",
        })
    })
    
    const aboutImages = data.aboutImages.edges

    const profileImages = data.images.edges
    const selectDefaultImage = profileImages.filter(item => item.node.name === 'og-default')
    const defaultImageSrc = selectDefaultImage[0].node.childImageSharp.fluid.src
    
    const { social } = data.site.siteMetadata
    const { cvLink } = data.site.siteMetadata
    const { siteUrl } = data.site.siteMetadata

  return (
    <>
      <Layout>
        <Seo title="About | Prince Bazawule" keywords={[`about me`, `about`, `ux designer`, `graphic designer`, `web developer`, `developer`]} description={`Prince Bazawule - A Graphic & UX designer, Web Developer & DJ`} image={`${siteUrl}${defaultImageSrc}`} url={`${siteUrl}/dj/`} />

        <section 
            ref={textRef}
            className="xl:min-h-8/10 py-8 sm:py-6 xs:px-10 sm:px-14 md:px-16 lg:px-10 xl:px-4 2xl:px-8 flex flex-col justify-center sm:flex-initial cursor-default"
            onMouseMove={e => handlePositionChange(e)}
            role="region"
        >
          <h1 className="text text-blueGray-900 dark:text-blueGray-100 tracking-tighter sm:tracking-tight xl:tracking-tighter font-black text-4xl leading-normal xs:text-5xl xs:leading-normal sm:text-6xl sm:leading-normal md:text-7xl md:leading-normal lg:text-8xl lg:leading-normal xl:text-8xl xl:leading-normal 2xl:text-8xl 2xl:leading-normal 3xl:text-9xl 3xl:leading-normal 4xl:text-10xl 4xl:leading-normal lg:w-11/12 2xl:w-10/12 3xl:w-10/12">
            <span className="transition duration-300 ease-in-out bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
              About
            </span>
          </h1>

          <h2 className="mb-8 lg:mb-14 xs:mt-2 text text-blueGray-900 dark:text-blueGray-100 tracking-tighter sm:tracking-tight font-black text-2xl leading-tight xs:text-3xl xs:leading-tighter sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight lg:text-5xl lg:leading-tight xl:text-5xl xl:leading-tight 2xl:text-5xl 2xl:leading-tight 3xl:text-6xl 3xl:leading-tight 4xl:text-6xl 4xl:leading-tight lg:w-9/12 2xl:w-8/12 3xl:w-7/12 4xl:w-7/12">
          Prince <span className="font-light">—</span> Graphic &amp; UX designer, Web Developer &amp; DJ
          </h2>

          <div className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-between lg:w-11/12 2xl:w-10/12 3xl:w-10/12">
            <div className="contact-content xl:w-3/4">
                <p className="mb-8 text text-gray-800 dark:text-blueGray-100 tracking-tighter sm:tracking-tight font-normal text-xl leading-normal xs:text-2xl xs:leading-normal sm:text-2xl sm:leading-normal md:text-2xl md:leading-normal lg:text-2xl lg:leading-normal xl:text-2xl xl:leading-normal 2xl:text-3xl 2xl:leading-normal 3xl:text-3xl 3xl:leading-normal 4xl:text-3xl 4xl:leading-normal">Prince Bazawule is a Graphic, UX Designer and Web Developer who believes in creatively harnessing the synergy between design and technology to address user challenges and create empowering experiences.</p>
                <p className="mb-8 text text-gray-800 dark:text-blueGray-100 tracking-tighter sm:tracking-tight font-normal text-xl leading-normal xs:text-2xl xs:leading-normal sm:text-2xl sm:leading-normal md:text-2xl md:leading-normal lg:text-2xl lg:leading-normal xl:text-2xl xl:leading-normal 2xl:text-3xl 2xl:leading-normal 3xl:text-3xl 3xl:leading-normal 4xl:text-3xl 4xl:leading-normal">He has spent over 15 years freelancing, being part of small and large teams, working in advertising agencies, startups and on projects of various sizes. This experience has greatly enhanced his design and technical abilities  — A major driver is working with the user to understand their challenge and then creating efficient solutions.</p>
                <p className="mb-8 text text-gray-800 dark:text-blueGray-100 tracking-tighter sm:tracking-tight font-normal text-xl leading-normal xs:text-2xl xs:leading-normal sm:text-2xl sm:leading-normal md:text-2xl md:leading-normal lg:text-2xl lg:leading-normal xl:text-2xl xl:leading-normal 2xl:text-3xl 2xl:leading-normal 3xl:text-3xl 3xl:leading-normal 4xl:text-3xl 4xl:leading-normal">Prince has created solutions for socially impactful clients including Sagicor, InvestBarbados & CaribbeanExport. He is co-founder of PixlD Inc, a boutique design & development agency, and multiple ADDY award winner.</p>
                <p className="mb-8 text text-gray-800 dark:text-blueGray-100 tracking-tighter sm:tracking-tight font-normal text-xl leading-normal xs:text-2xl xs:leading-normal sm:text-2xl sm:leading-normal md:text-2xl md:leading-normal lg:text-2xl lg:leading-normal xl:text-2xl xl:leading-normal 2xl:text-3xl 2xl:leading-normal 3xl:text-3xl 3xl:leading-normal 4xl:text-3xl 4xl:leading-normal">With a background in Plant Genetics, he is a lifelong-learner who keeps updating his skills to match the ever-evolving design and web industries and is currently pursuing the Google UX Design Certification.</p>
                <p className="mb-8 text text-gray-800 dark:text-blueGray-100 tracking-tighter sm:tracking-tight font-normal text-xl leading-normal xs:text-2xl xs:leading-normal sm:text-2xl sm:leading-normal md:text-2xl md:leading-normal lg:text-2xl lg:leading-normal xl:text-2xl xl:leading-normal 2xl:text-3xl 2xl:leading-normal 3xl:text-3xl 3xl:leading-normal 4xl:text-3xl 4xl:leading-normal">Prince lives in Barbados, enjoys music, and DJs as often as he can.</p>
            
                <div className="contact-content lg:w-5/12 mt-16">
                    <p className="mb-6 text text-gray-800 dark:text-blueGray-100 tracking-tighter sm:tracking-tight font-normal text-xl leading-normal xs:text-2xl xs:leading-normal sm:text-2xl sm:leading-normal md:text-2xl md:leading-normal lg:text-2xl lg:leading-normal xl:text-2xl xl:leading-normal 2xl:text-3xl 2xl:leading-normal 3xl:text-3xl 3xl:leading-normal 4xl:text-3xl 4xl:leading-normal">
                        Contact {" "}
                        <OutboundLink
                        href="mailto:prince.bazawule@gmail.com"
                        target='_blank'
                        rel='noreferrer'
                        title='email link'
                        className="text-emerald-500 dark:text-emerald-200 no-underline hover:text-emerald-800 dark:hover:text-emerald-50 hover:underline transition duration-300"
                        >
                        <i>via email</i>
                        </OutboundLink>{" "}
                        .
                    </p>
                    <p className="text text-gray-800 dark:text-blueGray-100 tracking-tighter sm:tracking-tight font-normal text-xl leading-normal xs:text-2xl xs:leading-normal sm:text-2xl sm:leading-normal md:text-2xl md:leading-normal lg:text-2xl lg:leading-normal xl:text-2xl xl:leading-normal 2xl:text-3xl 2xl:leading-normal 3xl:text-3xl 3xl:leading-normal 4xl:text-3xl 4xl:leading-normal">
                        On socials:
                        <span className='flex flex-row justify-start items-start pt-4'>
                            {social.map(item => {
                                return (
                                    <span 
                                        className='mb-6 scale-75 mx-1 xl:mx-2'
                                        key={item.network}
                                    >
                                        <OutboundLink href={item.link} className='social-icon transition text-sm scale-80' target='_blank' rel='noreferrer' title='social icon'>
                                            {getIconComponentByName(item.network, item.color)}
                                        </OutboundLink>
                                    </span>
                                )
                            })} 
                        </span>
                    </p>
                    <p className="text text-gray-800 dark:text-blueGray-100 tracking-tighter sm:tracking-tight font-normal text-xl leading-normal xs:text-2xl xs:leading-normal sm:text-2xl sm:leading-normal md:text-2xl md:leading-normal lg:text-2xl lg:leading-normal xl:text-2xl xl:leading-normal 2xl:text-3xl 2xl:leading-normal 3xl:text-3xl 3xl:leading-normal 4xl:text-3xl 4xl:leading-normal">
                        View {" "}
                        <OutboundLink
                          href={cvLink}
                          target='_blank'
                          rel='noreferrer'
                          title='cv link'
                          className="text-emerald-500 dark:text-emerald-200 no-underline hover:text-emerald-800 dark:hover:text-emerald-50 hover:underline transition duration-300"
                        >
                        <i>CV</i>
                        </OutboundLink>{" "}
                        .
                    </p>
                </div>

                <div className="inline-block">
                  <Link to="/contact">
                    <button 
                      className="inline-flex mt-8 sm:mt-16 md:mt-14 lg:mt-16 xl:mt-12 2xl:mt-24 transition duration-500 ease-in-out bg-blueGray-900 hover:bg-emerald-100 dark:bg-emerald-300 dark:hover:bg-emerald-700 text-blueGray-100 hover:text-blueGray-900 dark:text-blueGray-900 dark:hover:text-blueGray-100 text-2xl xs:text-3xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl 2xl:text-5xl 3xl:text-5xl font-bold rounded-full border-0 py-2 px-8 lg:px-12 lg:tracking-tight xl:px-12 xl:tracking-tight 2xl:px-12 2xl:tracking-tight 3xl:px-12 3xl:tracking-tight focus:ring-6 focus:ring-emerald-500 focus:ring-opacity-50">
                      let's connect
                    </button>
                  </Link>
                </div>
            </div>
          </div>
        </section>

        <AboutGallery aboutImages={aboutImages} />
      </Layout>
    </>
  )
}

export const query = graphql`
  query AboutPageInfo {
    aboutImages: allFile(filter: {absolutePath: {regex: "/(images/about)/"}}) {
      edges {
        node {
          id
          childImageSharp {
            gatsbyImageData(
              width: 200
              placeholder: BLURRED
              blurredOptions: {toFormat: NO_CHANGE}
              formats: [AUTO, WEBP, AVIF]
            )
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
          name
        }
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
        social {
          artwork
          color
          link
          network
        }
        cvLink
        siteUrl
      }
    }

  }
`
