import React from "react";
import { GitHubRepository } from "../../../types";
import { Link } from "../../link/link.component";
import {
    container,
    desc,
    header,
    iconContainer,
    nameContainer,
    nameDivider
} from "./github-repo.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getDescription, getName, getProfileName, getProfileUrl, getUrl } from "../../../utils";

interface GitHubRepoProps {
    repo?: GitHubRepository;
}

export const GitHubRepo = (props: GitHubRepoProps) => {
    const { repo } = props;
    
    return (
        <div className={container}>
            <div className={header}>
                <div className={iconContainer}>
                    <FontAwesomeIcon size="2x"
                        icon={["fab", "github"]}
                        title="GitHub"/>
                </div>
                <div className={nameContainer}>
                    <Link to={getProfileUrl(repo, undefined)} external={true}>
                        {getProfileName(repo, undefined)}
                    </Link>
                    <span className={nameDivider}>/</span>
                    <Link to={getUrl(repo, undefined)} external={true}>{getName(repo, undefined)}</Link>
                </div>
            </div>
            <div className={desc}>
                {getDescription(repo, undefined)}
            </div>
        </div>
    );
};
