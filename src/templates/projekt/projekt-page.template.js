import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { LayoutComponent } from "../../components/layout/layout.component";


export default class ProjektPageTemplate extends Component {

    render() {
        const { pageContext } = this.props;
        const locale = pageContext.locale;
        const project = pageContext.project;

        return (
            <LayoutComponent locale={locale}>
                <h1>{project.translations[locale].name}</h1>
                <p>{project.translations[locale].shortDescription}</p>
            </LayoutComponent>
        );

    }
}
