const dotenv = require("dotenv")
dotenv.config()


module.exports = {
    siteMetadata: {
        title: `mJamsek`,
        description: `Personal website`,
        author: `Miha Jamsek`,
        siteUrl: "https://mjamsek.com"
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `locale`,
                path: `${__dirname}/static/locales`
            }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `projects`,
                path: `${__dirname}/src/content/projects`
            }
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        "gatsby-plugin-sitemap",
        "gatsby-plugin-robots-txt",
        {
            resolve: "gatsby-plugin-google-fonts",
            options: {
                fonts: [
                    "source sans pro",
                    "roboto"
                ]
            }
        },
        /*{
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-starter-default`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/images/gatsby-icon.png` // This path is relative to the root of the site.
            }
        },*/
        {
            resolve: `gatsby-plugin-sass`,
            options: {
                implementation: require("node-sass"),
                sassOptions: {
                    precision: 6
                }
            }
        },
        `gatsby-plugin-typescript`,
        `gatsby-transformer-json`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: "gatsby-source-graphql",
            options: {
                typeName: "GitHub",
                fieldName: "github",
                url: "https://api.github.com/graphql",
                headers: {
                    Authorization: `Bearer ${process.env.GITHUB_TOKEN}`
                }
            }
        },
        {
            resolve: "gatsby-plugin-react-i18next",
            options: {
                localeJsonSourceName: "locale",
                languages: ["sl", "en"],
                defaultLanguage: "sl",
                siteUrl: "https://mjamsek.com",
                redirect: false,
                i18nextOptions: {
                    interpolation: {
                        escapeValue: false // not needed for react as it escapes by default
                    },
                    keySeparator: ".",
                    nsSeparator: ":"
                }
            }
        }
    ]
}
