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

export function getDescription(user?: GitHubRepository, organization?: GitHubRepository, repository?: ProjectRepository): string {
    if (organization && organization.description) {
        return organization.description;
    }
    if (user && user.description) {
        return user.description;
    }
    return "";
}

export function getProfileUrl(user?: GitHubRepository, organization?: GitHubRepository, repository?: ProjectRepository): string {
    if (organization && organization.owner) {
        return GITHUB_ORG_PREFIX + organization.owner.login;
    }
    if (user && user.owner) {
        return GITHUB_ORG_PREFIX + user.owner.login;
    }
    return "#";
}

export function getProfileName(user?: GitHubRepository, organization?: GitHubRepository, repository?: ProjectRepository): string {
    if (organization && organization.owner) {
        return organization.owner.login;
    }
    if (user && user.owner) {
        return user.owner.login;
    }
    return "";
}

export function getUrl(user?: GitHubRepository, organization?: GitHubRepository, repository?: ProjectRepository): string {
    if (organization && organization.url) {
        return organization.url;
    }
    if (user && user.url) {
        return user.url;
    }
    return "#";
}

export function getName(user?: GitHubRepository, organization?: GitHubRepository, repository?: ProjectRepository): string {
    if (organization && organization.name) {
        return organization.name;
    }
    if (user && user.name) {
        return user.name;
    }
    return "#";
}
