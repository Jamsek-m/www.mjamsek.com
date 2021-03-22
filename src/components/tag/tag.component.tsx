import React from "react";

import { tag as tagStyle, tagSmall, disabled as disabledStyle } from "./tag.module.scss";

interface TagProps {
    label: string;
    value: string;
    small?: boolean;
    className: string;
    clickable?: boolean;
    onClick?: (value: string) => void;
    backgroundColor?: string;
    disabled: boolean;
}

export const Tag = (props: TagProps) => {
    const {
        label,
        value,
        small,
        clickable,
        onClick: onClickProp,
        backgroundColor,
        disabled,
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
        <span onClick={onClick} className={`${tagStyle} ${classNameProp} ${small ? tagSmall : ""} tag-${value} ${disabled ? disabledStyle : ""}`}
            style={componentStyle}>
            {label}
        </span>
    );
};

Tag.defaultProps = {
    small: true,
    clickable: true,
    className: "",
    disabled: false,
};
