import React from "react";
import { graphql } from "gatsby";
import { useTranslation } from "react-i18next";

import { ProjectSimple } from "../../types";
import { Layout, PageContainer, Seo } from "../../components";
import { ProjectCard } from "../../components/project-card/project-card.component";

import { projects, header, projectItem } from "./projects.page.module.scss";

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
        }
        return props.data.allProjectsJson.nodes
            .map(node => node.tags)
            .flat()
            .filter(filterFunc);
    };
    console.log(getAllTags());
    
    return (
        <Layout>
            <Seo title={t("common:meta.projects.title")}/>
            <PageContainer>
                <div className={header}>
                    <h2>{t("projects:meta.title")}</h2>
                </div>
                <div className={projects}>
                    {props.data.allProjectsJson.nodes.map((project, index) => (
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
