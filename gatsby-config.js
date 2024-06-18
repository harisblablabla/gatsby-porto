/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
const path = require(`path`);

module.exports = {

  siteMetadata: {
    title: `Hi! Haris is Here`,
    typing: [`Risk Management Consultant`,`Fullstack Engineer`,`UI Designer`],
    link: [`https://medium.com/@haris.fadhilah21`,`https://github.com/harisblablabla`,`https://linkedin.com/in/harris-fadhilah/`],
    about: [`Hi!, I’m Haris Fadhilah; living in Jakarta; loves sports, and films. (cinephile??)`,
    `I am a highly motivated person with four years of experience in delivering innovative products. where I have demonstrated my ability to design and develop user-friendly applications. My strong technical background, combined with experience working on a product, enables me to bring a unique perspective to any project I work on.`,
    `Throughout my career, I have honed my communication skills, working in Agile environments and collaborating with cross-functional teams. I am passionate about delivering high-quality products that meet the needs of end-users and drive business success.`,
    `Currently work as a risk management consultant with a passion for improving financial literacy in Indonesian society. My mission is to empower individuals with the knowledge to effectively manage financial risks. Through my expertise in software development and financial consulting, I strive to create innovative solutions that make financial concepts and risk management accessible to everyone.`,
    `Join me on this journey as we work together to enhance the financial well-being of individuals by send message to`,
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
