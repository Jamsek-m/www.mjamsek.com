import React from "react";
import { graphql } from "gatsby";
import { GitHubData, GitHubRepository, GitProvider, Project } from "../../types";
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
    releasesContainer
} from "./projects-details.module.scss";
import { Versions } from "../../components/versions/versions.component";
import { Distribution } from "../../components/distribution/distribution.component";
import { Repository } from "../../components/repository/repository.component";
import { GitHubRepo } from "../../components/repository/github/github-repo.component";
import { Gallery } from "../../components/gallery/gallery.component";
import { GithubVersions } from "../../components/versions/github-versions/github-versions.component";

interface ProjectDetailsPageProps {
    data: {
        projectsJson: Project;
        github: GitHubData;
    };
    pageContext: {
        projectId: string;
        github: GitHubRepository | null;
    }
}

const ProjectDetailsTemplate = (props: ProjectDetailsPageProps) => {
    const { data, pageContext } = props;
    const { projectsJson: project } = data;
    const { github } = pageContext;
    const { t } = useTranslation();
    
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
                    {(!project.releases || project.releases.length === 0) &&
                    github !== null && github.latestRelease !== null && (
                        <div className={releasesContainer}>
                            {github && (
                                <GithubVersions repository={github}/>
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
                            github !== null ? (
                                <GitHubRepo repo={github}/>
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
    query($language: String!, $projectId: String!) {
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
    }
`;

export default ProjectDetailsTemplate;
