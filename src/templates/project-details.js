import React, { useEffect } from "react"
import { useLocation } from "@reach/router"
import { graphql, navigate } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { OutboundLink } from "gatsby-plugin-google-gtag"
import Seo from '../components/Seo'
import ShareButtons from '../components/Share'
import "../styles/blog.module.scss"

export default function ProjectDetails({ data }) {
    const location = useLocation()

    const { siteUrl } = data.site.siteMetadata

    const { html } = data.markdownRemark
    const { title, category, stack, url, featuredImg }  = data.markdownRemark.frontmatter

    const defaultImageSrc = featuredImg[0].src.childImageSharp.gatsbyImageData.images.fallback.src
    
    useEffect(() => {
        const replacers = document.querySelectorAll('[data-replace]')

        Array.from(replacers).forEach(NODE => {
          let replaceClasses = JSON.parse(NODE.dataset.replace.replace(/'/g, '"'))
  
          Object.keys(replaceClasses).forEach(function(key) {
            NODE.classList.remove(key)
            NODE.classList.add(replaceClasses[key])
          })
        })
    }, [])
    
    return (
        <>
            <Seo title={`Prince Bazawule - ${title}`} keywords={[`${title}`, `${stack}`, (category === 'design' ? `design` : `web`, `development`)]} description={String([(category === 'design' ? `Prince Bazawule - Details of design project: ${title}` : `Prince Bazawule - Details of web development project: ${title}`)])} image={`${siteUrl}${defaultImageSrc}`} url={location.href} />

            <section 
                className='post selection:bg-yellow-100 selection:text-blueGray-800 dark:selection:bg-teal-200 dark:selection:text-blueGray-900 bg-teal-50 bg-opacity-80 dark:bg-coolGray-900 min-h-full flex flex-col justify-between m-0 p-0 opacity-0 transition-opacity duration-500' data-replace='{ "opacity-0" : "opacity-100" }'
            >
        
                <div className={`mt-8 mb-16 flex flex-row justify-between items-center transform transition duration-300 w-11/12 2xl:w-10/12 mx-auto`}>

                        <header>
                            <h1 
                                itemProp="headline"
                                className="mb-8 text text-blueGray-900 dark:text-blueGray-100 tracking-tighter sm:tracking-tight font-black text-xl leading-tight xs:text-2xl xs:leading-tight sm:text-2xl sm:leading-tight md:text-3xl md:leading-tight lg:text-4xl lg:leading-tight xl:text-4xl xl:leading-tight 2xl:text-5xl 2xl:leading-tight 3xl:text-6xl 3xl:leading-tight 4xl:text-6xl 4xl:leading-tight"
                            >
                                {title}
                            </h1>
                            <div>
                                {/* <span className='italic text-gray-700 dark:text-blueGray-200 text-sm md:text-base 2xl:text-lg'>
                                    {date}
                                </span>  */}
                                <span className='mb-8 ml-4 text-sm md:text-base 2xl:text-lg italic text-blueGray-100 dark:text-blueGray-900 bg-blueGray-900 dark:bg-emerald-300 py-2 px-3 rounded-md'>
                                    {stack}
                                </span>
                            </div>
                        </header>

                        <button
                            className="menu-btn w-14 h-14 relative bg-transparent rounded z-50"
                            onClick={() => navigate(category === 'design' ? `/designer` : `/developer`)}
                            title='close'
                        >
                            <div className="group block w-5 absolute left-6 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                <span
                                className={`block absolute h-1.5 w-9 rounded-sm bg-current transform transition duration-300 ease-in-out text-emerald-500 dark:text-emerald-400 group-hover:text-blueGray-900 dark:group-hover:text-blueGray-100 rotate-45`}
                                ></span>
                                <span
                                className={`block absolute h-1.5 w-7 rounded-sm bg-current transform transition duration-300 ease-in-out text-emerald-500 dark:text-emerald-400 group-hover:text-blueGray-900 dark:group-hover:text-blueGray-100 opacity-0`}
                                ></span>
                                <span
                                className={`block absolute h-1.5 w-9 rounded-sm bg-current transform transition duration-300 ease-in-out text-emerald-500 dark:text-emerald-400 group-hover:text-blueGray-900 dark:group-hover:text-blueGray-100 -rotate-45`}
                                ></span>
                            </div> 
                        </button>
                </div>

                <div className='flex-grow w-11/12 2xl:w-10/12 mx-auto'>       
                    <article className="blog-post relative text-center">
                        
                        <section itemProp="articleBody flex flex-col flex-wrap justify-center">

                            <div 
                                className='blog-content mt-16 text-lg xl:text-xl 3xl:text-2xl break-normal'
                                dangerouslySetInnerHTML={{ __html: html}}
                            >
                            </div>

                            {featuredImg && (
                                featuredImg.map((item, index) => {

                                    const image = getImage(item.src.childImageSharp)
                                    const alt = title

                                    return (
                                        <GatsbyImage 
                                            key={index}
                                            image={image} 
                                            alt={alt}
                                            objectFit='contain'
                                            className='mb-16 xl:mb-24 border-16 bg-white border-white drop-shadow-lg block h-full 3xl:w-4/5 3xl:mx-auto'
                                        />
                                    )
                                })
                            )}
                            
                            {url && (
                            <div className='block w-full mx-auto'>
                                <OutboundLink 
                                    href={url}
                                    target='_blank'
                                    rel='noreferrer'
                                    title={`${title} project link`}
                                    className='inline-block'>
                                    <div className="inline-block my-0 xs:my-12 py-4 px-8 rounded-md bg-blueGray-900 hover:bg-emerald-100 dark:bg-emerald-300 dark:hover:bg-emerald-700 text-blueGray-100 hover:text-blueGray-900 dark:text-blueGray-900 dark:hover:text-blueGray-100 transform hover:scale-105 transition duration-300">
                                        <button className='text-2xl font-semibold'>view project</button>
                                    </div>
                                </OutboundLink>
                            </div>)}
                            
                            <div className="block my-12">
                                <div>
                                    <ShareButtons title={`View ${title}`} url={location.href} twitterHandle='princebazawule' tags={Array.from(stack.split(', '))} caption={String([(category === 'design' ? `Details for design project - ${title}` : `Details for web development project - ${title}`)])} />
                                </div>
                            </div>
                        </section>
                    </article>
                </div>
            </section>
        </>
    )
}

export const query = graphql`
query ProjectPages($slug: String) {
    markdownRemark(frontmatter: {slug: {eq: $slug}}) {
        frontmatter {
            title
            stack
            url
            date(formatString: "YYYY")
            category
            featuredImg {
                src {
                    childImageSharp {
                        gatsbyImageData(
                            width: 1280
                            placeholder: BLURRED
                            blurredOptions: {toFormat: NO_CHANGE}
                            formats: AUTO
                        )
                    }
                }
            }
        }
        html
    }

    site {
        siteMetadata {
            siteUrl
        }
    }
}
  
`