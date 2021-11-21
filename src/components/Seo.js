import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
 
 function Seo({ description, lang, meta, keywords, title, image, url }) {
   const { site } = useStaticQuery(
     graphql`
       query {
         site {
           siteMetadata {
             title
             description
             author {
                first_name
                last_name
             }
           }
         }
       }
     `
   )
 
   const metaDescription = description || site.siteMetadata.description
   const metaImage =  image
   const metaUrl =  url
 
   return (
     <Helmet
       htmlAttributes={{
         lang,
       }}
       title={title}
       titleTemplate={`%s | ${site.siteMetadata.title}`}
       meta={[
         {
           name: `description`,
           content: metaDescription,
         },
         {
           property: `og:title`,
           content: title,
         },
         {
           property: `og:description`,
           content: metaDescription,
         },
         {
           property: `og:type`,
           content: `website`,
         },
         {
          property: `og:image`,
          content: metaImage,
         },
         {
          property: `og:url`,
          content: metaUrl,
         },
         {
           name: `twitter:card`,
           content: `summary_large_image`,
         },
         {
           name: `twitter:creator`,
           content: `${site.siteMetadata.author.first_name} ${site.siteMetadata.author.last_name}`
         },
         {
           name: `twitter:title`,
           content: title,
         },
         {
           name: `twitter:description`,
           content: metaDescription,
         },
       ]
         .concat(
           keywords.length > 0
             ? {
                 name: `keywords`,
                 content: keywords.join(`, `),
               }
             : []
         )
         .concat(meta)}
     />
   )
 }
 
 Seo.defaultProps = {
   lang: `en`,
   meta: [],
   keywords: [],
   description: ``,
 }
 
 Seo.propTypes = {
   description: PropTypes.string,
   lang: PropTypes.string,
   meta: PropTypes.arrayOf(PropTypes.object),
   keywords: PropTypes.arrayOf(PropTypes.string),
   title: PropTypes.string.isRequired,
 }
 
 export default Seo
 