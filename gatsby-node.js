// const path = require(`path`)
// const chunk = require(`lodash/chunk`)

// // This is a simple debugging tool
// // dd() will prettily dump to the terminal and kill the process
// // const { dd } = require(`dumper.js`)


// /**
//  * exports.createPages is a built-in Gatsby Node API.
//  * It's purpose is to allow you to create pages for your site! 💡
//  *
//  * See https://www.gatsbyjs.com/docs/node-apis/#createPages for more info.
//  */
// exports.createPages = async gatsbyUtilities => {
//   // Query our posts from the GraphQL server
//   const posts = await getNodes(gatsbyUtilities)

//   // If there are no posts in WordPress, don't do anything
//   if (!posts.length) {
//     return
//   }

//   // If there are posts and pages, create Gatsby pages for them
//   await createSinglePages({ posts, gatsbyUtilities })

//   // And a paginated archive
//   await createBlogPostArchive({ posts, gatsbyUtilities })

//   // If there are markdown files, create Gatsby pages for them
//   await createMarkdownPages({ posts, gatsbyUtilities })

// }

// /**
//  * This function creates all the individual blog pages in this site
//  */
// const createSinglePages = async ({ posts, gatsbyUtilities }) => {
//   // const pees = posts.filter(item => item.post.__typename !== undefined)
//   Promise.all(
//     // pees.map(({ previous, post, next }) => {
//     posts.map(({ previous, post, next }) => {
//       // if ('__typename' in post) {

//         // console.log(post.__typename)

//         gatsbyUtilities.actions.createPage({
//           path: `/post${post.uri}`,
//           component: path.resolve(`./src/templates/${post.__typename.replace(`Wp`, ``)}.js`),
//           context: {
//             id: post.id,
//             previousPostId: previous ? previous.id : null,
//             nextPostId: next ? next.id : null,
//           },
//         })
//       // }
//     })
//   )
// }

// /**
//  * This function creates all the individual blog pages in this site
//  */
// async function createBlogPostArchive({ posts, gatsbyUtilities }) {
  
//   // const pees = posts.filter(item => item.post.__typename !== undefined)
//     const graphqlResult = await gatsbyUtilities.graphql(/* GraphQL */ `
//       {
//         wp {
//           readingSettings {
//             postsPerPage
//           }
//         }
//       }
//     `)

//     const { postsPerPage } = graphqlResult.data.wp.readingSettings

//     // const els = posts.filter(item => item.post.__typename !== undefined)

//     const postsChunkedIntoArchivePages = chunk(posts, postsPerPage)
//     const totalPages = postsChunkedIntoArchivePages.length

//     return Promise.all(
//       postsChunkedIntoArchivePages.map(async (_posts, index) => {
//           const pageNumber = index + 1

//           const getPagePath = page => {
//             if (page > 0 && page <= totalPages) {
//               return page === 1 ? `/blog` : `/blog/${page}`
//             }
//             return null
//           }

//           await gatsbyUtilities.actions.createPage({
//             path: getPagePath(pageNumber),
//             component: path.resolve(`./src/templates/blog-post-archive.js`),
//             context: {
//               offset: index * postsPerPage,
//               postsPerPage,
//               nextPagePath: getPagePath(pageNumber + 1),
//               previousPagePath: getPagePath(pageNumber - 1),
//             },
//           }) 
//       })
//     )
// }

// /**
//  * This function creates all the individual blog pages in this site
//  */
//  const createMarkdownPages = async ({ posts, gatsbyUtilities }) => {

//   // const ems = posts.filter(item => item.frontmatter !== undefined)
//   Promise.all(
//     // ems.map((post) => {
//       posts.map((post) => {
//        if ('frontmatter' in post) {
//         //  console.log(post.frontmatter.slug)

//          gatsbyUtilities.actions.createPage({
//            path: `/projects/${post.frontmatter.slug}`,
//            component: path.resolve(`./src/templates/project-details.js`),
//            context: {
//              slug: post.frontmatter.slug,
//            },
//          })
//        }
//      })
//    )
// }



// /**
//  * This function queries Gatsby's GraphQL server and asks for
//  * All WordPress blog posts. If there are any GraphQL error it throws an error
//  * Otherwise it will return the posts 🙌
//  *
//  * We're passing in the utilities we got from createPages.
//  * So see https://www.gatsbyjs.com/docs/node-apis/#createPages for more info!
//  */
// async function getNodes({ graphql, reporter }) {
//   const graphqlResult = await graphql(/* GraphQL */ `
//     query WpPosts {
//       allMarkdownRemark {
//         post: nodes {
//           frontmatter {
//             slug
//           }
//         }
//       }

//       allWpPage(sort: { fields: [date], order: DESC }) {
//         edges {
//           previous {
//             id
//           }

//           # note: this is a GraphQL alias. It renames "node" to "post" for this query
//           # We're doing this because this "node" is a post! It makes our code more readable further down the line.
//           post: node {
//             __typename
//             id
//             uri
//           }

//           next {
//             id
//           }
//         }
//       }
  
//       allWpPost(sort: { fields: [date], order: DESC }) {
//         edges {
//           previous {
//             id
//           }

//           # note: this is a GraphQL alias. It renames "node" to "post" for this query
//           # We're doing this because this "node" is a post! It makes our code more readable further down the line.
//           post: node {
//             __typename
//             id
//             uri
//           }

//           next {
//             id
//           }
//         }
//       }
//     }
//   `)

//   if (graphqlResult.errors) {
//     reporter.panicOnBuild(
//       `There was an error loading your blog posts`,
//       graphqlResult.errors
//     )
//     return
//   }

//   return [
//     ...graphqlResult.data.allWpPost.edges,
//     ...graphqlResult.data.allWpPage.edges,
//     // ...graphqlResult.data.allMarkdownRemark.post
//   ]
// }




const createAllMarkdownPages = require( './create-pages/projects' )
const createAllPosts = require( './create-pages/posts' )
const createBlogPage = require( './create-pages/archive' )

const path = require( 'path' )

// Create all pages.
exports.createPages = async ( { actions, graphql } ) => {
	await createAllMarkdownPages( { actions, graphql } )
	await createAllPosts( { actions, graphql } )
	await createBlogPage( { actions, graphql } )
};