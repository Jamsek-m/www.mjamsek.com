import React, { Component } from "react";

import SEO from "../components/seo";
import { LinkComponent } from "../components/i18n/";
import { LayoutComponent } from "../components/layout/layout.component";
import { FormattedMessage } from "react-intl";

export default class SecondPage extends Component {

    render() {
        const { pageContext } = this.props;
        const locale = pageContext.locale;

        return (
            <LayoutComponent locale={locale}>
                <SEO title="Page two"/>
                <h1>
                    <FormattedMessage id="page2.title"/>
                </h1>
                <p>
                    <FormattedMessage id="page2.para"/>
                </p>
                <LinkComponent to="/">
                    <FormattedMessage id="page2.index"/>
                </LinkComponent>
            </LayoutComponent>
        );
    }

}
