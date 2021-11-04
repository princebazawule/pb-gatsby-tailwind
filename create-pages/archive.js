const { slash } = require( `gatsby-core-utils` );
const singlePageTemplate = require.resolve(`../src/templates/blog-post-archive.js`);
const createPaginatedPages = require('gatsby-paginate');

// Get all the posts.
const GET_POSTS = `
query WpAllCategories {
    allWpCategory {
      categories: edges {
        node {
          name
          slug
          uri
          id
          posts {
            nodes {
              excerpt
              title
              categories {
                nodes {
                  name
                }
              }
              uri
              date(formatString: "DD MMM, 'YY")
              author {
                node {
                  name
                }
              }
              featuredImage {
                node {
                  localFile {
                    childImageSharp {
                      gatsbyImageData(
                        width: 750
                        placeholder: BLURRED
                        blurredOptions: {toFormat: NO_CHANGE}
                        formats: [AUTO, WEBP, AVIF]
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
          }
        }
      }
    }
  }
  
`

module.exports = async ( { actions, graphql } ) => {

	const { createPage } = actions;

	const fetchPosts = async () => {

		// Do query to get all posts and posts, this will return the posts and posts.
		return await graphql( GET_POSTS )
			.then( ( { data } ) => {

				const { allWpCategory: { categories } } = data;

				return { categories: categories };
			} );
	};

	// When the above fetchPosts is resolved, then loop through the results i.e posts to create posts.
	await fetchPosts().then( ( { categories } ) => {

        // 2. Create Single PAGE: Loop through all categories and create single archive page for posts.
        categories &&
		categories.map( ( category ) => {

            /**
			 * Create Archive Pages with Pagination.
			 * This will create a each paginaion page in this loop at different URLs ( category.node.uri ) e.g. /category/adventure/
			 * And category ( which contains posts that belong to that category will be available )
			 *
			 * Paginated pages will be available at e.g. ( /category/adventure/ /category/adventure/2, /category/adventure/3 ) etc.
			 */
            createPaginatedPages({
                edges: category.node.posts.nodes,
                createPage: createPage,
                pageTemplate: singlePageTemplate,
                pageLength: 10, // This is optional and defaults to 10 if not used
                pathPrefix: `${ category.node.uri.replace(/^\/|\/$/g, '') }`, // This is optional and defaults to an empty string if not used ( replaced the begining and trailing slash ),
                context: { ...category, ...categories }, // This is optional and defaults to an empty object if not used
            });
        })
	} )

};