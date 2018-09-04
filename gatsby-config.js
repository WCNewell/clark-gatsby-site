module.exports = {
  siteMetadata: {
    title: 'Clark Newell',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/BlogPosts`,
        name: 'blog-posts',
      }
    },
    'gatsby-transformer-remark'
  ],
}
