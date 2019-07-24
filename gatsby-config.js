module.exports = {
    siteMetadata: {
        title: "mJamsek Site",
        description: "mJamsek personal site",
        author: "Miha Jamsek",
        siteUrl: "https://www.mjamsek.com"
    },
    plugins: [
        "gatsby-plugin-react-helmet",
        "gatsby-plugin-sitemap",
        "gatsby-plugin-robots-txt",
        {
            resolve: "gatsby-plugin-sass",
            options: {
                preicision: 10
            }
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.app/offline
        "gatsby-plugin-offline",
    ],
};
