import React, { useState } from "react";
import { ProjectVersion } from "../../types";
import {
    container,
    latest, otherRelease,
    othersContainer,
    othersTitleContainer,
    onlyLatest
} from "./versions.module.scss";
import { formatDate, sortProjectVersion } from "../../utils";
import ReactTooltip from "react-tooltip";
import { useTranslation } from "react-i18next";

interface VersionsProps {
    versions: ProjectVersion[];
}

export const Versions = (props: VersionsProps) => {
    const { versions } = props;
    console.log(versions);
    const { t } = useTranslation();
    const [opened, toggleOpened] = useState<boolean>(false);
    
    let latestRelease = versions.find(version => version.latest);
    if (!latestRelease) {
        latestRelease = versions.sort(sortProjectVersion)[0];
    }
    const releases = versions.filter(release => release.version !== latestRelease?.version);
    
    return (
        <div className={container}>
            
            {latestRelease && latestRelease.releaseDate ? (
                <div className={`${latest} ${releases.length === 0 ? onlyLatest: ""}`}
                    data-tip={formatDate(new Date(latestRelease.releaseDate))}
                    data-for="tooltip-gh-versions-latest"
                    onClick={() => {
                        toggleOpened(!opened);
                    }}>
                    {t("projects:sections.versions.latest.title")}:{" "}
                    {latestRelease.version}
                </div>
            ) : (
                <div className={latest}
                    onClick={() => {
                        toggleOpened(!opened);
                    }}>
                    {t("projects:sections.versions.latest.title")}:{" "}
                    {latestRelease.version}
                </div>
            )}
            <ReactTooltip id="tooltip-gh-versions-latest"/>
            {opened && releases.length > 0 && (
                <>
                    <div className={othersTitleContainer}>
                        <h4>{t("projects:sections.versions.others.title")}:</h4>
                    </div>
                    <div className={othersContainer}>
                        {releases.map((release, index) => (
                            <div key={index}
                                className={otherRelease}
                            >
                                {release.releaseDate ? (
                                    <span
                                        data-tip={formatDate(new Date(release.releaseDate))}
                                        data-for={`tooltip-gh-versions-${index}`}
                                    >{release.version}</span>
                                ) : (
                                    <span>{release.version}</span>
                                )}
                                
                                <ReactTooltip id={`tooltip-gh-versions-${index}`}/>
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

Versions.defaultProps = {
    versions: []
};
