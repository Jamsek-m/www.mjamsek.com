import React from "react";
import { NavigationItem } from "../../../../../types";
import { Link } from "../../../../link/link.component";
import { itemLink, linkElem } from "./learn-more-item.module.scss";

interface LearnMoreItemProps {
    item: NavigationItem;
}

export const LearnMoreItem = (props: LearnMoreItemProps) => {
    const { item } = props;
    
    return (
        <div className={itemLink}>
            <Link className={linkElem} to={item.url} anchor={item.anchor} external={false}>
                <div>{item.label}</div>
            </Link>
        </div>
    );
};

LearnMoreItem.defaultProps = {};
