import React from "react";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

export interface SeoProps {
    description?: string;
    lang?: string;
    meta?: any[];
    title: string;
}

export const Seo = (props: SeoProps) => {
    const { lang, meta, title, description } = props;
    const { i18n } = useTranslation();
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
            htmlAttributes={{ lang: lang || i18n.language }}
            title={title}
            titleTemplate={"%s | mJamsek"}
            meta={fullMeta}
        />
    );
};

Seo.defaultProps = {
    lang: "en",
    meta: [],
    description: ""
};

