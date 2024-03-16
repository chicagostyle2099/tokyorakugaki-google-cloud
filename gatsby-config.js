/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `tokyorakugaki`,
    siteUrl: `https://www.tokyorakugaki.com`
  },
  plugins: [  
    {
      resolve: "gatsby-plugin-google-gtag",
        options: {
          trackingIds: ['G-6V94Z95MHZ'],
          head: true,
          anonymize: true,
        },
      },
  
  "gatsby-plugin-image", "gatsby-plugin-sitemap", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }
  }, "gatsby-plugin-mdx", "gatsby-transformer-remark", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"  
  }, 
//   {
//     resolve: 'gatsby-plugin-google-gtag',  
//     options: {
//     trackingIds: [
//       'G-6V94Z95MHZ',
//     ],
//   },
//   __key: "googleGtag",
// },
]
};