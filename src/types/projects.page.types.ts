import { ProjectSimple } from "./project.types";

export interface ProjectsPageProps {
    data: {
        allProjectsJson: {
            nodes: ProjectSimple[];
        };
    };
}

export enum StateActionType {
    INIT = "init",
    UPDATE_TAGS = "update_tags",
}

export type ProjectsStateAction =
    | { type: StateActionType.INIT }
    | { type: StateActionType.UPDATE_TAGS, selectedTag: string };

export enum ProjectsStateStatus {
    EMPTY = "empty",
    SET = "set"
}

export type ProjectsState =
    | { status: ProjectsStateStatus.EMPTY, tags: string[], selectedTags: Map<string, null>, projects: ProjectSimple[] }
    | { status: ProjectsStateStatus.SET, tags: string[], selectedTags: Map<string, null>, projects: ProjectSimple[] };
