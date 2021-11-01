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