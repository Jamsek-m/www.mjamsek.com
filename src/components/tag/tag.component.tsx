import React from "react";

import { tag as tagStyle, tagSmall } from "./tag.module.scss";

interface TagProps {
    label: string;
    value: string;
    small?: boolean;
    className: string;
    clickable?: boolean;
    onClick?: (value: string) => void;
    backgroundColor?: string;
}

export const Tag = (props: TagProps) => {
    const {
        label,
        value,
        small,
        clickable,
        onClick: onClickProp,
        backgroundColor,
        className: classNameProp
    } = props;
    
    const onClick = () => {
        if (clickable && !!onClickProp) {
            onClickProp(value);
        }
    };
    
    const componentStyle: any = {};
    if (backgroundColor) {
        componentStyle.backgroundColor = backgroundColor;
    }
    if (clickable && !!onClickProp) {
        componentStyle.cursor = "pointer";
    }
    
    return (
        <span onClick={onClick} className={`${tagStyle} ${classNameProp} ${small ? tagSmall : ""} tag-${value}`}
            style={componentStyle}>
            {label}
        </span>
    );
};

Tag.defaultProps = {
    small: true,
    clickable: true,
    className: ""
};
