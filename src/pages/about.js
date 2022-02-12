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
    const images = data.images.edges
    const { social } = data.site.siteMetadata
    const { cvLink } = data.site.siteMetadata

  return (
    <>
      <Layout>
        <Seo title="About | Prince Bazawule" keywords={[`about me`, `about`, `ux designer`, `graphic designer`, `web developer`, `developer`]} description={`Prince Bazawule - A Graphic & UX designer, Web Developer & DJ`} />

        <section 
          className="xl:min-h-8/10 py-8 sm:py-6 xs:px-10 sm:px-14 md:px-16 lg:px-10 xl:px-4 2xl:px-8 flex flex-col justify-center sm:flex-initial cursor-default"
          role="region"
        >
          <h1 className="text text-blueGray-900 dark:text-blueGray-100 tracking-tighter sm:tracking-tight xl:tracking-tighter font-black text-4xl leading-normal xs:text-5xl xs:leading-normal sm:text-6xl sm:leading-normal md:text-7xl md:leading-normal lg:text-8xl lg:leading-normal xl:text-8xl xl:leading-normal 2xl:text-8xl 2xl:leading-normal 3xl:text-9xl 3xl:leading-normal 4xl:text-10xl 4xl:leading-normal lg:w-11/12 2xl:w-10/12 3xl:w-10/12">
            <span className="transition duration-300 ease-in-out bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
              About
            </span>
          </h1>

          <h2 className="mb-8 lg:mb-14 xs:mt-2 text text-blueGray-900 dark:text-blueGray-100 tracking-tighter sm:tracking-tight font-black text-2xl leading-none xs:text-3xl xs:leading-none sm:text-4xl sm:leading-none md:text-5xl md:leading-none lg:text-5xl lg:leading-none xl:text-5xl xl:leading-none 2xl:text-5xl 2xl:leading-none 3xl:text-6xl 3xl:leading-none 4xl:text-6xl 4xl:leading-none lg:w-10/12 2xl:w-8/12 3xl:w-8/12 4xl:w-7/12">
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
                    <p className="mb-8 text text-gray-800 dark:text-blueGray-100 tracking-tighter sm:tracking-tight font-normal text-xl leading-normal xs:text-2xl xs:leading-normal sm:text-2xl sm:leading-normal md:text-2xl md:leading-normal lg:text-2xl lg:leading-normal xl:text-2xl xl:leading-normal 2xl:text-3xl 2xl:leading-normal 3xl:text-3xl 3xl:leading-normal 4xl:text-3xl 4xl:leading-normal">
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
                        <span className='flex flex-row justify-start items-start'>
                            {social.map(item => {
                                return (
                                    <span 
                                        className='mb-6 scale-50 mx-1'
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
            </div>
          </div>
        </section>

        <AboutGallery images={images} />
      </Layout>
    </>
  )
}

export const query = graphql`
  query AboutPageInfo {
    images: allFile(filter: {absolutePath: {regex: "/(images/about)/"}}) {
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
