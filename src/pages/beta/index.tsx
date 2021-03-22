import React from "react";
import { graphql } from "gatsby";
import { useTranslation } from "react-i18next";
import { Layout, PageContainer, Seo } from "../../components";
import {
    container,
    content,
    socialLinkItem,
    betaProject,
    socialLinks
} from "./beta.page.module.scss";
import { REPOSITORIES_LINKS } from "../../config/social.config";
import { SocialCard } from "../../components/social-card/social-card.component";

interface BetaPageProps {

}

const BetaPage = (_: BetaPageProps) => {
    const { t } = useTranslation();
    
    const betaMaven = REPOSITORIES_LINKS(t).find(repo => repo.id === "mjamsek_beta");
    const betaNpm = REPOSITORIES_LINKS(t).find(repo => repo.id === "mjamsek-npm-beta");
    
    return (
        <Layout>
            <Seo title={t("common:meta.beta.title")}/>
            <PageContainer containerStyle={container}>
                {/*<div className={header}>*/}
                {/*    <h2>{t("common:meta.beta.title")}</h2>*/}
                {/*</div>*/}
                <div className={content}>
                    <p>{t("beta:intro.para")}</p>
                    
                    <h3>{t("beta:intro.title")}</h3>
                    
                    <div className={betaProject}>
                        <h4>{t("beta:java.title")}</h4>
                        <p>{t("beta:java.description")}:</p>
                        <div className={socialLinks}>
                            <div className={socialLinkItem}>
                                <SocialCard socialLink={betaMaven!}/>
                            </div>
                            <div className={socialLinkItem}>
                                <SocialCard socialLink={betaNpm!}/>
                            </div>
                        </div>
                    </div>
                </div>
            </PageContainer>
        </Layout>
    );
};

export default BetaPage;

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
