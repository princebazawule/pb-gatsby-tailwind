import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { useLocation } from "@reach/router"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/Layout"
import Seo from '../components/Seo'
import cx from "classnames"
import "../styles/blog.module.scss"

const BlogIndex = ( { pageContext } ) => {

  const location = useLocation()

  const getCategories = useStaticQuery(graphql`
    query GetAllCategories {
      allWpCategory {
        categories: edges {
          node {
              name
              uri
              id
          }
        }
      }
    }
  `)

  const { categories } = getCategories.allWpCategory

  const { group, index, first, last, pathPrefix } = pageContext;

  const previousUrl = 1 === index - 1 ? `/${ pathPrefix }` : `/${ pathPrefix }/` + ( index - 1 ).toString()
  const nextUrl = `/${ pathPrefix }/` + ( index + 1 ).toString();
  
  const isFirstPage = previousUrl === '/blog/0' ? true : false
    

  if (!group) {
    return (
      <p>
        No blog posts found. Add posts to your WordPress site and they'll appear
        here!
      </p>
    )
  }


  return (
    <Layout>
      <Seo title="Blog" keywords={[`tips`, `tutorials`, `resources`, `freebies`]} description={`Prince Bazawule - Collection of my articles, tutorials, tips and resources. Check back regularly`} />

      <section 
          className="xl:min-h-8/10 py-8 sm:py-6 xs:px-10 sm:px-14 md:px-16 lg:px-20 xl:px-4 2xl:px-8 flex flex-col justify-center sm:flex-initial"
      >
        <div className='flex flex-row flex-nowrap items-center'>
          <h1 className="text text-blueGray-900 dark:text-blueGray-100 tracking-tighter sm:tracking-tight xl:tracking-tighter font-black text-4xl leading-normal xs:text-5xl xs:leading-normal sm:text-6xl sm:leading-normal md:text-7xl md:leading-normal lg:text-8xl lg:leading-normal xl:text-8xl xl:leading-normal 2xl:text-8xl 2xl:leading-normal 3xl:text-9xl 3xl:leading-normal 4xl:text-10xl 4xl:leading-normal">
              <span className='transition duration-300 ease-in-out bg-clip-text text-transparent bg-gradient-to-tr from-pink-400 via-blue-300 to-green-500 dark:bg-gradient-to-tr dark:from-pink-400 dark:via-blue-300 dark:to-green-500'>
                  Blog
              </span>
          </h1>
          <h2 className="ml-8 xl:ml-12 2xl:ml-16 3xl:ml-32 text text-blueGray-900 dark:text-blueGray-100 tracking-tighter sm:tracking-tight font-black text-xl leading-tight xs:text-2xl xs:leading-tight sm:text-2xl sm:leading-tight md:text-3xl md:leading-tight lg:text-4xl lg:leading-tight xl:text-4xl xl:leading-tight 2xl:text-5xl 2xl:leading-tight 3xl:text-6xl 3xl:leading-tight 4xl:text-6xl 4xl:leading-tight">
            some of my tips, tutorial & <span className='hidden xl:block leading-3'><br /></span> collections. Check back for more.
          </h2>
        </div>

        <div className="blog-wrap mt-16 relative">
          <div className={`blog-filter right-0 lg:w-3/12 ${isFirstPage ? 'lg:absolute' : 'relative left-0 right-0 w-full mb-20' }`}>
            <h3 className='text-xl font-semibold text-gray-800 dark:text-blueGray-100 mb-4'>Categories:</h3>
            
            <ul className={`flex flex-row flex-wrap mb-8 lg:max-w-xs ${isFirstPage ? '' : 'max-w-none flex-wrap lg:flex-nowrap' }`}>
            { categories ? (
              categories.map(item => {
                return (
                  <li 
                    key={item.node.id}
                    className={cx(`${location.pathname.indexOf(item.node.uri) !== -1 ? ' bg-emerald-200 dark:bg-emerald-700 text-gray-900 dark:text-gray-100 pointer-events-none' : 'bg-blueGray-900 hover:bg-emerald-200 dark:bg-emerald-200 dark:hover:bg-emerald-600 text-blueGray-100 hover:text-blueGray-900 dark:text-blueGray-900 dark:hover:text-blueGray-100'} text-lg py-3 px-4 rounded-md transform hover:scale-105 m-1 transition duration-300 cursor-pointer`)}
                  >
                    <Link 
                      to={item.node.uri}
                      activeClassName="active"
                    >
                      {item.node.name}
                    </Link>
                  </li>

               )
              })
            ) : null }
              <li
                className={cx(`${location.pathname.indexOf("/blog") !== -1 ? 'bg-emerald-200 dark:bg-emerald-700 text-gray-900 dark:text-gray-100 pointer-events-none' : 'bg-blueGray-900 hover:bg-emerald-200 dark:bg-emerald-200 dark:hover:bg-emerald-600 text-blueGray-100 hover:text-blueGray-900 dark:text-blueGray-900 dark:hover:text-blueGray-100'} text-lg py-3 px-4 rounded-md transform hover:scale-105 m-1 transition duration-300 cursor-pointer`)}
              >
                <Link 
                    to='/blog'
                    activeClassName="active"
                >
                  all
                </Link>
              </li>
            </ul>
          </div>

          <div className="blog-list">
            <ul>
              {group.map(post => {
                
                const image = getImage(post.node.featuredImage.node.localFile)
                const alt = post.node.featuredImage.node.altText
                const title = post.node.title

                return (
                  <li 
                    key={post.node.uri}
                    className='group my-4'
                  >
                    <Link to={`/post${post.node.uri}`} itemProp="url">
                      <article 
                        itemScope 
                        itemType="http://schema.org/Article"
                        className={`relative rounded-md p-4 flex  xl:flex-row flex-nowrap justify-between items-center w-full  bg-emerald-100 dark:bg-green-200 hover:bg-yellow-200 dark:hover:bg-yellow-200 border-0 transition duration-200 ${
                            isFirstPage ? 'group-first-of-type:flex-col 2xl:group-first-of-type:flex-row lg:group-first-of-type:w-2/3 group-first-of-type:bg-white group-first-of-type:hover:bg-white group-first-of-type:border group-first-of-type:border-gray-400 group-first-of-type:border-opacity-50 lg:group-first-of-type:mb-12' : ''}`}
                      >
                          <div className={`hidden ${isFirstPage ? 'group-first-of-type:block absolute right-4 top-4 flex-grow-0 text-sm font-bold italic text-blueGray-900 py-2 px-4 bg-yellow-100 text-center rounded-md' : '' }`}>newest</div>

                          <div className={`flex flex-row flex-nowrap justify-start items-start w-full xl:w-3/4 relative ${isFirstPage ? 'group-first-of-type:flex-wrap xl:group-first-of-type:pl-60 group-first-of-type:flex-col xl:group-first-of-type:w-full' : '' }`}>
                            <div className={`thumbnail hidden ${isFirstPage ? 'group-first-of-type:block xl:group-first-of-type:absolute group-first-of-type:left-0 group-first-of-type:w-60' : '' }`}>
                            
                              <div className="mb-4 rounded-5xl flex flex-col justify-center items-center content-center overflow-hidden scale-100 transform-gpu rotate-12 transition duration-300 ease-in-out group-hover:rotate-3 group-hover:scale-100 flex-shrink w-32 h-32 xs:w-40 xs:h-40 md:w-48 md:h-48">
                                <span className="-rotate-12 transform scale-150">
                                  <GatsbyImage 
                                    image={image} 
                                    alt={alt} 
                                  />
                                </span>
                              </div>
                              
                            </div>
                            <div className={`date italic text-gray-700 w-2/12 text-xs md:text-sm lg:text-base mr-2 ${isFirstPage ? 'group-first-of-type:w-1/2' : 'xl:w-2/12'}`}>{post.node.date}</div>
                            <h4 className={`title leading-tight flex-grow text-gray-800 text-base md:text-lg lg:text-xl font-medium transform group-hover:scale-105 transition duration-200 ${isFirstPage ? 'group-first-of-type:mb-8 group-first-of-type:block group-first-of-type:text-blueGray-900 group-first-of-type:order-first group-first-of-type:text-3xl group-first-of-type:font-bold' : '' }`}>
                              {title}
                              <span className={`min italic text-gray-700 w-2/12 text-xs md:text-sm lg:text-base ml-2 ${isFirstPage ? 'font-light' : '' }`}> • {post.node.acfPosts.readingTime} min.</span>
                            </h4>
                            <div className={`category mr-4 2xl:mr-0 flex-grow-0 text-xs lg:text-sm italic text-gray-700 px-2 lg:px-2 py-2 bg-white border border-gray-400 border-opacity-50 text-center rounded-md ${isFirstPage ? 'group-first-of-type:px-0 group-first-of-type:bg-transparent group-first-of-type:border-0 group-first-of-type:border-transparent group-first-of-type:block' : '' }`}>{post.node.categories.nodes[0].name}</div>
                            <div className={`excerpt hidden ${isFirstPage ? '2xl:group-first-of-type:mb-4 2xl:group-first-of-type:mr-12 group-first-of-type:block group-first-of-type:text-lg' : '' }`} dangerouslySetInnerHTML={{ __html: post.node.excerpt}}></div>
                          
                          </div>
                          <button className={`read-more flex flex-row flex-nowrap text-2xl transform translate-x-0 group-hover:translate-x-2 transition duration-200 ${isFirstPage ? 'group-first-of-type:translate-x-0 group-hover:group-first-of-type:translate-x-4 2xl:group-hover:group-first-of-type:-translate-x-4 group-first-of-type:mt-10 xl:group-first-of-type:mt-8 group-first-of-type:self-start xl:group-first-of-type:ml-60 2xl:group-first-of-type:ml-0 2xl:group-first-of-type:mt-24 group-first-of-type:py-3 group-first-of-type:px-4 group-first-of-type:bg-blueGray-900 group-first-of-type:hover:bg-emerald-100 dark:group-first-of-type:bg-emerald-300 dark:group-first-of-type:hover:bg-emerald-700 group-first-of-type:text-blueGray-100 group-first-of-type:hover:text-blueGray-900 dark:group-first-of-type:text-blueGray-900 dark:group-first-of-type:hover:text-blueGray-100 group-first-of-type:rounded-md' : '' }`}>
                              <span className={`hidden ${isFirstPage ? 'group-first-of-type:inline-block group-first-of-type:mr-2' : '' }`}>Read</span> →
                          </button>
                      </article>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </section>


      <div className='w-full flex flex-row flex-nowrap justify-center'>
				{ ! first ? 
          <Link to={ previousUrl }>
            <div className='mx-8 leading-none text-center rounded-md text-xl italic text-blueGray-900 dark:text-emerald-300 hover:text-emerald-500 dark:hover:text-emerald-100 transition duration-300'>← Newer posts</div>
          </Link> : null }
				
        { ! last ? 
        <Link to={ nextUrl }>
          <div className='mx-8 leading-none text-center rounded-md text-xl italic text-blueGray-900 dark:text-emerald-300 hover:text-emerald-500 dark:hover:text-emerald-100 transition duration-300'>Older posts →</div>
        </Link> : null }
			</div>

    </Layout>
  )
}

export default BlogIndex
