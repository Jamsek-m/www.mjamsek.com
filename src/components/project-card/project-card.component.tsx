import React from "react";
import { useTranslation } from "react-i18next";

import { ProjectSimple } from "../../types";
import { Link } from "../link/link.component";
import { Tag } from "../tag/tag.component";

import {
    projectContainer,
    project as projectStyle,
    projectTags,
    projectImage,
    projectMeta,
    projectTag
} from "./project-card.module.scss";
import emptyImage from "../../assets/images/projects/empty.png";


interface ProjectCardProps {
    project: ProjectSimple;
}

export const ProjectCard = (props: ProjectCardProps) => {
    const { project } = props;
    const { t } = useTranslation();
    
    return (
        <div className={projectContainer}>
            <article className={projectStyle}>
                <div className={projectTags}>
                    {project.tags && project.tags.map((tag, index) => (
                        <Tag key={index}
                            value={tag.toLowerCase()}
                            label={tag}
                            small={false}
                            className={projectTag}
                        />
                    ))}
                </div>
                <Link to={`/projects${project.path}`} className={projectImage}>
                    {project.thumbnail ? (
                        <img src={project.thumbnail} alt={t(project.title)}/>
                    ) : (
                        <img src={emptyImage} alt={t(project.title)}/>
                    )}
                </Link>
                <div className={projectMeta}>
                    <h4>
                        <Link to={`/projects${project.path}`}>{t(project.title)}</Link>
                    </h4>
                    <p>{t(project.description)}</p>
                </div>
            </article>
        </div>
    );
};
