/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
const path = require(`path`);

module.exports = {

  siteMetadata: {
    title: `Hi! Haris is Here`,
    typing: [`Software Engineer`,`Frontend Engineer`,`Frontend Dev`,`UI Designer`,`UX Enthusiast`,`Web Developer`, `Web Designer`],
    link: [`https://medium.com/@haris.fadhilah21`,`https://github.com/harisblablabla`,`https://linkedin.com/in/harris-fadhilah/`],
    about: [`hello, I’m Haris Fadhilah; living in Jakarta;a geek who loves sports, and films.`,
    `I am a Software Engineer who is highly motivated to learn or explore technology with a two-years professional career. Familiar with fintech system (payment gateway). Specialties in frontend development (Angular,React.js) and UI Design. Backend has experience with Java (Spring Boot).`,
    `I currently worked at DOKU, PT Nusa Satu Inti Artha; has successfully created Jokul by DOKU (integrated payment platform) with Angular micro frontend, and are used to working in the agile.`,
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
        trackingId: "G-VJB517RVFT",
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
