import React from "react";
import { useTranslation } from "react-i18next";

import { container } from "./learn-more.module.scss";
import { LEARN_MORE_ITEMS } from "../../../../config/home.config";
import { LearnMoreItem } from "./learn-more-item/learn-more-item.component";

interface LearnMoreProps {

}

export const LearnMore = (_: LearnMoreProps) => {
    const { t } = useTranslation();
    
    return (
        <div className={container}>
            
            {LEARN_MORE_ITEMS(t).map((item, index) => (
                <LearnMoreItem
                    key={index}
                    item={item}
                />
            ))}
        
        </div>
    );
};

LearnMore.defaultProps = {};
