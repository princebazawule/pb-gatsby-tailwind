import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'

export default function Footer() {
    
    const data = useStaticQuery(graphql`
        query FooterInfo {
            site {
                siteMetadata {
                    author {
                        name
                        initials
                    }
                }
            }
        }
    `)

    const { author } = data.site.siteMetadata

    return (
        <footer className='pt-8 xl:px-20 pb-4 px-4 flex flex-wrap items-center justify-end text-sm text-gray-700 dark:text-blueGray-100 italic'>
            <p>&copy; {new Date().getFullYear()} — {author.name}</p>
        </footer>
    )
}
