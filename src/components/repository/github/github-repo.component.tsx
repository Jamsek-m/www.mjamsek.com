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
    user?: GitHubRepository;
    organization?: GitHubRepository;
}

export const GitHubRepo = (props: GitHubRepoProps) => {
    const { organization, user } = props;
    
    return (
        <div className={container}>
            <div className={header}>
                <div className={iconContainer}>
                    <FontAwesomeIcon size="2x"
                        icon={["fab", "github"]}
                        title="GitHub"/>
                </div>
                <div className={nameContainer}>
                    <Link to={getProfileUrl(user, organization)} external={true}>
                        {getProfileName(user, organization)}
                    </Link>
                    <span className={nameDivider}>/</span>
                    <Link to={getUrl(user, organization)} external={true}>{getName(user, organization)}</Link>
                </div>
            </div>
            <div className={desc}>
                {getDescription(user, organization)}
            </div>
        </div>
    );
};
