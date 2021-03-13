import React from "react";
import { GitHubRepository, ProjectRepository } from "../../types";
import { GitHubRepo } from "./github/github-repo.component";

interface RepositoryProps {
    repository: ProjectRepository;
    githubHandle?: string;
    github?: GitHubRepository;
}

export const Repository = (props: RepositoryProps) => {
    const { repository, github } = props;
    
    return (
        <div>
            {github ? (
                <GitHubRepo github={github}/>
            ) : (
                <span>{repository.url}</span>
            )}
        </div>
    );
};
