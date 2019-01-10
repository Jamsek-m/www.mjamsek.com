/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const languages = require("./src/content/languages");
const data = require("./src/content/projects.json");
const path = require("path");

exports.onCreatePage = ({ page, actions }) => {
    const { createPage, deletePage } = actions;

    if (page.path.includes("404")) {
        return Promise.resolve();
    }

    return new Promise(resolve => {
        deletePage(page);

        Object.keys(languages).map(lang => {
            const localizedPath = languages[lang].default
                ? page.path
                : languages[lang].path + page.path;

            return createPage({
                ...page,
                path: localizedPath,
                context: {
                    locale: lang,
                },
            });
        });

        resolve();
    });
};

exports.createPages = ({actions}) => {
    const {createPage} = actions;
    const projektTemplate = path.resolve("src/templates/projekt/projekt-page.template.js");

    data.projects.forEach(projekt => {

        Object.keys(languages).forEach(lang => {
            const projektPath = languages[lang].default ? projekt.path : `/${lang}${projekt.path}`;

            createPage({
                path: projektPath,
                component: projektTemplate,
                context: {
                    locale: lang,
                    project: projekt
                }
            });
        });

    })
};
