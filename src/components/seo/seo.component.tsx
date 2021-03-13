import React from "react";
import { Helmet } from "react-helmet";

export interface SeoProps {
    description?: string;
    lang?: string;
    meta?: any[];
    title: string;
}

const SeoComponent = (props: SeoProps) => {
    const { lang, meta, title, description } = props;
    let fullMeta = [
        {
            name: "description",
            content: description
        }
    ];
    if (meta) {
        fullMeta = fullMeta.concat(meta);
    }
    
    return (
        <Helmet
            htmlAttributes={{ lang }}
            title={title}
            titleTemplate={"%s | mJamsek"}
            meta={fullMeta}
        />
    );
};

SeoComponent.defaultProps = {
    lang: "en",
    meta: [],
    description: ""
};

export const Seo = SeoComponent;
