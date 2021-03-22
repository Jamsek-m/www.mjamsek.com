import React from "react";
import { graphql } from "gatsby";
import { GitHubData, GitProvider, Project } from "../../types";
import { useTranslation } from "react-i18next";
import { Layout, PageContainer, Seo } from "../../components";
import { ProjectContent, ProjectsIds } from "../../content";

import { Tag } from "../../components/tag/tag.component";

import {
    defaultContainer,
    galleryContainer,
    licenseContainer,
    licenseKey,
    licenseValue,
    pageContainer,
    projectTag,
    projectTags,
    repositoryContainer,
    releasesContainer,
} from "./projects-details.module.scss";
import { Versions } from "../../components/versions/versions.component";
import { Distribution } from "../../components/distribution/distribution.component";
import { Repository } from "../../components/repository/repository.component";
import { GitHubRepo } from "../../components/repository/github/github-repo.component";
import { Gallery } from "../../components/gallery/gallery.component";
import { hasGitHubData } from "../../utils";
import { GithubVersions } from "../../components/versions/github-versions/github-versions.component";

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
    console.log(github);
    
    return (
        <Layout>
            <Seo title={t(project.title)}/>
            <PageContainer containerStyle={pageContainer}>
                <div>
                    {/* TAGS */}
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
                    
                    {/* TITLE */}
                    <h2>{t(project.title)}</h2>
                    
                    {/* RELEASES - if github repo, handle different */}
                    {(!project.releases || project.releases.length === 0) && hasGitHubData(github) && (
                        <div className={releasesContainer}>
                            {github.organization && github.organization.repository && (
                                <GithubVersions repository={github.organization.repository}/>
                            )}
                            {github.user && github.user.repository && (
                                <GithubVersions repository={github.user.repository}/>
                            )}
                        </div>
                    )}
                    {project.releases && project.releases.length > 0 && (
                        <div className={releasesContainer}>
                            <Versions versions={project.releases}/>
                        </div>
                    )}
                    
                    {/* DISTRIBUTION */}
                    {project.distribution && (
                        <div>
                            <Distribution distribution={project.distribution}/>
                        </div>
                    )}
                    
                    {/* PROJECT DESCRIPTION */}
                    {/* Using plain text/html from static translations, or rendering custom body */}
                    {ProjectContent[pageContext.projectId as ProjectsIds] ? (
                        (ProjectContent as any)[pageContext.projectId as ProjectsIds](project, t)
                    ) : (
                        <div className={defaultContainer}
                            dangerouslySetInnerHTML={{ __html: t(project.fullDescription) }}/>
                    )}
    
                    {/* IMAGES */}
                    {project.images && project.images.length > 0 && (
                        <div className={galleryContainer}>
                            <Gallery images={project.images}/>
                        </div>
                    )}
                    
                    {/* LICENSE */}
                    {project.license && (
                        <div className={licenseContainer}>
                            <span className={licenseKey}>{t("projects:sections.license.title")}:{" "}</span>
                            <span className={licenseValue}>{project.license || "None"}</span>
                        </div>
                    )}
                    
                    {/* REPOSITORY */}
                    <div className={repositoryContainer}>
                        
                        {project.repository && project.repository.provider === GitProvider.GITHUB && (
                            hasGitHubData(github) ? (
                                <GitHubRepo
                                    user={github.user.repository}
                                    organization={github.organization?.repository}
                                />
                            ) : (
                                <Repository repository={project.repository}
                                    name={t(project.title)}
                                    description={t(project.description)}
                                />
                            )
                        )}
                        
                        {project.repository && project.repository.provider !== GitProvider.GITHUB && (
                            <Repository repository={project.repository}
                                name={t(project.title)}
                                description={t(project.description)}
                            />
                        )}
                    </div>
                </div>
            </PageContainer>
        </Layout>
    );
};

export const query = graphql`
    query($language: String!, $projectId: String!, $githubLogin: String!, $githubOrgLogin: String!, $githubHandle: String!) {
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
            license
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
            organization(login: $githubOrgLogin) {
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
`;

export default ProjectDetailsTemplate;
