const path = require("path")

exports.createSchemaCustomization = ({ actions }) => {
    const { createTypes } = actions
    const typeDefs = `
        type ProjectDistribution {
            url: String!
            type: String!
        }
        type ProjectRepository {
            provider: String!
            url: String!
            private: Boolean
        }
        type ProjectVersion {
            version: String!
            releaseDate: String
            snapshot: Boolean
            latest: Boolean
        }
        type ProjectsJson implements Node {
            tags: [String]
            thumbnail: String
            position: Int!
            fullDescription: String
            license: String
            images: [String]
            distribution: ProjectDistribution
            repository: ProjectRepository
            releases: [ProjectVersion]
        }
    `
    createTypes(typeDefs)
}

exports.createPages = async({ actions, graphql, reporter }) => {
    const { createPage } = actions
    const projectTemplate = path.resolve("./src/templates/projects-details/projects-details.template.tsx")
    
    const result = await graphql(`
        {
            allProjectsJson(sort: { fields: [position], order: ASC }) {
                totalCount
                nodes {
                    id
                    path
                    repository {
                        url
                    }
                }
            }
        }
    `)
    
    if (result.errors) {
        console.error(result.errors)
        reporter.panicOnBuild("Error while running GraphQL query!")
        return
    }
    
    result.data.allProjectsJson.nodes.forEach(node => {
        createPage({
            path: "/projects" + node.path,
            component: projectTemplate,
            context: {
                projectId: node.id,
                githubHandle: (node.repository && node.repository.url) || "",
                githubLogin: process.env.GITHUB_LOGIN
            }
        })
    })
}

