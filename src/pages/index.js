import { graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import React, { useRef, useEffect, useState } from "react"
import { gsap } from "gsap"
import SvgGithubIcon from "../components/icons/GithubIcon"
import SvgSoundcloudIcon from "../components/icons/SoundcloudIcon"
import SvgSociety6Icon from "../components/icons/Society6Icon"
import SvgSpotifyIcon from "../components/icons/SpotifyIcon"
import SvgDribbbleIcon from "../components/icons/DribbbleIcon"
import Layout from "../components/Layout"

export default function Home({ data }) {

  // console.log(data)

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

  const { author } = data.site.siteMetadata
  return (
    <>
      <Layout>
        <div className="flex flex-col sm:flex-grow 3xl:w-11/12 4xl:w-10/12 3xl:mx-auto justify-between flex-1">
          <section
            ref={textRef}
            className="xl:min-h-8/10 py-8 sm:py-6 xs:px-10 sm:px-14 md:px-16 lg:px-20 xl:px-4 2xl:px-8 flex flex-col justify-center sm:flex-initial"
            // className="xl:min-h-8/10 py-8 sm:py-6 xs:px-12 sm:px-16 md:px-16 lg:px-20 xl:px-4 2xl:px-8 flex flex-col justify-center sm:flex-initial transition duration-300"
            onMouseMove={e => handlePositionChange(e)}
            role="main"
          >
            <h1 className="text text-gray-900 dark:text-blueGray-100 tracking-tighter sm:tracking-tight font-black text-4xl leading-tight xs:text-5xl xs:leading-tight sm:text-6xl sm:leading-none md:text-7xl md:leading-none lg:text-8xl lg:leading-none xl:text-8xl xl:leading-none 2xl:text-8xl 2xl:leading-none 3xl:text-9xl 3xl:leading-none 4xl:text-10xl 4xl:leading-none">
              i’m {author.name}.<br /> i{" "}
              <Link
                to="/designer"
                data-skill="design"
                className="dee transition duration-500 ease-in-out bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 hover:bg-gradient-to-r hover:from-green-500 hover:to-green-500"
                data-text="Design"
              >
                Design
              </Link>
              ,
              <br />
              <Link
                to="/developer"
                data-skill="code"
                className="transition duration-500 ease-in-out bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-blue-400 to-indigo-400 dark:bg-gradient-to-r dark:from-green-200 dark:via-blue-400 dark:to-indigo-400 hover:bg-gradient-to-r hover:from-green-800 hover:to-green-800 dark:hover:bg-gradient-to-r dark:hover:from-emerald-100 dark:hover:to-emerald-100"
              >
                Code
              </Link>{" "}
              &amp;{" "}
              <Link
                to="/blog"
                data-skill="blog"
                className="transition duration-500 ease-in-out bg-clip-text text-transparent bg-gradient-to-tr from-pink-400 via-blue-300 to-green-500 dark:bg-gradient-to-tr dark:from-pink-400 dark:via-blue-300 dark:to-green-500 hover:bg-gradient-to-r hover:from-green-400 hover:to-green-400 dark:hover:bg-gradient-to-r dark:hover:from-green-400 dark:hover:to-green-400"
              >
                Blog
              </Link>{" "}
              a bit
              <br /> as well as{" "}
              <Link
                to="/dj"
                data-skill="dj"
                className="transition duration-500 ease-in-out bg-clip-text text-transparent bg-gradient-to-r from-green-300 to-purple-400 dark:bg-gradient-to-br dark:from-green-300 dark:to-purple-400 hover:bg-gradient-to-r hover:from-green-700 hover:to-green-700 dark:hover:from-emerald-200 dark:hover:to-emerald-200"
              >
                Dj
              </Link>
            </h1>

            <div className="inline-block">
              <Link to="/contact">
                <button className="flex mt-8 sm:mt-16 md:mt-14 lg:mt-16 xl:mt-24 transition duration-500 ease-in-out text-white dark:text-gray-900 text-2xl xs:text-3xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-5xl 3xl:text-5xl font-bold rounded-full bg-green-500 dark:bg-green-400 dark:hover:bg-green-700 border-0 py-2 px-8 lg:px-12 lg:tracking-tight xl:px-12 xl:tracking-tight 2xl:px-12 2xl:tracking-tight 3xl:px-12 3xl:tracking-tight focus:outline-none focus:ring-6 focus:ring-green-500 focus:ring-opacity-50 hover:bg-green-800 dark:hover:text-blueGray-100">
                  let's connect
                </button>
              </Link>
            </div>
          </section>

          <section
            ref={listRef}
            className="px-2 lg:px-2 3xl:px-10 mt-12 sm:mt-12 md:mt-8 lg:mt-0 xl:mt-0 xl:right-10 2xl:right-12 3xl:right-12 4xl:right-64 relative xl:absolute xl:top-1/2 xl:transform xl:-translate-y-1/2 xl:w-1/4 2xl:w-1/4"
            onMouseMove={e => handlePositionChange(e)}
            role="list"
          >
            <div className='transition duration-300 flex flex-row flex-wrap items-end xl:items-center justify-center'>
              <a 
                href="https://princebazawule.com"
                target='_blank'
                rel='noreferrer'
                title='external link'>
                <div className="m-2 xl:m-3 2xl:m-4 rounded-4xl flex flex-col justify-center items-center content-center bg-white scale-100 transform-gpu rotate-12 transition duration-300 ease-in-out hover:rotate-3 hover:scale-125 flex-shrink w-24 h-24 xs:w-28 xs:h-28 md:w-26 md:h-26 md:w-20 md:h-20 xl:w-26 xl:h-26 2xl:w-28 2xl:h-28 3xl:w-36 3xl:h-36">
                  <span className="-rotate-12 transform scale-105 xl:scale-75 2xl:scale-110">
                    <SvgGithubIcon title="github-icon" fill='#1E293B' />
                  </span>
                </div>
              </a>
              <a 
                href="https://princebazawule.com"
                target='_blank'
                rel='noreferrer'
                title='external link'>
                <div className="m-2 xl:m-3 2xl:m-4 rounded-4xl flex flex-col justify-center items-center content-center bg-green-500 transform-gpu -rotate-12 transition duration-300 ease-in-out hover:rotate-3 hover:scale-125 flex-shrink w-24 h-24 xs:w-28 xs:h-28 md:w-32 md:h-32 xl:w-24 xl:h-24 2xl:w-32 2xl:h-32">
                  <span className="rotate-12 transform scale-105 xl:scale-75 2xl:scale-110">
                    <SvgSoundcloudIcon title="soundcloud-icon" fill='#F8FAFC' />
                  </span>
                </div>
              </a>
              <div className="m-2 xl:m-3 2xl:m-4 rounded-4xl flex flex-col justify-center items-center content-center overflow-hidden bg-yellow-100 scale-100 transform-gpu rotate-12 transition duration-300 ease-in-out hover:rotate-3 hover:scale-100 flex-shrink w-32 h-32 xs:w-40 xs:h-40 md:w-56 md:h-56 xl:w-52 xl:h-52 2xl:w-60 2xl:h-60 3xl:w-64 3xl:h-64 order-first sm:order-none 3xl:order-first">
                <span className="-rotate-12 transform scale-150">
                  <StaticImage
                    src="../images/profile-design.jpeg"
                    className="max-w-full"
                    alt="profile - design"
                    placeholder="blurred"
                    layout="fixed"
                    width={200}
                    height={200}
                  />
                </span>
              </div>
              <a 
                href="https://princebazawule.com"
                target='_blank'
                rel='noreferrer'
                title='external link'>
                <div className="m-2 xl:m-3 2xl:m-4 rounded-4xl flex flex-col justify-center items-center content-center bg-green-100 scale-100 transform-gpu rotate-12 transition duration-300 ease-in-out hover:rotate-3 hover:scale-75 flex-shrink-0 w-24 h-24 xs:w-28 xs:h-28 md:w-32 md:h-32 xl:w-24 xl:h-24 2xl:w-32 2xl:h-32 3xl:w-32 3xl:h-32">
                  <span className="-rotate-12 transform scale-105 xl:scale-75 2xl:scale-110">
                    <SvgSociety6Icon title="society6-icon" fill='#34D399' />
                  </span>
                </div>
              </a>
              <a 
                href="https://princebazawule.com"
                target='_blank'
                rel='noreferrer'
                title='external link'>
                <div className="m-2 xl:m-3 2xl:m-4 rounded-4xl flex flex-col justify-center items-center content-center bg-green-500 scale-100 transform-gpu -rotate-12 transition duration-300 ease-in-out hover:rotate-3 hover:scale-90 flex-shrink w-24 h-24 xs:w-28 xs:h-28 md:w-26 md:h-26 md:w-20 md:h-20 xl:w-26 xl:h-26 2xl:w-28 2xl:h-28 3xl:w-36 3xl:h-36">
                  <span className="rotate-12 transform scale-105 xl:scale-75 2xl:scale-110">
                    <SvgSpotifyIcon title="spotify-icon" fill='#F8FAFC' />
                  </span>
                </div>
              </a>{" "}
              <a 
                href="https://princebazawule.com"
                target='_blank'
                rel='noreferrer'
                title='external link'>
                <div className="m-2 xl:m-3 2xl:m-4 rounded-4xl flex flex-col justify-center items-center content-center bg-green-100 scale-100 transform-gpu rotate-12 transition duration-500 hover:rotate-3 hover:scale-75 flex-shrink w-24 h-24 xs:w-28 xs:h-28 md:w-26 md:h-26 md:w-20 md:h-20 xl:w-26 xl:h-26 2xl:w-28 2xl:h-28 3xl:w-32 3xl:h-32">
                  <span className="-rotate-12 transform scale-105 xl:scale-75 2xl:scale-110">
                    <SvgDribbbleIcon title="dribbble-icon" fill='#34D399' />
                  </span>
                </div>
              </a>
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
          name
        }
      }
    }
  }
`
