import React from "react";
import { useTranslation } from "react-i18next";
import { title } from "../knowledge-section/knowledge-section.module.scss";
import { REFERENCES } from "../../../../content/references";
import { Bullet, BulletList } from "../../../bullet-list";

interface ReferencesSectionProps {

}

export const ReferencesSection = (props: ReferencesSectionProps) => {
    const {} = props;
    const { t } = useTranslation();
    
    return (
        <div>
            <h2 className={title}>{t("index:learn-more.references.title")}</h2>
            <p>{t("index:learn-more.references.content")}</p>
            
            <div>
                {REFERENCES(t).map((reference, index) => (
                    <div key={index}>
                        <h4>{reference.title}</h4>
                        
                        {reference.items && reference.items.length > 0 && (
                            reference.items.length > 1 ? (
                                <BulletList>
                                    {reference.items.map((item, index2) => (
                                        <Bullet text={item.description} key={index2}/>
                                    ))}
                                </BulletList>
                            ) : (
                                <p>
                                    {reference.items && reference.items[0].description}
                                </p>
                            )
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

ReferencesSection.defaultProps = {};
