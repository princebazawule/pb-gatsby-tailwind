import React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/Layout"
import Seo from '../components/Seo'
import "../styles/blog.module.scss"

const BlogIndex = ( { pageContext } ) => {

  const { group, index, first, last, pathPrefix } = pageContext;

    const previousUrl = 1 === index - 1 ? `/${ pathPrefix }` : `/${ pathPrefix }/` + ( index - 1 ).toString()
	  const nextUrl = `/${ pathPrefix }/` + ( index + 1 ).toString();
    
    const isFirstPage = previousUrl === '/blog/0' ? true : false
    
    // console.log(isFirstPage)

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
      <Seo title="Blog" keywords={[`tips`, `tutorials`, `resources`, `freebies`]} />

      <section 
          className="xl:min-h-8/10 py-8 sm:py-6 xs:px-10 sm:px-14 md:px-16 lg:px-20 xl:px-4 2xl:px-8 flex flex-col justify-center sm:flex-initial"
      >
        <div className='flex flex-row flex-nowrap items-center'>
          <h1 className="text text-gray-900 dark:text-blueGray-100 tracking-tighter sm:tracking-tight xl:tracking-tighter font-black text-4xl leading-normal xs:text-5xl xs:leading-normal sm:text-6xl sm:leading-normal md:text-7xl md:leading-normal lg:text-8xl lg:leading-normal xl:text-8xl xl:leading-normal 2xl:text-8xl 2xl:leading-normal 3xl:text-9xl 3xl:leading-normal 4xl:text-10xl 4xl:leading-normal">
              <span className='transition duration-300 ease-in-out bg-clip-text text-transparent bg-gradient-to-tr from-pink-400 via-blue-300 to-green-500 dark:bg-gradient-to-tr dark:from-pink-400 dark:via-blue-300 dark:to-green-500'>
                  Blog
              </span>
          </h1>
          <h2 className="ml-8 xl:ml-12 2xl:ml-16 3xl:ml-32 text text-gray-900 dark:text-blueGray-100 tracking-tighter sm:tracking-tight font-black text-xl leading-tight xs:text-2xl xs:leading-tight sm:text-2xl sm:leading-tight md:text-3xl md:leading-tight lg:text-4xl lg:leading-tight xl:text-4xl xl:leading-tight 2xl:text-5xl 2xl:leading-tight 3xl:text-6xl 3xl:leading-tight 4xl:text-6xl 4xl:leading-tight">
            some of my tips, tutorial &<br /> collections. Check back for more.
          </h2>
        </div>

        <div className="blog-wrap mt-16 relative">
          <div className={`blog-filter right-0 lg:w-3/12 ${isFirstPage ? 'lg:absolute' : 'relative left-0 right-0 w-full mb-20' }`}>
            <h5 className='text-gray-800 text-xl font-semibold'>Filter Posts:</h5>
            <ul className={`flex flex-row flex-wrap mb-8 lg:max-w-xs ${isFirstPage ? '' : 'max-w-none flex-wrap lg:flex-nowrap' }`}>
              <li className='text-lg py-3 px-4 rounded-md bg-emerald-200 hover:bg-green-500 transform hover:scale-105 hover:text-white m-1 transition duration-300 cursor-pointer'>css</li>
              <li className='text-lg py-3 px-4 rounded-md bg-emerald-200 hover:bg-green-500 transform hover:scale-105 hover:text-white m-1 transition duration-300 cursor-pointer'>html</li>
              <li className='text-lg py-3 px-4 rounded-md bg-emerald-200 hover:bg-green-500 transform hover:scale-105 hover:text-white m-1 transition duration-300 cursor-pointer'>javascript</li>
              <li className='text-lg py-3 px-4 rounded-md bg-emerald-200 hover:bg-green-500 transform hover:scale-105 hover:text-white m-1 transition duration-300 cursor-pointer'>all</li>
              <li className='text-lg py-3 px-4 rounded-md bg-emerald-200 hover:bg-green-500 transform hover:scale-105 hover:text-white m-1 transition duration-300 cursor-pointer'>devtools</li>
              <li className='text-lg py-3 px-4 rounded-md bg-emerald-200 hover:bg-green-500 transform hover:scale-105 hover:text-white m-1 transition duration-300 cursor-pointer'>nowplaying</li>
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
                        className={`relative rounded-md p-4 flex  xl:flex-row flex-nowrap justify-between items-center w-full  bg-emerald-100 hover:bg-yellow-200 border-0 transition duration-200 ${
                            isFirstPage ? 'lg:group-first-of-type:w-2/3 group-first-of-type:bg-white group-first-of-type:border group-first-of-type:border-gray-400 group-first-of-type:border-opacity-50 lg:group-first-of-type:mb-12' : ''}`}
                      >
                          <div className={`hidden ${isFirstPage ? 'group-first-of-type:block absolute right-4 top-4 flex-grow-0 text-sm font-bold italic text-blue-900 py-2 px-4 bg-gray-100 border border-gray-400 border-opacity-50 text-center rounded-md' : '' }`}>newest</div>

                          <div className={`flex flex-row flex-nowrap justify-start items-start w-full xl:w-3/4 relative ${isFirstPage ? 'group-first-of-type:flex-wrap xl:group-first-of-type:pl-60 group-first-of-type:flex-col xl:group-first-of-type:w-4/5' : '' }`}>
                              <div className={`thumbnail hidden ${isFirstPage ? 'group-first-of-type:block xl:group-first-of-type:absolute group-first-of-type:left-0 group-first-of-type:w-60' : '' }`}><GatsbyImage image={image} alt={alt} /></div>
                              <div className={`date italic text-gray-700 w-2/12 text-xs md:text-sm lg:text-base mr-2 ${isFirstPage ? 'group-first-of-type:w-1/2' : 'xl:w-2/12'}`}>{post.node.date}</div>
                              <h4 className={`title flex-grow text-gray-800 text-base md:text-lg lg:text-xl font-medium transform group-hover:scale-105 transition duration-200 ${isFirstPage ? 'group-first-of-type:block group-first-of-type:text-gray-900 group-first-of-type:order-first group-first-of-type:text-3xl group-first-of-type:font-bold' : '' }`}>{title}</h4>
                              <div className={`category flex-grow-0 text-xs lg:text-sm italic text-gray-700 p-2 bg-white border border-gray-400 border-opacity-50 text-center rounded-md ${isFirstPage ? 'group-first-of-type:bg-transparent group-first-of-type:border-0 group-first-of-type:border-transparent group-first-of-type:block' : '' }`}>{post.node.categories.nodes[0].name}</div>
                              <div className={`excerpt hidden ${isFirstPage ? 'group-first-of-type:block group-first-of-type:text-lg' : '' }`} dangerouslySetInnerHTML={{ __html: post.node.excerpt}}></div>
                          </div>
                          <button className={`read-more text-2xl transform translate-x-0 group-hover:translate-x-4 transition duration-200 ${isFirstPage ? 'group-first-of-type:mt-10 xl:group-first-of-type:mt-0 group-first-of-type:self-start xl:group-first-of-type:self-center group-first-of-type:py-3 group-first-of-type:px-4 group-first-of-type:bg-emerald-500 group-first-of-type:text-white group-first-of-type:rounded-md' : '' }`}>
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
            <div className='mx-8 leading-none text-center rounded-md text-xl italic hover:text-green-500 transition duration-300'>← Newer posts</div>
          </Link> : null }
				
        { ! last ? 
        <Link to={ nextUrl }>
          <div className='mx-8 leading-none text-center rounded-md text-xl italic hover:text-green-500 transition duration-300'>Older posts →</div>
        </Link> : null }
			</div>

    </Layout>
  )
}

export default BlogIndex
