import { graphql } from "gatsby"
import React, { useRef, useEffect, useState } from 'react'
import { gsap } from "gsap"
import { OutboundLink } from "gatsby-plugin-google-gtag"
import Layout from '../../components/Layout'
import Seo from '../../components/Seo'
import DesignGallery from '../../components/DesignGallery'
import '../../styles/designer.module.scss'

export default function Designer({ data }) {

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

    const openLink = () => {
      window.open("https://dribbble.com/princebazawule")
      // window.open("https://society6.com/princebazawule")
    }

    return (
        <>
            <Layout>
              <Seo title="Designer" keywords={[`ui design`, `digital art`, `graphic design`, `design`, `art`, `artist`]} />

              <section 
                ref={textRef}
                className="xl:min-h-8/10 py-8 sm:py-6 xs:px-10 sm:px-14 md:px-16 lg:px-20 xl:px-4 2xl:px-8 flex flex-col justify-center sm:flex-initial cursor-default xl:w-3/4"
                onMouseMove={e => handlePositionChange(e)}
                role="region"
              >
                    <h1 className="text text-blueGray-900 dark:text-blueGray-100 tracking-tighter sm:tracking-tight xl:tracking-tighter font-black text-4xl xs:text-5xl leading-relaxed xs:leading-normal sm:text-6xl sm:leading-normal md:text-7xl md:leading-normal lg:text-8xl lg:leading-normal xl:text-8xl xl:leading-normal 2xl:text-8xl 2xl:leading-normal 3xl:text-9xl 3xl:leading-normal 4xl:text-10xl 4xl:leading-normal">
                        <span className='transition duration-300 ease-in-out bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500'>
                            Designer
                        </span>
                    </h1>

                    <h2 className="mb-8 lg:mb-14 mt-4 xs:mt-2 text text-blueGray-900 dark:text-blueGray-100 tracking-tighter sm:tracking-tight font-black text-2xl leading-tight xs:text-3xl xs:leading-none sm:text-4xl sm:leading-none md:text-5xl md:leading-none lg:text-5xl lg:leading-none xl:text-5xl xl:leading-none 2xl:text-5xl 2xl:leading-none 3xl:text-6xl 3xl:leading-none 4xl:text-6xl 4xl:leading-none">
                        i am a multi-disciplinary designer
                    </h2>
                    
                    <p className="mb-8 text text-gray-800 dark:text-blueGray-100 tracking-tighter sm:tracking-tight font-normal text-xl leading-normal xs:text-2xl xs:leading-normal sm:text-2xl sm:leading-normal md:text-2xl md:leading-normal lg:text-2xl lg:leading-normal xl:text-2xl xl:leading-normal 2xl:text-3xl 2xl:leading-normal 3xl:text-3xl 3xl:leading-normal 4xl:text-3xl 4xl:leading-normal">
                        I love to explore UIs, digital art and have been happy to create <span className='hidden xl:block leading-3'><br /></span> award-winning work for clients.
                    </p>
                    <p className="mb-8 text text-gray-800 dark:text-blueGray-100 tracking-tighter sm:tracking-tight font-normal text-xl leading-normal xs:text-2xl xs:leading-normal sm:text-2xl sm:leading-normal md:text-2xl md:leading-normal lg:text-2xl lg:leading-normal xl:text-2xl xl:leading-normal 2xl:text-3xl 2xl:leading-normal 3xl:text-3xl 3xl:leading-normal 4xl:text-3xl 4xl:leading-normal">
                        Explore my designs on <OutboundLink href="https://dribbble.com/princebazawule" target='_blank' rel='noreferrer' title='external link' className='text-blueGray-900 dark:text-emerald-200 no-underline hover:text-emerald-500 dark:hover:text-emerald-300 hover:underline transition duration-300'><i>dribbble</i></OutboundLink> &amp; <OutboundLink href="https://behance.net/princebazawule" target='_blank' rel='noreferrer' title='external link' className='text-blueGray-900 dark:text-emerald-200 no-underline hover:text-emerald-500 dark:hover:text-emerald-300 hover:underline transition duration-300'><i>behance</i></OutboundLink> or shop them on <OutboundLink href="https://society6.com/princebazawule" target='_blank' rel='noreferrer' title='external link ' className='text-blueGray-900 dark:text-emerald-200 no-underline hover:text-emerald-500 dark:hover:text-emerald-300 hover:underline transition duration-300'><i>society6</i></OutboundLink> &amp; <OutboundLink href="https://zazzle.com/princebazawule" target='_blank' rel='noreferrer' title='external link' className='text-blueGray-900 dark:text-emerald-200 no-underline hover:text-emerald-500 dark:hover:text-emerald-300 hover:underline transition duration-300'><i>zazzle</i></OutboundLink>.
                    </p>

                    <div className="inline-block">
                            <button 
                                type="button"
                                formTarget="_blank"
                                onClick={() => openLink()}
                                className="flex mt-8 sm:mt-10 md:mt-10 lg:mt-6 xl:mt-8 2xl:mt-16 transition duration-300 ease-in-out bg-blueGray-900 hover:bg-emerald-100 dark:bg-emerald-300 dark:hover:bg-emerald-700 text-blueGray-100 hover:text-blueGray-900 dark:text-blueGray-900 dark:hover:text-blueGray-100 text-2xl xs:text-3xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl 2xl:text-5xl 3xl:text-5xl font-bold rounded-full border-0 py-2 px-8 lg:px-12 lg:tracking-tight xl:px-12 xl:tracking-tight 2xl:px-12 2xl:tracking-tight 3xl:px-12 3xl:tracking-tight focus:ring-6 focus:ring-emerald-500 focus:ring-opacity-5"
                            >
                                view some designs
                            </button>
                    </div>
                </section>
                
                <DesignGallery data={data} />
                
            </Layout>
        </>
    )
}

export const query = graphql`
  query DesignsPage {
    designs: allMarkdownRemark(
      sort: { order: DESC, fields: frontmatter___date }
      filter: { fileAbsolutePath: { regex: "/(designs)/" } }
    ) {
      nodes {
        frontmatter {
          title
          stack
          slug
          thumb {
            childImageSharp {
              gatsbyImageData(
                width: 750
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
                blurredOptions: {toFormat: NO_CHANGE}
              )
            }
          }
          featuredImg {
            src {
              childImageSharp {
                gatsbyImageData(
                  width: 1000
                  placeholder: BLURRED
                  blurredOptions: {toFormat: NO_CHANGE}
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
          }
        }
        id
      }
    }
  }
`
