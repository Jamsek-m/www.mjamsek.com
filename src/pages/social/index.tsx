import React from "react";
import { graphql } from "gatsby";
import { Layout, PageContainer, Seo } from "../../components";
import { useTranslation } from "react-i18next";
import { CODE_LINKS, REPOSITORIES_LINKS, SOCIAL_MAIN_LINKS, SOCIAL_OTHER_LINKS } from "../../config/social.config";
import { SocialCard } from "../../components/social-card/social-card.component";

import {
    socialLinks,
    socialLinkItem,
    sectionTitle,
    pageContainer,
    sectionDesc,
    socialProfilesContactLink
} from "./social.page.module.scss";
import { useNavigateToContacts } from "../../utils";

const SocialPage = () => {
    const { t } = useTranslation();
    const navigateToContacts = useNavigateToContacts();
    
    return (
        <Layout footer={{ show: true, contact: false }} slimFooter={true}>
            <Seo title={t("common:meta.social.title")}/>
            <PageContainer containerStyle={pageContainer}>
                {/* MAIN LINKS */}
                <h2 className={sectionTitle}>{t("social:social-profiles.title")}</h2>
                <p className={sectionDesc}>
                    {t("social:social-profiles.description")}{" "}
                    <span className={socialProfilesContactLink}
                        onClick={navigateToContacts}>
                        {t("social:social-profiles.contact-link")}
                    </span>
                    .
                </p>
                <div className={socialLinks}>
                    {SOCIAL_MAIN_LINKS(t).map((link, index) => (
                        <div key={index} className={socialLinkItem}>
                            <SocialCard socialLink={link}/>
                        </div>
                    ))}
                </div>
    
                {/* REPOSITORIES LINKS */}
                <h2 className={sectionTitle}>{t("social:repos.title")}</h2>
                <p className={sectionDesc}>
                    {t("social:repos.description")}
                </p>
                <div className={socialLinks}>
                    {REPOSITORIES_LINKS(t).map((link, index) => (
                        <div key={index} className={socialLinkItem}>
                            <SocialCard socialLink={link}/>
                        </div>
                    ))}
                </div>
                
                {/* SOURCE CODE LINKS */}
                <h2 className={sectionTitle}>{t("social:code.title")}</h2>
                <p className={sectionDesc}>
                    {t("social:code.description")}
                </p>
                <div className={socialLinks}>
                    {CODE_LINKS(t).map((link, index) => (
                        <div key={index} className={socialLinkItem}>
                            <SocialCard socialLink={link}/>
                        </div>
                    ))}
                </div>
    
                {/* OTHER LINKS */}
                <h2 className={sectionTitle}>{t("social:others.title")}</h2>
                <div className={socialLinks}>
                    {SOCIAL_OTHER_LINKS(t).map((link, index) => (
                        <div key={index} className={socialLinkItem}>
                            <SocialCard socialLink={link}/>
                        </div>
                    ))}
                </div>
            </PageContainer>
        </Layout>
    );
};

export default SocialPage;

export const query = graphql`
    query($language: String!) {
        locales: allLocale(filter: {language: {eq: $language}}) {
            edges {
                node {
                    ns
                    data
                    language
                }
            }
        }
    }
`;
