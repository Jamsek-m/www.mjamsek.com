import { ProjectSimple } from "../types";
import {
    ProjectsPageProps,
    ProjectsState,
    ProjectsStateAction, ProjectsStateStatus,
    StateActionType
} from "../types/projects.page.types";


export function projectsReducer(props: ProjectsPageProps) {
    return (previousState: ProjectsState, action: ProjectsStateAction): ProjectsState => {
        switch (action.type) {
            case StateActionType.INIT:
                return {
                    status: ProjectsStateStatus.SET,
                    projects: props.data.allProjectsJson.nodes,
                    selectedTags: new Map<string, null>(),
                    tags: getAllTags(props.data.allProjectsJson.nodes)
                };
            case StateActionType.UPDATE_TAGS:
                if (previousState.status === ProjectsStateStatus.SET) {
                    const newTags = toggleTags(action.selectedTag, previousState.selectedTags);
                    return {
                        ...previousState,
                        selectedTags: newTags,
                        projects: filterProjects(previousState.tags, newTags, action.selectedTag, props.data.allProjectsJson.nodes)
                    };
                }
                return previousState;
        }
    };
}

export function toggleTags(tag: string, selectedTags: Map<string, null>) {
    let copy = new Map<string, null>(selectedTags);
    if (copy.has(tag)) {
        copy.delete(tag);
    } else {
        copy.set(tag, null);
    }
    return copy;
}

export function filterProjects(tags: string[], selectedTags: Map<string, null>, selectedTag: string, projects: ProjectSimple[]) {
    if (selectedTags.size > 0) {
        return projects.filter(project => {
            const matchingTags = project.tags.filter(tag => selectedTags.has(tag));
            return matchingTags.length > 0;
        });
    } else {
        return projects;
    }
}

export function getAllTags(projects: ProjectSimple[]): string[] {
    const filterFunc = (value: string, index: number, self: string[]) => {
        return self.indexOf(value) === index;
    };
    return projects
        .map(node => node.tags)
        .flat()
        .filter(filterFunc);
}
