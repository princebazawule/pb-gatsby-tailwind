const { slash } = require( `gatsby-core-utils` );
const singlePageTemplate = require.resolve(`../src/templates/blog-page.js`);
const createPaginatedPages = require('gatsby-paginate');

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
}
`

module.exports = async ( { actions, graphql } ) => {

	const { createPage } = actions;

	const fetchPosts = async () => {

		return await graphql( GET_POSTS )
			.then( ( { data } ) => {
				const { allWpPost: { posts } } = data;
				return { posts: posts };
			} );
	};

	await fetchPosts().then( ( { posts } ) => {
		
        createPaginatedPages({
			edges: posts,
			createPage: createPage,
			pageTemplate: singlePageTemplate,
			pageLength: 10,
			pathPrefix: 'blog',
			context: {},
		});

		posts && posts.map( async (page) => {
			if ( undefined === page.node.uri ) {
				return;
			}

			createPage( {
				path: `/blog${ page.node.uri }`,
				component: slash( singlePageTemplate ),
				context: { ...page },
			} );
		} );
	} )
};