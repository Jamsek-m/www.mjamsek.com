import React, { MouseEvent as ReactMouseEvent, useState } from "react";
import { useTranslation } from "react-i18next";
import ReactTooltip from "react-tooltip";
import { GitHubRepository } from "../../../types";

import {
    container,
    latest,
    onlyLatest,
    otherRelease,
    othersContainer,
    othersTitleContainer
} from "./github-versions.module.scss";
import { formatDate } from "../../../utils";
import { Link } from "../../link/link.component";

interface GithubVersionsProps {
    repository: GitHubRepository;
}

export const GithubVersions = (props: GithubVersionsProps) => {
    const { repository } = props;
    const { latestRelease } = repository;
    const { t } = useTranslation();
    const [opened, toggleOpen] = useState<boolean>(false);
    const releases = repository.releases.nodes.filter(release => !release.isLatest);
    
    const toggleOtherReleases = (e: ReactMouseEvent<HTMLDivElement, MouseEvent>) => {
        const clickedElem: HTMLElement = e.target as HTMLElement;
        if (clickedElem.tagName !== "A" && releases.length > 0) {
            toggleOpen(!opened);
        }
    };
    
    return (
        <div className={container}>
            <div className={`${latest} ${releases.length === 0 ? onlyLatest: ""}`}
                data-tip={formatDate(new Date(latestRelease.publishedAt))}
                data-for="tooltip-gh-versions-latest"
                onClick={toggleOtherReleases}>
                {t("projects:sections.versions.latest.title")}:{" "}
                <Link to={latestRelease.url} external={true}>
                    {latestRelease.name}
                </Link>
            </div>
            <ReactTooltip id="tooltip-gh-versions-latest"/>
            {opened && (
                <>
                    <div className={othersTitleContainer}>
                        <h4>{t("projects:sections.versions.others.title")}:</h4>
                    </div>
                    <div className={othersContainer}>
                        {releases.map((release, index) => (
                            <Link key={index}
                                to={release.url}
                                external={true}
                                className={otherRelease}
                                data-tip={formatDate(new Date(release.publishedAt))}
                                data-for={`tooltip-gh-versions-${index}`}
                            >
                                {release.name}
                                <ReactTooltip id={`tooltip-gh-versions-${index}`}/>
                            </Link>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

GithubVersions.defaultProps = {};
