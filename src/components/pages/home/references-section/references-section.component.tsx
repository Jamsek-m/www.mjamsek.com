import React from "react";
import { useTranslation } from "react-i18next";
import { title } from "../knowledge-section/knowledge-section.module.scss";

interface ReferencesSectionProps {

}

export const ReferencesSection = (props: ReferencesSectionProps) => {
    const {} = props;
    const { t } = useTranslation();
    
    return (
        <div>
            <h2 className={title}>{t("index:learn-more.references.title")}</h2>
            
            <p>{t("index:learn-more.references.content")}</p>
        </div>
    );
};

ReferencesSection.defaultProps = {

};
