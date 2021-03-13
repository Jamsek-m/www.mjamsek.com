import React from "react";
import { Layout, PageContainer, Seo } from "../components";
import { graphql } from "gatsby";
import { useTranslation } from "react-i18next";

import {container} from "./404.module.scss";

const NotFoundPage = () => {
    const { t } = useTranslation();
    
    return (
        <Layout>
            <Seo title={"404: Not found"}/>
            <PageContainer>
                <div className={container}>
                    <h1>{t("common:404.title")}</h1>
                    <p>{t("common:404.message")}</p>
                </div>
            </PageContainer>
        </Layout>
    );
};

export default NotFoundPage;

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
