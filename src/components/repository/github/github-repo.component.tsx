import React from "react";
import { GitHubRepository } from "../../../types";
import { Link } from "../../link/link.component";

interface GitHubRepoProps {
    github: GitHubRepository;
}

export const GitHubRepo = (props: GitHubRepoProps) => {
    const { github } = props;
    
    return (
        <div>
            GITHUB:
            <Link to={github.url} external={true}>
                <span>{github.owner.login} / {github.name}</span>
            </Link>
        </div>
    );
};
