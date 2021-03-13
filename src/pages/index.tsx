import React from "react";
import {
    AboutMe,
    AnchoredSection,
    KnowledgeSection,
    Layout,
    LearnMore,
    PageContainer,
    ReferencesSection,
    Seo
} from "../components";
import { graphql } from "gatsby";

import {
    headerContainer,
    headerSection,
    headerDivider,
    referencesSection,
    learnMoreSection,
} from "./index.page.module.scss";
import { AnchorableSection } from "../types";

const IndexPage = () => {
    
    return (
        <Layout>
            <Seo title={"Home"}/>
            
            <div className={headerContainer}>
                <section className={headerSection}>
                    <AboutMe/>
                </section>
                
                <div className={headerDivider}/>
                
                <section className={headerSection}>
                    <LearnMore/>
                </section>
            </div>
            
            <PageContainer>
                
                <AnchoredSection id={AnchorableSection.KNOWLEDGE} className={learnMoreSection}>
                    <KnowledgeSection/>
                </AnchoredSection>
    
                <AnchoredSection id={AnchorableSection.REFERENCES} className={`${learnMoreSection} ${referencesSection}`}>
                    <ReferencesSection/>
                </AnchoredSection>
            
            </PageContainer>
        </Layout>
    );
};

export default IndexPage;

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
