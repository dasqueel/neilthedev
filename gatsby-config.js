module.exports = {
  siteMetadata: {
    title: 'Neil the Dev',
    author: 'Neil Barduson',
    description: 'Landing page for Neil Barduson S-Corp',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'neil the dev landing page',
        short_name: 'landing page',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        // icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site. add icon later
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
  ],
}
