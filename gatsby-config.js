/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
const path = require(`path`);

module.exports = {

  siteMetadata: {
    title: `Hi! Haris is Here`,
    typing: [`iOS Engineer`,`Product Enthusiast`,`Frontend Engineer`,`Web Developer`, `Web Designer`],
    link: [`https://medium.com/@haris.fadhilah21`,`https://github.com/harisblablabla`,`https://linkedin.com/in/harris-fadhilah/`],
    about: [`Hi!, I’m Haris Fadhilah; living in Jakarta;a geek who loves sports, and films.`,
    `I am a highly motivated software engineer with 4 years of experience in delivering innovative software solutions. My expertise lies in product, iOS, and frontend web development, where I have demonstrated my ability to design and develop user-friendly applications. My strong technical background, combined with experience working on a product, enables me to bring a unique perspective to any project I work on.`,
    `Throughout my career, I have honed my project management skills, working in Agile environments and collaborating with cross-functional teams. I am passionate about delivering high-quality software solutions that meet the needs of end-users and drive business success.`,
    `For any enquiries, or just to say hello, get in touch and contact me on`
  ]
  },
  plugins: [ 
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-197583551-1",
        head: true
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'images',
        path: path.join(__dirname, `src`, `images`),
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'data',
        path: path.join(__dirname,`src`,`data`)
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
      plugins: [
        {
          resolve: `gatsby-remark-images`,
          options: {
            maxWidth: 590
          }
        },
        `gatsby-remark-lazy-load`,
      ]
      } 
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Roboto\:300,400`,
          `Montserrat\:400,500,600`
        ],
        display: 'swap'
      }
    }
],
}
