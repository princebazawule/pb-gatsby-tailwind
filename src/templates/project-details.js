// import React, { Fragment } from "react"
// import { Link, graphql } from "gatsby"
// import { StaticImage, getImage } from "gatsby-plugin-image"
// import Layout from "../components/Layout"
// import "../styles/blog.module.scss"

// export default function ProjectDetails({ data }) {

//     const projects = data.projects.nodes
    
//     return (
//         <Layout>
//             <section 
//                 className="xl:min-h-8/10 py-8 sm:py-6 xs:px-10 sm:px-14 md:px-16 lg:px-20 xl:px-4 2xl:px-8 flex flex-col lg:flex-row flex-nowrap justify-center items-start sm:flex-initial"
//             >
//                 <div className='flex-grow-0 flex flex-row flex-nowrap items-center mr-12'>
//                     <Link
//                         to="/code"
//                         activeClassName="active"
//                     >
//                         <h1 className="text text-gray-900 dark:text-blueGray-100 tracking-tighter sm:tracking-tight font-black text-4xl leading-normal xs:text-5xl xs:leading-normal sm:text-6xl sm:leading-normal md:text-7xl md:leading-normal lg:text-8xl lg:leading-normal xl:text-8xl xl:leading-normal 2xl:text-8xl 2xl:leading-normal 3xl:text-9xl 3xl:leading-normal 4xl:text-10xl 4xl:leading-normal">
//                             <span className='transition duration-300 ease-in-out bg-clip-text text-transparent bg-gradient-to-tr from-pink-400 via-blue-300 to-green-500 dark:bg-gradient-to-tr dark:from-pink-400 dark:via-blue-300 dark:to-green-500'>
//                                 Projects
//                             </span>
//                         </h1>
//                     </Link>
//                 </div>

//                 <div className='flex-grow w-full'>
                    
//                     {projects.map(project => {
//                         // const image = project.frontmatter.thumb.childImageSharp.fluid.src
//                         const image = getImage(project.frontmatter.thumb.childImageSharp)
//                         const alt = project.frontmatter.title

//                         console.log(image)

//                         return (
                            
//                             <article className="blog-post relative 2xl:w-4/5">
//                                 <header>
//                                     {project && (
//                                         <GatsbyImage 
//                                         image={image}
//                                         alt={alt}
//                                         placeholder="blurred"
//                                         // layout="fixed"
//                                         width={750}
//                                         height={422}
//                                         // className='border-16 border-white drop-shadow-lg h-64 w-full aspect-w-16 aspect-h-6'
//                                     />
//                                     )}
//                                     <h1 
//                                         itemProp="headline"
//                                         className="mt-16 mb-4 text text-gray-900 dark:text-blueGray-100 tracking-tighter sm:tracking-tight font-black text-xl leading-tight xs:text-2xl xs:leading-tight sm:text-2xl sm:leading-tight md:text-3xl md:leading-tight lg:text-4xl lg:leading-tight xl:text-4xl xl:leading-tight 2xl:text-5xl 2xl:leading-tight 3xl:text-6xl 3xl:leading-tight 4xl:text-6xl 4xl:leading-tight"
//                                     >
//                                         {project.title}
//                                     </h1>
//                                     <div>
//                                         <span className='italic text-gray-700'>
//                                             {project.date}
//                                         </span> 
//                                         <span className='ml-4 italic text-white bg-green-500 py-2 px-3 rounded-md'>
//                                             {project.stack}
//                                         </span>
//                                     </div>
//                                 </header>


//                                 <section itemProp="articleBody">
//                                     <div 
//                                         className='blog-content mt-16 text-lg xl:text-xl 3xl:text-2xl break-normal'
//                                         dangerouslySetInnerHTML={{ __html: project.content}}
//                                     >
//                                     </div>
//                                 </section>
//                             </article>
//                         )
//                     })}
//                 </div>
            
//             </section>
//         </Layout>
//     )
// }

// export const query = graphql`
//   query ProjectDetailsPage {
//     projects: allMarkdownRemark(
//       sort: { order: DESC, fields: frontmatter___date }
//       filter: { fileAbsolutePath: { regex: "/(projects)/" } }
//     ) {
//       nodes {
//         frontmatter {
//           title
//           stack
//           slug
//           thumb {
//             childImageSharp {
//               gatsbyImageData(
//                 width: 750
//                 placeholder: BLURRED
//                 formats: [AUTO, WEBP, AVIF]
//                 blurredOptions: { toFormat: NO_CHANGE }
//               )
//             }
//           }
//           featuredImg {
//             childImageSharp {
//               gatsbyImageData(
//                 width: 750
//                 placeholder: BLURRED
//                 formats: [AUTO, WEBP, AVIF]
//                 blurredOptions: { toFormat: NO_CHANGE }
//               )
//             }
//           }
//         }
//         id
//       }
//     }
//   }
// `