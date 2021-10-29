import React from "react"
import { graphql } from "gatsby"


const PageTemplate = ({ data: { previous, next, post } }) => {
//   const featuredImage = {
//     fluid: post.featuredImage?.node?.localFile?.childImageSharp?.fluid,
//     alt: post.featuredImage?.node?.alt || ``,
//   }

  return (
    <p>hello!</p>
  )
}

export default PageTemplate

export const pageQuery = graphql`
  query PageById(
    # these variables are passed in via createPage.pageContext in gatsby-node.js
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    # selecting the current post by id
    post: wpPage(id: { eq: $id }) {
      id
      content
      title
      date(formatString: "MMMM DD, YYYY")

      featuredImage {
        node {
          altText
          localFile {
            childImageSharp {
              fluid(maxWidth: 1000, quality: 100) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
      }
    }

    # this gets us the previous post by id (if it exists)
    previous: wpPage(id: { eq: $previousPostId }) {
      uri
      title
    }

    # this gets us the next post by id (if it exists)
    next: wpPage(id: { eq: $nextPostId }) {
      uri
      title
    }
  }
`
