import React from "react";

import { title } from "./knowledge-section.module.scss";
import { useTranslation } from "react-i18next";

interface KnowledgeSectionProps {

}

export const KnowledgeSection = (props: KnowledgeSectionProps) => {
    const {} = props;
    const { t } = useTranslation();
    
    return (
        <div>
            <h2 className={title}>{t("index:learn-more.knowledge.title")}</h2>
            
            <p>{t("index:learn-more.knowledge.content")}</p>
        </div>
    );
};

KnowledgeSection.defaultProps = {};
