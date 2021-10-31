const { slash } = require( `gatsby-core-utils` );
const singlePostPageTemplate = require.resolve(`../src/templates/Post.js`);

// Get all the posts.
const GET_POSTS = `
query WpPosts {
    allWpPost(sort: { fields: [date], order: DESC }) {
      edges {
        previous {
          id
        }

        # note: this is a GraphQL alias. It renames "node" to "post" for this query
        # We're doing this because this "node" is a post! It makes our code more readable further down the line.
        post: node {
          __typename
          id
          uri
        }

        next {
          id
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

				const { allWpPost } = data;

                // console.log(allWpPost.edges)

				return { posts: allWpPost.edges };
			} );
	};

	// When the above fetchPosts is resolved, then loop through the results i.e posts to create posts.
	await fetchPosts().then( ( { posts } ) => {

		// 2. Create Single PAGE: Loop through all posts and create single posts for posts.
		posts &&
		posts.map( ({ previous, post, next }) => {

			createPage( {
				path: `/post${ post.uri }`,
				component: slash( singlePostPageTemplate ),
				context: { 
                    id: post.id,
                    previousPostId: previous ? previous.id : null,
                    nextPostId: next ? next.id : null,
                 },
			} );

		} );

	} )

};