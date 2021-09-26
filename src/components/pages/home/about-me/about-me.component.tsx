import React from "react";
import { useTranslation } from "react-i18next";

import {
    container,
    header,
    aboutMe,
    avatar,
    description,
} from "./about-me.module.scss";
import avatarImage from "../../../../assets/images/avatar-circle.png";

interface AboutMeProps {

}

export const AboutMe = (_: AboutMeProps) => {
    const { t } = useTranslation();
    
    return (
        <div className={container}>
            
            <div className={header}>
                <h1>{t("index:header.title")}</h1>
            </div>
            
            <div className={aboutMe}>
                <div className={avatar}>
                    <img src={avatarImage} alt="avatar"/>
                </div>
                <div className={description}>
                    <p>{t("index:header.about-me.para")}</p>
                </div>
            </div>
        </div>
    );
};

AboutMe.defaultProps = {};
