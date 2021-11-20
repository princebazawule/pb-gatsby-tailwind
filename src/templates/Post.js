import React from "react"
import { useLocation } from "@reach/router"
import { Link, graphql } from "gatsby"
import Layout from "../components/Layout"
import Seo from '../components/Seo'
import ShareButtons from '../components/Share'
import { PostCode } from "./PostCode"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import parse, {domToReact} from 'html-react-parser'
import "../styles/blog.module.scss"

const BlogPostTemplate = ({ data: { previous, next, post } }) => {
  const location = useLocation()

  // console.log(data)

  const image = getImage(post.featuredImage.node.localFile)
  const alt = post.featuredImage.node.altText

  const replaceCode = node => {
    if (node.name === 'pre') {
      return node.children.length > 0 && <PostCode language={getLanguage(node)}>{domToReact(getCode(node))}</PostCode>
    }
  };

  const getLanguage = node => {
    if (node.attribs.class != null) {
      return node.attribs.class;
    }
    return null;
  };

  const getCode = node => {
    if (node.children.length > 0 && node.children[0].name === 'code') {
      return node.children[0].children;
    } else {
      return node.children;
    }
  };

  return (
    <Layout>
      <Seo title={post.title} keywords={[`${post.categories.nodes[0].name}`, `blog`, `tips`, `tutorials`, `resources`, `freebies`]} description={`Prince Bazawule - Details of blog post: ${post.title}`} />

      <section 
        className="post xl:min-h-8/10 py-8 sm:py-6 xs:px-10 sm:px-14 md:px-16 lg:px-20 xl:px-4 2xl:px-8 flex flex-col lg:flex-row flex-nowrap justify-center items-start sm:flex-initial"
      >
        <div className='flex-grow-0 flex flex-row flex-nowrap items-center mr-12'>
          <Link
              to="/blog"
              activeClassName="active"
            >
              <h1 className="text text-blueGray-900 dark:text-blueGray-100 tracking-tighter sm:tracking-tight font-black text-4xl leading-normal xs:text-5xl xs:leading-normal sm:text-6xl sm:leading-normal md:text-7xl md:leading-normal lg:text-8xl lg:leading-normal xl:text-8xl xl:leading-normal 2xl:text-8xl 2xl:leading-normal 3xl:text-9xl 3xl:leading-normal 4xl:text-10xl 4xl:leading-normal">
                  <span className='transition duration-300 ease-in-out bg-clip-text text-transparent bg-gradient-to-tr from-pink-400 via-blue-300 to-green-500 dark:bg-gradient-to-tr dark:from-pink-400 dark:via-blue-300 dark:to-green-500'>
                      Blog
                  </span>
              </h1>
            </Link>
        </div>

        <div className='flex-grow w-full'>
          <article
            className="blog-post relative 2xl:w-4/5"
            itemScope
            itemType="http://schema.org/Article"
          >
            <header>
              <GatsbyImage 
                image={image} 
                alt={alt}
                className='border-16 bg-white border-white drop-shadow-lg h-64 w-full aspect-w-16 aspect-h-6'
              />
              <h1 
                itemProp="headline"
                className="mt-16 mb-4 text text-blueGray-900 dark:text-blueGray-100 tracking-tighter sm:tracking-tight xl:tracking-tighter font-black text-xl leading-tight xs:text-2xl xs:leading-tight sm:text-2xl sm:leading-tight md:text-3xl md:leading-tight lg:text-4xl lg:leading-tight xl:text-4xl xl:leading-tight 2xl:text-5xl 2xl:leading-tight 3xl:text-6xl 3xl:leading-tight 4xl:text-6xl 4xl:leading-tight"
              >
                {post.title}
              </h1>
              <div>
                <span className='italic text-gray-700 dark:text-blueGray-100'>
                  {post.date}
                </span> 
                <span className='ml-4 italic text-blueGray-100 dark:text-blueGray-900 bg-blueGray-900 dark:bg-emerald-300 py-2 px-3 rounded-md'>
                  {post.categories.nodes[0].name}
                </span>
                <span className='italic text-gray-700 dark:text-blueGray-100 ml-2'>
                 • {post.acfPosts.readingTime} {post.acfPosts.readingTime === 1 ? `min` : `mins`}.
                </span> 
              </div>
            </header>

            {!!post.content && (
              <section 
                itemProp="articleBody" 
              >
                <div 
                  className='blog-content mt-16 text-lg xl:text-xl 3xl:text-2xl break-normal'
                >
                  {parse(post.content, {replace: replaceCode})}
                </div>
              </section>
            )}
          </article>

          <nav className="blog-post-nav mt-20">
            <div
            className='flex flex-wrap justify-center list-none p-0'
            >
              <div>
                {previous && (
                  <Link to={`/post${previous.uri}`} rel="prev">
                    <div className='mx-6 my-4 leading-none text-center rounded-md text-xl italic text-blueGray-900 dark:text-emerald-300 hover:text-emerald-500 dark:hover:text-emerald-100 transition duration-200'>
                      ← {previous.title}
                    </div>
                  </Link>
                )}
              </div>
              {(previous && next) && <div className='mx-6 my-4 hidden md:block text-blueGray-900 dark:text-emerald-300'>|</div>}

              <div>
                {next && (
                  <Link to={`/post${next.uri}`} rel="next">
                    <div className='mx-6 my-4 leading-none text-center rounded-md text-xl italic text-blueGray-900 dark:text-emerald-300 hover:text-emerald-500 dark:hover:text-emerald-100 transition duration-200'>
                    {next.title} →
                  </div>
                  </Link>
                )}
              </div>
            </div>
          </nav>
        </div> 

        <div className="block my-12">
          <div>
              <ShareButtons title={`View ${post.title}`} url={location.href} twitterHandle='princebazawule' tags={[post.categories.nodes[0].name]} caption={`Read the blog post - ${post.title}`} />
          </div>
        </div>

      </section>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
query BlogPostById(
  # these variables are passed in via createPage.pageContext in gatsby-node.js
  $id: String!
  $previousPostId: String
  $nextPostId: String
) {
  # selecting the current post by id
  post: wpPost(id: { eq: $id }) {
    id
    content
    title
    categories {
      nodes {
        name
      }
    }
    date(formatString: "DD MMM, 'YY")
    featuredImage {
      node {
        localFile {
          childImageSharp {
            gatsbyImageData(
              width: 500
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
              blurredOptions: {toFormat: NO_CHANGE}
            )
          }
        }
        altText
      }
    }
    acfPosts {
      readingTime
    }
  }

  # this gets us the previous post by id (if it exists)
  previous: wpPost(id: { eq: $previousPostId }) {
    uri
    title
  }

  # this gets us the next post by id (if it exists)
  next: wpPost(id: { eq: $nextPostId }) {
    uri
    title
  }
}
`