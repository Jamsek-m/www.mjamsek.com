import React from "react";
import { NavigationItem } from "../../../../../types";
import { Link } from "../../../../link/link.component";
import { itemLink, linkElem, linkText } from "./learn-more-item.module.scss";

interface LearnMoreItemProps {
    item: NavigationItem;
}

export const LearnMoreItem = (props: LearnMoreItemProps) => {
    const { item } = props;
    
    return (
        <div className={itemLink}>
            <Link className={linkElem} to={item.url} anchor={item.anchor} external={false}>
                <span className={linkText}>
                    <span>{item.label}</span>
                </span>
            </Link>
        </div>
    );
};

LearnMoreItem.defaultProps = {};
