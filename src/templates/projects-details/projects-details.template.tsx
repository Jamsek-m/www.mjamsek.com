import React from "react";
import { graphql } from "gatsby";
import { Project, GitHubData } from "../../types";
import { useTranslation } from "react-i18next";
import { Layout, PageContainer, Seo } from "../../components";
import { ProjectContent, ProjectsIds } from "../../content";

import { defaultContainer } from "./projects-details.module.scss";
import { Tag } from "../../components/tag/tag.component";

import { projectTags, projectTag, pageContainer } from "./projects-details.module.scss";
import { Versions } from "../../components/versions/versions.component";
import { Distribution } from "../../components/distribution/distribution.component";
import { Repository } from "../../components/repository/repository.component";

interface ProjectDetailsPageProps {
    data: {
        projectsJson: Project;
        github: GitHubData;
    };
    pageContext: {
        projectId: string;
        githubHandle?: string;
    }
}

const ProjectDetailsTemplate = (props: ProjectDetailsPageProps) => {
    const { data, pageContext } = props;
    const { projectsJson: project, github } = data;
    const { t } = useTranslation();
    
    return (
        <Layout>
            <Seo title={t(project.title)}/>
            <PageContainer containerStyle={pageContainer}>
                <div>
                    <div className={projectTags}>
                        {project.tags.map((tag, index) => (
                            <Tag key={index}
                                value={tag.toLowerCase()}
                                label={tag}
                                small={false}
                                className={projectTag}
                            />
                        ))}
                    </div>
                    <h2>{t(project.title)}</h2>
                    
                    {project.releases && project.releases.length > 0 && (
                        <div>
                            <Versions versions={project.releases}/>
                        </div>
                    )}
                    
                    {project.distribution && (
                        <div>
                            <Distribution distribution={project.distribution}/>
                        </div>
                    )}
                    
                    
                    {ProjectContent[pageContext.projectId as ProjectsIds] ? (
                        (ProjectContent as any)[pageContext.projectId as ProjectsIds](project, t)
                    ) : (
                        <div className={defaultContainer}
                            dangerouslySetInnerHTML={{ __html: t(project.fullDescription) }}/>
                    )}
                    
                    <div>
                        LICENSE: {project.license || "None"}
                    </div>
                    
                    {project.repository && (
                        <div>
                            <Repository
                                repository={project.repository}
                                github={github.user.repository}
                            />
                        </div>
                    )}
                </div>
            </PageContainer>
        </Layout>
    );
};

export const query = graphql`
    query($language: String!, $projectId: String!, $githubLogin: String!, $githubHandle: String!) {
        locales: allLocale(filter: {language: {eq: $language}}) {
            edges {
                node {
                    ns
                    data
                    language
                }
            }
        }
        projectsJson(id: {eq: $projectId}) {
            id
            path
            title
            description
            tags
            thumbnail
            fullDescription
            images
            distribution {
                type
                url
            }
            repository {
                provider
                url
                private
            }
            releases {
                version
                releaseDate
                snapshot
                latest
            }
        }
        github {
            user(login: $githubLogin) {
                repository(name: $githubHandle) {
                    url
                    collaborators {
                        totalCount
                    }
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
                    releases(last: 10) {
                        totalCount
                        nodes {
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
`;

export default ProjectDetailsTemplate;
