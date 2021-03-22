import { GQLIterable } from "./common.types";

export interface GitHubData {
    user: {
        repository?: GitHubRepository;
    };
    organization?: {
        repository?: GitHubRepository;
    };
}

export interface GitHubRelease {
    url: string;
    name: string;
    isLatest: boolean;
    isPrerelease: boolean;
    descriptionHTML: string;
    publishedAt: string;
}

export interface GitHubLicenseInfo {
    name: string;
    url: string;
}

export interface GitHubOwner {
    login: string;
}

export interface GitHubRepository {
    url: string;
    name: string;
    description: string | null;
    isPrivate: boolean;
    
    owner: GitHubOwner;
    issues: GQLIterable<unknown>;
    licenseInfo: GitHubLicenseInfo;
    latestRelease: GitHubRelease;
    releases: GQLIterable<GitHubRelease>;
}
