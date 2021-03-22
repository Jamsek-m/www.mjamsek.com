const githubApi = require("./github.api");
const path = require("path")

exports.createSchemaCustomization = ({ actions }) => {
    const { createTypes } = actions
    const typeDefs = `
        type ProjectDistribution {
            url: String!
            type: String!
            filename: String
        }
        type ProjectRepository {
            provider: String!
            url: String!
            organization: String
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
                        organization
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
    
    const github = githubApi(graphql);
    
    const pages = result.data.allProjectsJson.nodes.map(async node => {
        
        let repo = null;
        if (node.repository && node.repository.organization) {
            repo = await github.getOrganization(node.repository.organization, node.repository.url);
        } else if (node.repository && node.repository.url) {
            repo = await github.getUser(process.env.GITHUB_LOGIN, node.repository.url);
        }
        
        createPage({
            path: "/projects" + node.path,
            component: projectTemplate,
            context: {
                github: repo,
                projectId: node.id,
            }
        })
    })
    
    await Promise.all(pages)
}

