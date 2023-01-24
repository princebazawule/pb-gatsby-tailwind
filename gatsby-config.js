/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

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
    description: `Prince Bazawule - Award-winning designer, experienced developer, DJ & Gooner`,
    copyright: `2021 — princebazawule`,
    siteUrl: `https://princebazawule.com`,
    cvLink: `https://drive.google.com/file/d/1PDjRWF8dPXca_5HODokvtLlRKQ0kJkXA/view?usp=sharing`,
    social: [
      {
        network: `twitter`,
        link: `https://twitter.com/princebazawule`,
        artwork:``,
        color: `green.lightGreen`
      },
      {
        network: `instagram`,
        link: `https://instagram.com/princebazawule`,
        artwork:``,
        color: `green.lightGreen`
      },
      {
        network: `linkedin`,
        link: `https://linkedin.com/in/princebazawule`,
        artwork:``,
        color: `green.lightGreen`
      },
      {
        network: `github`,
        link: `https://github.com/princebazawule`,
        artwork:``,
        color: `green.lightGreen`
      },
      {
        network: `dribbble`,
        link: `https://dribbble.com/princebazawule`,
        artwork:``,
        color: `green.lightGreen`
      },
      {
        network: `behance`,
        link: `https://behance.net/princebazawule`,
        artwork:``,
        color: `green.lightGreen`
      },
    ],
    play: [
      {
        network: `spotify`,
        link: `https://open.spotify.com/user/princebazawule/playlists`,
        artwork: 'p_spotify.png',
        color: `green.lightGreen`,
      },
      {
        network: `mixcloud`,
        link: `https://www.mixcloud.com/princebazawule/`,
        artwork: 'p_mixcloud.png',
        color: `green.lightGreen`,
      },
      {
        network: `soundcloud`,
        link: `https://soundcloud.com/princebazawule/tracks`,
        artwork: 'p_soundcloud.png',
        color: `green.lightGreen`,
      },
    ],
    shop: [
      {
        network: `society6`,
        link: `https://society6.com/princebazawule`,
        artwork:``,
        color: `green.lightGreen`,
      },
      {
        network: `redbubble`,
        link: `https://www.redbubble.com/people/princebazawule/shop`,
        artwork:``,
        color: `green.lightGreen`,
      },
      {
        network: `zazzle`,
        link: `https://www.zazzle.com/collections/tote_bags-119799191265928315`,
        artwork:``,
        color: `green.lightGreen`,
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
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://princebazawule.com`,
        stripQueryString: true,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `princeBazawule`,
        short_name: `princeBazawule`,
        start_url: `/`,
        background_color: `#D1FAE5`,
        theme_color: `#111827`,
        display: `standalone`,
        icon: `src/images/icon.png`,
        icon_options: {
          purpose: `any maskable`,
        },
        cache_busting_mode: 'none'
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-offline`,
    // {
    //   resolve: `gatsby-plugin-offline`,
    //   options: {
    //     precachePages: [`/blog/*`, `/blog/**/*`, `/category/*`, `/category/**/*`, `/contact/*`, `/designer/*`, `/developer/*`, `/dj/*`, `/post/*`, `/post/**/*`, `/project/*`, `/project/**/*`],
    //     workboxConfig: {
    //       globPatterns: ['*.html', '**/src/images/*']
    //     }
    //   },
    // },
    // `gatsby-plugin-offline`,
    // {
    //   resolve: `gatsby-plugin-offline`,
    //   options: {
    //     precachePages: [`/blog/*`, `/contact/*`, `/designer/*`, `/developer/*`, `/dj/*`, `/post/*`, `/project/*`],
    //     runtimeCaching: [
    //       {
    //         urlPattern: /^https:\/\/fonts\.gstatic\.com/,
    //         handler: 'cacheFirst',
    //         options: {
    //           cacheableResponse: {
    //             statuses: [0, 200]
    //           },
    //           cacheName: 'google-fonts-webfonts',
    //           expiration: {
    //             maxAgeSeconds: 60 * 60,
    //             maxEntries: 30
    //           }
    //         }
    //       },
    //     ],
    //     workboxConfig: {
    //       globPatterns: ['*.html', '**/src/images/*']
    //    }
    //   },
    // },
    {
      resolve: 'gatsby-plugin-htaccess',
      options: {
        RewriteBase: true,
        https: true,
        www: false,
        host: 'princebazawule.com',
        redirect: [
          'RewriteRule ^http://princebazawule.com/?$ https://princebazawule.com/ [R=301,L,NE]',
          {
            from: 'http://princebazawule.com/',
            to: 'https://princebazawule.com/',
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-page-progress",
      options: {
        includePaths: [{ regex: "^/post/" }],
        excludePaths: [],
        height: 5,
        prependToBody: false,
        color: `#10B981`,
        footerHeight: 500,
        headerHeight: 0,
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
          process.env.WPGRAPHQL_URL || `https://pixldinc.link/cms/princebazawulecms/graphql`,
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
