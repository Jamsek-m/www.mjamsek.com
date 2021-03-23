export interface ProjectSimple {
    id: string;
    position: number;
    path: string;
    title: string;
    description: string;
    thumbnail?: string;
    tags: string[];
}

export enum DistributionType {
    LINK = "link",
    FILE = "file",
}

export interface ProjectDistribution {
    type: DistributionType;
    url: string;
    filename?: string;
}

export enum GitProvider {
    GITHUB = "github",
    BITBUCKET = "bitbucket",
    GITLAB = "gitlab",
}

export interface ProjectRepository {
    provider: GitProvider;
    url: string;
    private?: boolean;
    organization?: string;
}

export interface ProjectVersion {
    version: string;
    releaseDate?: string;
    snapshot?: boolean;
    latest?: boolean;
}

export interface Project extends ProjectSimple {
    fullDescription: string;
    images?: string[];
    distribution?: ProjectDistribution;
    repository?: ProjectRepository;
    releases?: ProjectVersion[];
    license?: string;
}
