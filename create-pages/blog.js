const { slash } = require( `gatsby-core-utils` );
const singlePageTemplate = require.resolve(`../src/templates/blog-page.js`);
const createPaginatedPages = require('gatsby-paginate');

// Get all the posts.
const GET_POSTS = `
query WpAllPosts {
    allWpPost(limit: 5000) {
            posts: edges {
                node {
                    excerpt
                    title
                    categories {
                        nodes {
                            name
                        }
                    }
                    uri
                    date(formatString: "DD MMM, 'YY")
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

				const { allWpPost: { posts } } = data;
                const { allWpCategory: { categories } } = data;

				return { 
                    posts: posts,
                    categories: categories 
                };
			} );
	};

	// When the above fetchPosts is resolved, then loop through the results i.e posts to create posts.
	await fetchPosts().then( ( { posts, categories } ) => {
        
        console.log('catzz...', categories)
		
        createPaginatedPages({
			edges: posts,
			createPage: createPage,
			pageTemplate: singlePageTemplate,
			pageLength: 10, // This is optional and defaults to 10 if not used
			pathPrefix: 'blog', // This is optional and defaults to an empty string if not used
			context: { ...categories }, // This is optional and defaults to an empty object if not used
		});

		// 2. Create Single PAGE: Loop through all posts and create single posts for posts.
		posts && posts.map( async (page) => {

            // console.log('this...', JSON.stringify(page.node, null, 2))

			if ( undefined === page.node.uri ) {
				return;
			}

			createPage( {
				path: `/blog${ page.node.uri }`,
				component: slash( singlePageTemplate ),
				context: { ...page, ...categories }, // pass single post page data in context, so its available in the singlePagetTemplate in props.pageContext.
			} );

		} );

	} )

};