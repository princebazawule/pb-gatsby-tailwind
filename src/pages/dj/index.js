import { graphql } from "gatsby"
import React from 'react'
import Layout from '../../components/Layout'
import MusicGallery from '../../components/MusicGallery'
import '../../styles/dj.module.scss'

export default function dj({ data }) {

    console.log(data)
    
    return (
        <>
            <Layout>
                <section className="xl:min-h-8/10 py-8 sm:py-6 xs:px-10 sm:px-14 md:px-16 lg:px-20 xl:px-4 2xl:px-8 flex flex-col justify-center sm:flex-initial">
                    <h1 className="text text-gray-900 dark:text-blueGray-100 tracking-tighter sm:tracking-tight font-black text-4xl leading-normal xs:text-5xl xs:leading-normal sm:text-6xl sm:leading-normal md:text-7xl md:leading-normal lg:text-8xl lg:leading-normal xl:text-8xl xl:leading-normal 2xl:text-8xl 2xl:leading-normal 3xl:text-9xl 3xl:leading-normal 4xl:text-10xl 4xl:leading-normal">
                        <span className='transition duration-300 ease-in-out bg-clip-text text-transparent bg-gradient-to-r from-green-300 to-purple-400 dark:bg-gradient-to-br dark:from-green-300 dark:to-purple-400'>
                            DJ<span className='text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl 2xl:text-6xl 3xl:text-7xl 4xl:text-8xl'>-ing</span>
                        </span>
                    </h1>

                    <h2 className="mb-8 lg:mb-14 xs:mt-2 text text-gray-900 dark:text-blueGray-100 tracking-tighter sm:tracking-tight font-black text-2xl leading-none xs:text-3xl xs:leading-none sm:text-4xl sm:leading-none md:text-5xl md:leading-none lg:text-5xl lg:leading-none xl:text-5xl xl:leading-none 2xl:text-5xl 2xl:leading-none 3xl:text-6xl 3xl:leading-none 4xl:text-6xl 4xl:leading-none">
                        music provides the soundtrack to<br /> everything i do
                    </h2>
                    
                    <p className="mb-8 text text-gray-800 dark:text-blueGray-100 tracking-tighter sm:tracking-tight font-normal text-xl leading-normal xs:text-2xl xs:leading-normal sm:text-2xl sm:leading-normal md:text-2xl md:leading-normal lg:text-2xl lg:leading-normal xl:text-2xl xl:leading-normal 2xl:text-3xl 2xl:leading-normal 3xl:text-3xl 3xl:leading-normal 4xl:text-3xl 4xl:leading-normal">
                        i love discovering, curating &amp; playing out.
                    </p>
                    <p className="mb-8 text text-gray-800 dark:text-blueGray-100 tracking-tighter sm:tracking-tight font-normal text-xl leading-normal xs:text-2xl xs:leading-normal sm:text-2xl sm:leading-normal md:text-2xl md:leading-normal lg:text-2xl lg:leading-normal xl:text-2xl xl:leading-normal 2xl:text-3xl 2xl:leading-normal 3xl:text-3xl 3xl:leading-normal 4xl:text-3xl 4xl:leading-normal">
                        Checkout some of my <i>mixes</i>, <i>podcasts</i> &amp; <i>playlists</i>.<br />Catch me live if you can.
                    </p>
                </section>

                <MusicGallery data={data} />

            </Layout>
        </>
    )
}

export const query = graphql`
  query DeejayPage {
    site {
        siteMetadata {
            play {
              artwork
              color
              link
              network
            }
        }
    }
}`