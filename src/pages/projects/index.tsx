import React, { useEffect, useState } from "react";
import { graphql } from "gatsby";
import { useTranslation } from "react-i18next";

import { ProjectSimple } from "../../types";
import { Layout, PageContainer, Seo } from "../../components";
import { ProjectCard } from "../../components/project-card/project-card.component";

import {
    projects as projectsStyle,
    header,
    projectItem,
    projectTags,
    projectTag
} from "./projects.page.module.scss";
import { Tag } from "../../components/tag/tag.component";

interface ProjectsPageProps {
    data: {
        allProjectsJson: {
            nodes: ProjectSimple[];
        };
    };
}

const ProjectsPage = (props: ProjectsPageProps) => {
    const { t } = useTranslation();
    
    const getAllTags = (): string[] => {
        const filterFunc = (value: string, index: number, self: string[]) => {
            return self.indexOf(value) === index;
        };
        return props.data.allProjectsJson.nodes
            .map(node => node.tags)
            .flat()
            .filter(filterFunc);
    };
    
    const [tags, setTags] = useState<string[]>([]);
    const [selectedTags, setSelectedTags] = useState<Map<string, null>>(new Map());
    const [projects, setProjects] = useState<ProjectSimple[]>(props.data.allProjectsJson.nodes);
    
    useEffect(() => {
        let componentMounted = true;
        if (componentMounted) {
            setTags(getAllTags);
        }
        return () => {
            componentMounted = false;
        };
    }, []);
    
    const toggleTags = (tag: string) => {
        return () => {
            let copy = new Map<string, null>(selectedTags);
            if (copy.has(tag)) {
                copy.delete(tag);
            } else {
                copy.set(tag, null);
            }
            setSelectedTags(copy);
        };
    };
    
    useEffect(() => {
        if (selectedTags.size > 0) {
            const filteredProjects = props.data.allProjectsJson.nodes.filter(project => {
                const matchingTags = project.tags.filter(tag => selectedTags.has(tag));
                return matchingTags.length > 0;
            });
            setProjects(filteredProjects);
        } else {
            setProjects(props.data.allProjectsJson.nodes);
        }
    }, [selectedTags]);
    
    return (
        <Layout>
            <Seo title={t("common:meta.projects.title")}/>
            <PageContainer>
                <div className={header}>
                    <h2>{t("projects:meta.title")}</h2>
                </div>
                
                <div className={projectTags}>
                    {tags.map((tag, index) => (
                        <Tag key={index}
                            value={tag.toLowerCase()}
                            label={tag}
                            disabled={!selectedTags.has(tag)}
                            onClick={toggleTags(tag)}
                            small={false}
                            className={projectTag}
                        />
                    ))}
                </div>
                
                <div className={projectsStyle}>
                    {projects.map((project, index) => (
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
