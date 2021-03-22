module.exports = githubApi = function(graphql) {
    return {
        getOrganization: async function(githubLogin, handle) {
            const githubResult = await graphql(`
                query($githubLogin: String!, $githubHandle: String!) {
                    github {
                        organization(login: $githubLogin) {
                            repository(name: $githubHandle) {
                                url
                                description
                                isPrivate
                                issues {
                                    totalCount
                                }
                                licenseInfo {
                                    name
                                    url
                                }
                                name
                                owner {
                                    login
                                }
                                latestRelease {
                                    url
                                    isLatest
                                    isPrerelease
                                    name
                                    descriptionHTML
                                    publishedAt
                                }
                                releases(last: 10, orderBy: {field: CREATED_AT, direction: DESC}) {
                                    totalCount
                                    nodes {
                                        url
                                        isLatest
                                        isPrerelease
                                        name
                                        descriptionHTML
                                        publishedAt
                                    }
                                }
                            }
                        }
                    }
                }
            `, {
                githubLogin: githubLogin,
                githubHandle: handle
            })
            return githubResult.data.github.organization.repository
        },
        getUser: async function(githubLogin, handle) {
            const githubResult = await graphql(`
                query($githubLogin: String!, $githubHandle: String!) {
                    github {
                        user(login: $githubLogin) {
                            repository(name: $githubHandle) {
                                url
                                description
                                isPrivate
                                issues {
                                    totalCount
                                }
                                licenseInfo {
                                    name
                                    url
                                }
                                name
                                owner {
                                    login
                                }
                                latestRelease {
                                    url
                                    isLatest
                                    isPrerelease
                                    name
                                    descriptionHTML
                                    publishedAt
                                }
                                releases(last: 10, orderBy: {field: CREATED_AT, direction: DESC}) {
                                    totalCount
                                    nodes {
                                        url
                                        isLatest
                                        isPrerelease
                                        name
                                        descriptionHTML
                                        publishedAt
                                    }
                                }
                            }
                        }
                    }
                }
            `, {
                githubLogin: githubLogin,
                githubHandle: handle
            })
            
            return githubResult.data.github.user.repository
        }
    }
}
