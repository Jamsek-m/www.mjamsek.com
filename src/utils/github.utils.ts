import { GitHubData, GitHubRepository, ProjectRepository } from "../types";

export function hasGitHubData(github: GitHubData): boolean {
    if (github) {
        if (github.organization) {
            return !!github.organization.repository;
        }
        if (github.user) {
            return !!github.user.repository;
        }
    }
    return false;
}

const GITHUB_ORG_PREFIX = "https://github.com/";

export function getDescription(repo?: GitHubRepository): string {
    if (repo && repo.description) {
        return repo.description;
    }
    return "";
}

export function getProfileUrl(repo?: GitHubRepository): string {
    if (repo && repo.owner && repo.owner.login) {
        return GITHUB_ORG_PREFIX + repo.owner.login
    }
    return "#";
}

export function getProfileName(repo?: GitHubRepository): string {
    if (repo && repo.owner && repo.owner.login) {
        return repo.owner.login;
    }
    return "";
}

export function getUrl(repo?: GitHubRepository): string {
    if (repo && repo.url) {
        return repo.url;
    }
    return "#";
}

export function getName(repo?: GitHubRepository): string {
    if (repo && repo.name) {
        return repo.name;
    }
    return "#";
}
