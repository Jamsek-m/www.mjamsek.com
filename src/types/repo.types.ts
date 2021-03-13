import { GQLIterable } from "./common.types";

export interface GitHubData {
    user: {
        repository?: GitHubRepository;
    };
}

export interface GitHubRepository {
    url: string;
    name: string;
    isPrivate: boolean;
    
    owner: {
        login: string;
    };
    collaborators: GQLIterable<unknown>;
    issues: GQLIterable<unknown>;
    licenseInfo: {
        name: string;
        url: string;
    };
    releases: GQLIterable<{
        name: string;
        isLatest: boolean;
        isPrerelease: boolean;
        descriptionHTML: string;
        publishedAt: string;
    }>;
}
