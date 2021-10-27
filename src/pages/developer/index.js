import { graphql, Link } from "gatsby"
import React from 'react'
import Layout from '../../components/Layout'
import ProjectGallery from '../../components/ProjectGallery'
import '../../styles/developer.module.scss'

export default function developer({ data }) {

  console.log(data)

  const openLink = () => {
    window.open("https://github.com/princebazawule")
  }

    return (
        <>
            <Layout>
              <section className="xl:min-h-8/10 py-8 sm:py-6 xs:px-10 sm:px-14 md:px-16 lg:px-20 xl:px-4 2xl:px-8 flex flex-col justify-center sm:flex-initial">
                  <h1 className="text text-gray-900 dark:text-blueGray-100 tracking-tighter sm:tracking-tight font-black text-4xl leading-normal xs:text-5xl xs:leading-normal sm:text-6xl sm:leading-normal md:text-7xl md:leading-normal lg:text-8xl lg:leading-normal xl:text-8xl xl:leading-normal 2xl:text-8xl 2xl:leading-normal 3xl:text-9xl 3xl:leading-normal 4xl:text-10xl 4xl:leading-normal">
                      <span className='transition duration-300 ease-in-out bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-blue-400 to-indigo-400 dark:bg-gradient-to-r dark:from-green-200 dark:via-blue-400 dark:to-indigo-400'>
                        Developer
                      </span>
                  </h1>

                  <h2 className="mb-8 lg:mb-14 xs:mt-2 text text-gray-900 dark:text-blueGray-100 tracking-tighter sm:tracking-tight font-black text-2xl leading-none xs:text-3xl xs:leading-none sm:text-4xl sm:leading-none md:text-5xl md:leading-none lg:text-5xl lg:leading-none xl:text-5xl xl:leading-none 2xl:text-5xl 2xl:leading-none 3xl:text-6xl 3xl:leading-none 4xl:text-6xl 4xl:leading-none">
                    i’m a frontend developer with over<br /> 15 years web experience
                  </h2>
                  
                  <p className="mb-8 text text-gray-800 dark:text-blueGray-100 tracking-tighter sm:tracking-tight font-normal text-xl leading-normal xs:text-2xl xs:leading-normal sm:text-2xl sm:leading-normal md:text-2xl md:leading-normal lg:text-2xl lg:leading-normal xl:text-2xl xl:leading-normal 2xl:text-3xl 2xl:leading-normal 3xl:text-3xl 3xl:leading-normal 4xl:text-3xl 4xl:leading-normal">
                    i enjoy creating rich web experiences.
                  </p>
                  <p className="mb-8 text text-gray-800 dark:text-blueGray-100 tracking-tighter sm:tracking-tight font-normal text-xl leading-normal xs:text-2xl xs:leading-normal sm:text-2xl sm:leading-normal md:text-2xl md:leading-normal lg:text-2xl lg:leading-normal xl:text-2xl xl:leading-normal 2xl:text-3xl 2xl:leading-normal 3xl:text-3xl 3xl:leading-normal 4xl:text-3xl 4xl:leading-normal">
                    With a solid base in <i>html</i>, <i>css</i> &amp; <i>javascript</i>, my tech stack is ever evolving, as with the industry.
                  </p>
                  <p className="mb-8 text text-gray-800 dark:text-blueGray-100 tracking-tighter sm:tracking-tight font-normal text-xl leading-normal xs:text-2xl xs:leading-normal sm:text-2xl sm:leading-normal md:text-2xl md:leading-normal lg:text-2xl lg:leading-normal xl:text-2xl xl:leading-normal 2xl:text-3xl 2xl:leading-normal 3xl:text-3xl 3xl:leading-normal 4xl:text-3xl 4xl:leading-normal">
                    i am currently enjoying the exciting world of <i>react</i>, <i>vue</i>, <i>jamstack</i> &amp; <i>serverless</i> technologies.
                  </p>

                  <div className="inline-block">
                          <button
                          type="button"
                          formTarget="_blank"
                            onClick={() => openLink()}
                            // href="https://github.com/princebazawule"
                            // target="_blank"
                            // rel="noreferrer"
                            // title="github link"
                            className="flex mt-8 sm:mt-10 md:mt-10 lg:mt-10 xl:mt-16 transition duration-300 ease-in-out text-blueGray-100 hover:text-gray-900 dark:text-gray-900 text-2xl xs:text-3xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-5xl 3xl:text-5xl font-bold rounded-full bg-gray-900 hover:bg-green-100 dark:bg-green-400 dark:hover:bg-green-700 border-0 py-2 px-8 lg:px-12 lg:tracking-tight xl:px-12 xl:tracking-tight 2xl:px-12 2xl:tracking-tight 3xl:px-12 3xl:tracking-tight focus:outline-none focus:ring-6 focus:ring-green-500 focus:ring-opacity-5 dark:hover:text-blueGray-100"
                          >
                              view some projects
                          </button>
                  </div>
              </section>

              <ProjectGallery data={data} />
              
            </Layout>
        </>
    )
}

export const query = graphql`
  query ProjectsPage {
    projects: allMarkdownRemark(
      sort: { order: DESC, fields: frontmatter___date }
      filter: {fileAbsolutePath: {regex: "/(projects)/"}}
    ) {
      nodes {
        frontmatter {
          title
          stack
          slug
        }
        id
      }
    }
    info: site {
      siteMetadata {
        author {
          name
        }
      }
    }
  }
`
