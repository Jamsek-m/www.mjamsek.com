import data from "./projects.json";

export function getCurrentProjects(locale) {
    return data.projects
        .filter(project => project.inProgress)
        .map((project) => {
            return {
                path: project.path,
                name: project.translations[locale].name,
            };
        });
}
