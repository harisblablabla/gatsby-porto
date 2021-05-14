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
    about: [`Hmm hello, I’m Haris Fadhilah; you can call me Haris/Harris; living in Jakarta;a geek who loves sports (basketball/football/american football/skate/Etc.), films, and history `,
    `I am a Software Engineer who is highly motivated to learn/explore new tech with a two-years professional career. Familiar with fintech system (payment gateway). Specialties in frontend development (Angular,React.js) and UI Design (UID). Backend has experience with Java (Spring Boot).`,
    `I currently worked at DOKU, PT Nusa Satu Inti Artha, in the payment directorate (growth division). I was responsible for the new back office DOKU payment. DOKU tech stack for frontend development using angular, but outside of my work on DOKU, I used react.js for frontend. And I had experience in DOKU with Spring Boot, automated software testing, and are used to working with the agile.`,
    `For any enquiries, or just to say hello, get in touch and contact me on`
  ]
  },
  plugins: [ 
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-yaml`, {
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
    }
],
}
