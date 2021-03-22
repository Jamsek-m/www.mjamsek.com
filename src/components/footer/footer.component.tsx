import React from "react";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SOCIAL_MAIN_LINKS } from "../../config/social.config";
import { Link } from "../link/link.component";

import {
    socialLink,
    socialLinks,
    container,
    containerPadding,
    copyright,
    contactForm,
    contactFormContainer,
    content
} from "./footer.module.scss";
import { ContactForm } from "../contact-form/contact-form.component";

interface FooterProps {
    contact: boolean;
    paddingBottom: boolean;
}

export const Footer = (props: FooterProps) => {
    const { contact, paddingBottom } = props;
    const { t } = useTranslation();
    
    return (
        <footer className={`${container} ${paddingBottom ? containerPadding : ""}`}>
            <div className={content}>
                <div className={socialLinks}>
                    {SOCIAL_MAIN_LINKS(t).map((link, index) => (
                        <Link key={index}
                            to={link.url}
                            title={link.label}
                            className={socialLink}
                            external={true}
                        >
                            {link.icon && (
                                <FontAwesomeIcon icon={link.icon}/>
                            )}
                            {link.image && (
                                <img src={link.image} alt={link.label}/>
                            )}
                        </Link>
                    ))}
                </div>
                {contact && (
                    <div className={contactFormContainer}>
                        <div className={contactForm}>
                            <ContactForm/>
                        </div>
                    </div>
                )}
                <div className={copyright}>
                    mJamsek, {t("common:footer.copyright")} © {new Date().getFullYear()}
                </div>
            </div>
        </footer>
    );
};

Footer.defaultProps = {
    contact: true,
    paddingBottom: true
};
