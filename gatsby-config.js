/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Prince Bazawule`,
    author: {
      first_name: `Prince`,
      last_name: `Bazawule`,
      initials: `pb`,
      summary: `designer, developer, dj`,
    },
    description: `designer, developer, dj & gooner`,
    copyright: `2021 — princebazawule`,
    siteUrl: `http://localhost:8000`,
    social: [
      {
        network: `twitter`,
        link: `https://twitter.com/princebazawule`,
        artwork:``,
        color: `#34D399`
      },
      {
        network: `instagram`,
        link: `https://instagram.com/princebazawule`,
        artwork:``,
        color: `#34D399`
      },
      {
        network: `linkedin`,
        link: `https://linkedin.com/in/princebazawule`,
        artwork:``,
        color: `#34D399`
      },
      {
        network: `github`,
        link: `https://github.com/princebazawule`,
        artwork:``,
        color: `#34D399`
      },
      {
        network: `dribbble`,
        link: `https://dribbble.com/princebazawule`,
        artwork:``,
        color: `#34D399`
      },
      {
        network: `behance`,
        link: `https://behance.net/princebazawule`,
        artwork:``,
        color: `#34D399`
      },
    ],
    play: [
      {
        network: `spotify`,
        link: `https://open.spotify.com/user/princebazawule/playlists`,
        artwork: 'p_spotify.png',
        color: `#34D399`,
      },
      {
        network: `mixcloud`,
        link: `https://www.mixcloud.com/princebazawule/`,
        artwork: 'p_mixcloud.png',
        color: `#34D399`,
      },
      {
        network: `soundcloud`,
        link: `https://soundcloud.com/princebazawule/tracks`,
        artwork: 'p_soundcloud.png',
        color: `#34D399`,
      },
    ],
    shop: [
      {
        network: `society6`,
        link: `https://society6.com/princebazawule`,
        artwork:``,
        color: `#34D399`,
      },
      {
        network: `redbubble`,
        link: `https://www.redbubble.com/people/princebazawule/shop`,
        artwork:``,
        color: `#34D399`,
      },
      {
        network: `zazzle`,
        link: `https://www.zazzle.co.uk/`,
        artwork:``,
        color: `#34D399`,
      },
    ],
    defaultImage: "",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-dark-mode`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Poppins\:ital,wght@0,400;0,800;0,900;1,300` // you can also specify font weights and styles
        ],
        display: 'swap'
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
        cache_busting_mode: 'none'
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/blog/`, `/contact/`, `/designer/`, `/developer/`, `/dj/`, `/post/*`, `/project/*`],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.gstatic\.com/,
            handler: 'cacheFirst',
            options: {
              cacheableResponse: {
                statuses: [0, 200]
              },
              cacheName: 'google-fonts-webfonts',
              expiration: {
                maxAgeSeconds: 60 * 60,
                maxEntries: 30
              }
            }
          },
        ],
        workboxConfig: {
          globPatterns: ['**/icon-path*']
       }
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        postCssPlugins: [
          require("tailwindcss"),
          require("./tailwind.config.js"), // Optional: Load custom Tailwind CSS configuration
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/projects`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `designs`,
        path: `${__dirname}/src/designs`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `music`,
        path: `${__dirname}/src/music`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        url:
          process.env.WPGRAPHQL_URL || `http://princebazawule.com/graphql`,
        schema: {
          typePrefix: `Wp`,
        },
        develop: {
          hardCacheMediaFiles: true,
        },
        type: {
          Post: {
            limit:
              process.env.NODE_ENV === `development` ? 50 : 5000,
          },
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          'UA-12787182-1',
        ],
        gtagConfig: {
          anonymize_ip: true,
          cookie_expires: 0,
        },
        pluginConfig: {
          head: false,
          respectDNT: true,
          exclude: ['/preview/**', '/do-not-track/me/too/'],
        },
      },
    },
  ],
}
