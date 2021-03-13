import React from "react";
import { SocialLink } from "../../types";

import {
    socialLinkContainer,
    imageSection,
    nameSection
} from "./social-card.module.scss";
import { Link } from "../link/link.component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface SocialCardProps {
    socialLink: SocialLink;
}

export const SocialCard = (props: SocialCardProps) => {
    const { socialLink } = props;
    
    return (
        <Link to={socialLink.url} external={true} className={socialLinkContainer} title={socialLink.label}>
            <div className={imageSection}>
                {socialLink.image && (
                    <img src={socialLink.image} alt={socialLink.label}/>
                )}
                {socialLink.icon && !socialLink.image && (
                    <FontAwesomeIcon size="5x" icon={socialLink.icon}/>
                )}
            </div>
            <div className={nameSection}>
                <h4>{socialLink.label}</h4>
            </div>
        </Link>
    );
};

SocialCard.defaultProps = {};
