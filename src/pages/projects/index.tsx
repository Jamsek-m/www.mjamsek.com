import React, { useEffect, useReducer } from "react";
import { graphql } from "gatsby";
import { useTranslation } from "react-i18next";

import { Layout, PageContainer, Seo } from "../../components";
import { ProjectCard } from "../../components/project-card/project-card.component";
import { Tag } from "../../components/tag/tag.component";

import { ProjectsPageProps, ProjectsStateStatus, StateActionType } from "./project.page.types";
import { projectsReducer } from "./projects.page.controller";

import { header, projectItem, projects as projectsStyle, projectTag, projectTags } from "./projects.page.module.scss";


const ProjectsPage = (props: ProjectsPageProps) => {
    const { t } = useTranslation();
    
    const [projectsState, dispatchProjects] = useReducer(projectsReducer(props), {
        tags: [],
        projects: [],
        selectedTags: new Map<string, null>(),
        status: ProjectsStateStatus.EMPTY
    });
    
    useEffect(() => {
        dispatchProjects({
            type: StateActionType.INIT
        });
    }, []);
    
    const toggleTags = (tag: string) => {
        return () => {
            dispatchProjects({
                type: StateActionType.UPDATE_TAGS,
                selectedTag: tag
            });
        };
    };
    
    return (
        <Layout>
            <Seo title={t("common:meta.projects.title")}/>
            <PageContainer>
                <div className={header}>
                    <h2>{t("projects:meta.title")}</h2>
                </div>
                
                <div className={projectTags}>
                    {projectsState.tags.map((tag, index) => (
                        <Tag key={index}
                            value={tag.toLowerCase()}
                            label={tag}
                            disabled={!projectsState.selectedTags.has(tag)}
                            onClick={toggleTags(tag)}
                            small={false}
                            className={projectTag}
                        />
                    ))}
                </div>
                
                <div className={projectsStyle}>
                    {projectsState.projects.map((project, index) => (
                        <div key={index} className={projectItem}>
                            <ProjectCard project={project} key={index}/>
                        </div>
                    ))}
                </div>
            </PageContainer>
        </Layout>
    );
};

export default ProjectsPage;

export const query = graphql`
    query($language: String!) {
        locales: allLocale(filter: {language: {eq: $language}}) {
            edges {
                node {
                    ns
                    data
                    language
                }
            }
        }
        allProjectsJson(sort: { fields: [position], order: ASC }) {
            totalCount
            nodes {
                id
                path
                title
                description
                tags
                thumbnail
            }
        }
    }
`;
