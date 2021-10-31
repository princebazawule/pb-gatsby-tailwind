// const { slash } = require( `gatsby-core-utils` );
const singlePostPageTemplate = require.resolve(`../src/templates/project-details.js`);
const path = require( 'path' );

// Get all the posts.
const GET_PROJECTS = `
query MarkdownPosts {
    allMarkdownRemark {
      post: nodes {
        frontmatter {
          slug
        }
      }
    }
}
`

module.exports = async ( { actions, graphql } ) => {

	const { createPage } = actions;

	const fetchPosts = async () => {

		// Do query to get all posts and posts, this will return the posts and posts.
		return await graphql( GET_PROJECTS )
			.then( ( { data } ) => {

				const { allMarkdownRemark } = data;

                // console.log(allMarkdownRemark.post)

				return { posts: allMarkdownRemark.post };
			} );
	};

	// When the above fetchPosts is resolved, then loop through the results i.e posts to create posts.
	await fetchPosts().then( ( { posts } ) => {

		// 2. Create Single PAGE: Loop through all posts and create single posts for posts.
		posts &&
		posts.map( post => {

            // console.log(post.frontmatter.slug)
            
			createPage( {
				path: `/project/${post.frontmatter.slug}`,
                component: path.resolve(`./src/templates/project-details.js`),
                context: {
                  slug: post.frontmatter.slug,
                },
			} );

		} )
    })
}
