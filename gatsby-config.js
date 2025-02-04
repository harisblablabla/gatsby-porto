/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
const path = require(`path`);

module.exports = {

  siteMetadata: {
    title: `Hi! Haris is Here`,
    typing: [`Frontend Web Engineer`,`Fullstack Software Engineer`,`Mobile Engineer`,`UI Designer`],
    link: [`https://medium.com/@haris.fadhilah21`,`https://github.com/harisblablabla`,`https://linkedin.com/in/harris-fadhilah/`],
    about: [`Hello there! I’m Haris Fadhilah, a full-stack software engineer based in Jakarta with a passion for crafting seamless digital experiences. With five years of experience, I specialize in frontend web development using Next.js and React.js, as well as mobile app development with Flutter and SwiftUI. My expertise lies in building intuitive, high-performance applications that enhance user engagement and satisfaction.`,
    `Throughout my career, I have worked on diverse projects, collaborating with cross-functional teams in Agile environments. My problem-solving skills and attention to detail allow me to create scalable and maintainable solutions that align with business goals. I am always eager to explore new technologies and refine my development workflow to stay ahead in the ever-evolving tech landscape.`,
    `Currently, I embrace remote and freelance opportunities, which allow me the flexibility to work with clients around the globe and tackle a variety of projects. If you're looking for a developer who combines technical expertise with a creative approach, let's connect by send message to`,
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
        trackingId: "G-H0V4Q33ZS3",
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
