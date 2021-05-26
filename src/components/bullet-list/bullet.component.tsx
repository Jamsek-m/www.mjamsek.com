import React from "react";
import {
    listItem,
    itemBullet,
    itemText,
    itemTextEmph
} from "./bullets.module.scss";

export interface BulletProps {
    className: string;
    emphasized: boolean;
    text: string;
}

export const Bullet = (props: BulletProps) => {
    const { className, emphasized, text } = props;
    
    return (
        <li className={`${listItem} ${className}`}>
            <span className={itemBullet}/>
            {emphasized ? (
                <strong className={`${itemText} ${itemTextEmph}`}>{text}</strong>
            ) : (
                <span className={itemText}>{text}</span>
            )}
        </li>
    );
};

Bullet.defaultProps = {
    className: "",
    emphasized: false
};
