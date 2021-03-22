import React from "react";
import { DistributionType, ProjectDistribution } from "../../types";
import { Link } from "../link/link.component";

import {
    container,
    link
} from "./distribution.module.scss";
import { translateUrlToName } from "../../config/social.config";
import { useTranslation } from "react-i18next";
import { FileService } from "../../services";

interface DistributionProps {
    distribution: ProjectDistribution;
}

export const Distribution = (props: DistributionProps) => {
    const { distribution } = props;
    const { t } = useTranslation();
    
    if (distribution.type === DistributionType.LINK) {
        return (
            <div className={container}>
                <h5>{t("projects:sections.distribution.link-title")}:</h5>
                <Link to={distribution.url} external={true} className={link}>
                    {translateUrlToName(distribution.url)}
                </Link>
            </div>
        );
    }
    
    const downloadFile = () => {
        FileService.saveFile(distribution.url, distribution.filename || "file");
    }
    
    return (
        <div className={container}>
            <h5>{t("projects:sections.distribution.file-title")}</h5>
            <div className={link} onClick={downloadFile}>
                {t("projects:sections.distribution.file-title")}
            </div>
        </div>
    );
};
