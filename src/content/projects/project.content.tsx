import React, { ReactNode } from "react";
import { Project } from "../../types";
import { TFunction } from "react-i18next";

export enum ProjectsIds {
    KEE_AUTH = "kee-auth",
    METRICS_MONITOR = "metrics-monitor",
    REST_CLIENT = "rest-client",
}

type RenderProjectFunc = (project: Project, t: TFunction) => ReactNode;
type ProjectContentDef = Partial<Record<ProjectsIds, RenderProjectFunc>>;

export const ProjectContent: ProjectContentDef = {
    [ProjectsIds.KEE_AUTH]: (project, t) => (
        <p>
            {t(project.fullDescription)}
        </p>
    ),
    [ProjectsIds.REST_CLIENT]: (project, t) => (
        <p>
            {t(project.fullDescription)}
        </p>
    ),
};
