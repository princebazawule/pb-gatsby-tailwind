import { graphql, Link } from 'gatsby'
import React, { useRef, useEffect, useState } from 'react'
import { gsap } from 'gsap'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { OutboundLink } from "gatsby-plugin-google-gtag"
import SvgGithubIcon from '../components/icons/GithubIcon'
import SvgSoundcloudIcon from '../components/icons/SoundcloudIcon'
import SvgSociety6Icon from '../components/icons/Society6Icon'
import SvgSpotifyIcon from '../components/icons/SpotifyIcon'
import SvgDribbbleIcon from '../components/icons/DribbbleIcon'
import Layout from '../components/Layout'
import Seo from '../components/Seo'

export default function Home({ data }) {

  // console.log(data)

  const { author } = data.site.siteMetadata
  const { siteUrl } = data.site.siteMetadata
  const { images } = data

  const profileImages = images.edges

  const [skill, setSkill] = useState('design')
  
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const textRef = useRef()
  const listRef = useRef()

  const handlePositionChange = e => {
    setPosition({
      x: e.clientX / window.innerWidth - 0.5,
      y: e.clientY / window.innerHeight - 0.5,
    })
  }

  const changeProfilePhoto = (skill) => {
    const profilePic = document.querySelector('#profile-pic')
    profilePic.classList.toggle('animated')

    setTimeout(() => {
      profilePic.classList.remove('animated')
    }, 600)
    setSkill(skill)
  }

  const selectedImage = profileImages.filter(item => item.node.name === skill)
  const image = getImage(selectedImage[0].node.childImageSharp)
  const name = selectedImage[0].node.name

  const selectDefaultImage = profileImages.filter(item => item.node.name === 'og-default')
  const defaultImageSrc = selectDefaultImage[0].node.childImageSharp.fluid.src

  useEffect(() => {
    gsap.to(textRef.current, {
      rotationY: -5 * position.y,
      rotationX: -5 * position.x,
      transformPerspective: 700,
      ease: 'power3',
      transformOrigin: "center",
    })
  })

  useEffect(() => {
    gsap.to(listRef.current, {
      rotationY: 2 * position.y,
      rotationX: 5 * position.x,
      translateZ: 10,
      transformPerspective: 200,
      ease: 'power3',
      transformOrigin: "center",
    })
  })

  return (
    <>
      <Layout>
        <Seo title="About | Prince Bazawule" keywords={[`frontend`, `developer`, `designer`, `dj`, `artist`]} description={`Prince Bazawule - Award-winning designer, experienced developer, DJ & Gooner`} image={`${siteUrl}${defaultImageSrc}`} url={`${siteUrl}/`} />
        {/* <Seo title="Home" keywords={[`frontend`, `developer`, `designer`, `dj`, `artist`]} description={`Prince Bazawule - Award-winning designer, experienced developer, DJ & Gooner`} /> */}

        <div className="flex flex-col sm:flex-grow 3xl:w-11/12 4xl:w-11/12 3xl:mx-auto justify-between flex-1">
          <section
            ref={textRef}
            className="xl:min-h-8/10 py-8 sm:py-6 xs:px-10 sm:px-14 md:px-16 lg:px-16 xl:px-4 2xl:px-8 flex flex-col justify-center sm:flex-initial cursor-default"
            onMouseMove={e => handlePositionChange(e)}
            role="region"
          >
            <h1 className="text text-blueGray-900 dark:text-blueGray-100 tracking-tighter sm:tracking-tight xl:tracking-tighter font-black text-4xl leading-tight xs:text-5xl xs:leading-tight sm:text-6xl sm:leading-none md:text-7xl md:leading-none lg:text-8xl lg:leading-none xl:text-8xl xl:leading-none 2xl:text-8xl 2xl:leading-none 3xl:text-9xl 3xl:leading-none 4xl:text-10xl 4xl:leading-none">
              i’m {author.first_name}.<br /> i{" "}
              <Link
                to="/designer"
                data-skill="design"
                className="transition duration-500 ease-in-out bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 hover:bg-gradient-to-r hover:from-emerald-500 hover:to-emerald-500 dark:hover:from-emerald-300 dark:hover:to-emerald-300"
                data-text="Design"
                onMouseOver={() => changeProfilePhoto('design')}
              >
                Design
              </Link>
              ,
              <br />
              <Link
                to="/developer"
                data-skill="code"
                className="transition duration-500 ease-in-out bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-blue-400 to-indigo-400 dark:bg-gradient-to-r dark:from-green-200 dark:via-blue-400 dark:to-indigo-400 hover:bg-gradient-to-r hover:from-emerald-500 hover:to-emerald-500 dark:hover:from-emerald-300 dark:hover:to-emerald-300"
                onMouseOver={() => changeProfilePhoto('coding')}
              >
                Code
              </Link>{" "}
              &amp;{" "}
              <Link
                to="/blog"
                data-skill="blog"
                className="transition duration-500 ease-in-out bg-clip-text text-transparent bg-gradient-to-tr from-pink-400 via-blue-300 to-green-500 dark:bg-gradient-to-tr dark:from-pink-400 dark:via-blue-300 dark:to-green-500 hover:bg-gradient-to-r hover:from-emerald-500 hover:to-emerald-500 dark:hover:from-emerald-300 dark:hover:to-emerald-300"
                onMouseOver={() => changeProfilePhoto('blog')}
              >
                Blog
              </Link>{" "}
              a bit
              <br /> as well as{" "}
              <Link
                to="/dj"
                data-skill="dj"
                className="transition duration-500 ease-in-out bg-clip-text text-transparent bg-gradient-to-r from-green-300 to-purple-400 dark:bg-gradient-to-br dark:from-green-300 dark:to-purple-400 hover:bg-gradient-to-r hover:from-emerald-500 hover:to-emerald-500 dark:hover:from-emerald-300 dark:hover:to-emerald-300"
                onMouseOver={() => changeProfilePhoto('dj')}
              >
                Dj
              </Link>
            </h1>

            <div className="inline-block">
              <Link to="/contact">
                <button 
                  className="inline-flex mt-8 sm:mt-16 md:mt-14 lg:mt-16 xl:mt-12 2xl:mt-24 transition duration-500 ease-in-out bg-blueGray-900 hover:bg-emerald-100 dark:bg-emerald-300 dark:hover:bg-emerald-700 text-blueGray-100 hover:text-blueGray-900 dark:text-blueGray-900 dark:hover:text-blueGray-100 text-2xl xs:text-3xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl 2xl:text-5xl 3xl:text-5xl font-bold rounded-full border-0 py-2 px-8 lg:px-12 lg:tracking-tight xl:px-12 xl:tracking-tight 2xl:px-12 2xl:tracking-tight 3xl:px-12 3xl:tracking-tight focus:ring-6 focus:ring-emerald-500 focus:ring-opacity-50">
                  let's connect
                </button>
              </Link>
            </div>
          </section>

          <section
            ref={listRef}
            className="px-2 lg:px-2 3xl:px-10 mt-12 sm:mt-12 md:mt-8 lg:mt-0 xl:mt-0 xl:right-10 2xl:right-12 3xl:right-12 4xl:right-64 relative xl:absolute xl:top-1/2 xl:transform xl:-translate-y-1/2 xl:w-1/4 2xl:w-1/4 z-10"
            onMouseMove={e => handlePositionChange(e)}
            role="region"
          >
            <div className='transition duration-300 flex flex-row flex-wrap items-end xl:items-center justify-center'>
              <OutboundLink 
                href="https://github.com/princebazawule"
                target='_blank'
                rel='noreferrer'
                title='external link'>
                <div className="m-2 xl:m-3 2xl:m-4 rounded-4xl flex flex-col justify-center items-center content-center bg-white scale-100 transform-gpu rotate-12 transition duration-300 ease-in-out hover:rotate-3 hover:scale-125 flex-shrink w-24 h-24 xs:w-28 xs:h-28 md:w-26 md:h-26 md:w-20 md:h-20 xl:w-24 xl:h-24 2xl:w-28 2xl:h-28 3xl:w-36 3xl:h-36">
                  <span className="-rotate-12 transform scale-105 xl:scale-75 2xl:scale-110">
                    <SvgGithubIcon title="github-icon" fill='blueGray' />
                  </span>
                </div>
              </OutboundLink>
              <OutboundLink 
                href="https://soundcloud.com/princebazawule/tracks"
                target='_blank'
                rel='noreferrer'
                title='external link'>
                <div className="m-2 xl:m-3 2xl:m-4 rounded-4xl flex flex-col justify-center items-center content-center bg-green-500 transform-gpu -rotate-12 transition duration-300 ease-in-out hover:rotate-3 hover:scale-125 flex-shrink w-24 h-24 xs:w-28 xs:h-28 md:w-32 md:h-32 xl:w-20 xl:h-20 2xl:w-32 2xl:h-32">
                  <span className="rotate-12 transform scale-105 xl:scale-75 2xl:scale-110">
                    <SvgSoundcloudIcon title="soundcloud-icon" fill="white" />
                  </span>
                </div>
              </OutboundLink>
              <div className="m-2 xl:m-3 2xl:m-4 rounded-4xl flex flex-col justify-center items-center content-center overflow-hidden scale-100 transform-gpu rotate-12 transition duration-300 ease-in-out hover:rotate-3 hover:scale-100 flex-shrink w-32 h-32 xs:w-40 xs:h-40 md:w-56 md:h-56 xl:w-36 xl:h-36 2xl:w-60 2xl:h-60 3xl:w-64 3xl:h-64 order-first sm:order-none 3xl:order-first">
                <span className="-rotate-12 transform scale-150">
                  { image && (
                    <GatsbyImage 
                        image={image}
                        alt={`profile - ${name}`}
                        className='max-w-full transition duration-300'
                        placeholder="blurred"
                        // layout="fixed"
                        layout="constrained"
                        // width={200}
                        width={200}
                        height={200}
                        id="profile-pic"
                    />) }
                </span>
              </div>
              <OutboundLink 
                href="https://society6.com/princebazawule"
                target='_blank'
                rel='noreferrer'
                title='external link'>
                <div className="m-2 xl:m-3 2xl:m-4 rounded-4xl flex flex-col justify-center items-center content-center bg-green-100 scale-100 transform-gpu rotate-12 transition duration-300 ease-in-out hover:rotate-3 hover:scale-75 flex-shrink-0 w-24 h-24 xs:w-28 xs:h-28 md:w-32 md:h-32 xl:w-24 xl:h-24 2xl:w-32 2xl:h-32 3xl:w-32 3xl:h-32">
                  <span className="-rotate-12 transform scale-105 xl:scale-75 2xl:scale-110">
                    <SvgSociety6Icon title="society6-icon" fill='teal' />
                  </span>
                </div>
              </OutboundLink>
              <OutboundLink 
                href="https://open.spotify.com/user/princebazawule/playlists"
                target='_blank'
                rel='noreferrer'
                title='external link'>
                <div className="m-2 xl:m-3 2xl:m-4 rounded-4xl flex flex-col justify-center items-center content-center bg-green-500 scale-100 transform-gpu -rotate-12 transition duration-300 ease-in-out hover:rotate-3 hover:scale-90 flex-shrink w-24 h-24 xs:w-28 xs:h-28 md:w-26 md:h-26 md:w-20 md:h-20 xl:w-24 xl:h-24 2xl:w-28 2xl:h-28 3xl:w-36 3xl:h-36">
                  <span className="rotate-12 transform scale-105 xl:scale-75 2xl:scale-110">
                    <SvgSpotifyIcon title="spotify-icon" fill="white" />
                  </span>
                </div>
              </OutboundLink>{" "}
              <OutboundLink 
                href="https://dribbble.com/princebazawule"
                target='_blank'
                rel='noreferrer'
                title='external link'>
                <div className="m-2 xl:m-3 2xl:m-4 rounded-4xl flex flex-col justify-center items-center content-center bg-green-100 scale-100 transform-gpu rotate-12 transition duration-500 hover:rotate-3 hover:scale-75 flex-shrink w-24 h-24 xs:w-28 xs:h-28 md:w-26 md:h-26 md:w-20 md:h-20 xl:w-24 xl:h-24 2xl:w-28 2xl:h-28 3xl:w-32 3xl:h-32">
                  <span className="-rotate-12 transform scale-105 xl:scale-75 2xl:scale-110">
                    <SvgDribbbleIcon title="dribbble-icon" fill='teal' />
                  </span>
                </div>
              </OutboundLink>
            </div>
          </section>
        </div>
      </Layout>
    </>
  )
}

export const query = graphql`
  query AboutInfo {
    site {
      siteMetadata {
        author {
          first_name
        }
        siteUrl
      }
    }

    images: allFile(filter: {absolutePath: {regex: "/(images/profile)/"}}) {
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
  }
`
