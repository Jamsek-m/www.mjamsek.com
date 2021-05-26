import React from "react";

import {
    title,
    category,
    categoryContainer,
} from "./knowledge-section.module.scss";
import { useTranslation } from "react-i18next";
import { KNOWLEDGE } from "../../../../content/knowledge";
import { Bullet, BulletList } from "../../../bullet-list";

interface KnowledgeSectionProps {

}

export const KnowledgeSection = (props: KnowledgeSectionProps) => {
    const {} = props;
    const { t } = useTranslation();
    
    return (
        <div>
            <h2 className={title}>{t("index:learn-more.knowledge.title")}</h2>
            <p>{t("index:learn-more.knowledge.content")}</p>
            
            <div className={categoryContainer}>
                {KNOWLEDGE(t).map((area, index) => (
                    <div key={index} className={category}>
                        <h4>{area.title}</h4>
                        
                        {area.items && (
                            <BulletList>
                                {area.items.map((item, index2) => (
                                    <Bullet text={item.title} emphasized={item.emphasized} key={index2}/>
                                ))}
                            </BulletList>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

KnowledgeSection.defaultProps = {};
