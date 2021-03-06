import { graphql } from "gatsby"
import React, { useRef, useEffect, useState } from 'react'
import { gsap } from 'gsap'
import Layout from '../../components/Layout'
import Seo from '../../components/Seo'
import MusicGallery from '../../components/MusicGallery'
import '../../styles/dj.module.scss'

export default function Dj({ data }) {

  const { siteUrl } = data.site.siteMetadata
  const { images } = data

  const profileImages = images.edges
  const selectDefaultImage = profileImages.filter(item => item.node.name === 'og-dj')
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

  return (
    <>
      <Layout>
        <Seo title="DJ | Prince Bazawule" keywords={[`music`, `mixes`, `playlist`, `mixcloud`, `soundcloud`, `spotify`]} description={`Prince Bazawule - Music lover, curator and DJ`} image={`${siteUrl}${defaultImageSrc}`} url={`${siteUrl}/dj/`} />

        <section ref={textRef}
          className="xl:min-h-8/10 py-8 sm:py-6 xs:px-10 sm:px-14 md:px-16 lg:px-20 xl:px-4 2xl:px-8 flex flex-col justify-center sm:flex-initial cursor-default xl:w-3/4"
          onMouseMove={e => handlePositionChange(e)}
          role="region"
        >
          <h1 className="text text-blueGray-900 dark:text-blueGray-100 tracking-tighter sm:tracking-tight xl:tracking-tighter font-black text-4xl leading-normal xs:text-5xl xs:leading-normal sm:text-6xl sm:leading-normal md:text-7xl md:leading-normal lg:text-8xl lg:leading-normal xl:text-8xl xl:leading-normal 2xl:text-8xl 2xl:leading-normal 3xl:text-9xl 3xl:leading-normal 4xl:text-10xl 4xl:leading-normal">
            <span className="transition duration-300 ease-in-out bg-clip-text text-transparent bg-gradient-to-r from-green-300 to-purple-400 dark:bg-gradient-to-br dark:from-green-300 dark:to-purple-400">
              DJ
              <span className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl 2xl:text-6xl 3xl:text-7xl 4xl:text-8xl">
                -ing
              </span>
            </span>
          </h1>

          <h2 className="mb-8 lg:mb-14 mt-4 xs:mt-2 text text-blueGray-900 dark:text-blueGray-100 tracking-tighter sm:tracking-tight font-black text-2xl leading-tight xs:text-3xl xs:leading-none sm:text-4xl sm:leading-none md:text-5xl md:leading-none lg:text-5xl lg:leading-none xl:text-5xl xl:leading-none 2xl:text-5xl 2xl:leading-none 3xl:text-6xl 3xl:leading-none 4xl:text-6xl 4xl:leading-none">
            music provides the soundtrack to <span className='hidden xl:block leading-3'><br /></span> everything i do
          </h2>

          <p className="mb-8 text text-gray-800 dark:text-blueGray-100 tracking-tighter sm:tracking-tight font-normal text-xl leading-normal xs:text-2xl xs:leading-normal sm:text-2xl sm:leading-normal md:text-2xl md:leading-normal lg:text-2xl lg:leading-normal xl:text-2xl xl:leading-normal 2xl:text-3xl 2xl:leading-normal 3xl:text-3xl 3xl:leading-normal 4xl:text-3xl 4xl:leading-normal">
            i love discovering, curating &amp; playing out.
          </p>
          <p className="mb-8 text text-gray-800 dark:text-blueGray-100 tracking-tighter sm:tracking-tight font-normal text-xl leading-normal xs:text-2xl xs:leading-normal sm:text-2xl sm:leading-normal md:text-2xl md:leading-normal lg:text-2xl lg:leading-normal xl:text-2xl xl:leading-normal 2xl:text-3xl 2xl:leading-normal 3xl:text-3xl 3xl:leading-normal 4xl:text-3xl 4xl:leading-normal">
            Checkout some of my <i>mixes</i>, <i>podcasts</i> &amp;{" "}
            <i>playlists</i>.<br />
            Catch me live if you can.
          </p>
        </section>

        <MusicGallery data={data} />
      </Layout>
    </>
  )
}

export const query = graphql`
query DeejayPage {
    music: allMarkdownRemark(
      sort: {order: DESC, fields: frontmatter___date}
      filter: {fileAbsolutePath: {regex: "/(music)/"}}
    ) {
      nodes {
        frontmatter {
          title
          stack
          url
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
