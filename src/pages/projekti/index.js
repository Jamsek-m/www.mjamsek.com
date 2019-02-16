import React, { Component } from "react";
import PropTypes from "prop-types";
import { LayoutComponent } from "../../components/layout/layout.component";
import data from "../../content/projects.json";
import LinkComponent from "../../components/i18n/link.component";

export default class ProjektiPage extends Component {

    static propTypes = {
        pageContext: PropTypes.object,
    };

    render() {
        const { pageContext: { locale } } = this.props;
        return (
            <LayoutComponent locale={locale}>

                <h1>Projekti</h1>

                {data.projects.map((projekt, index) => (
                    <div key={index}>
                        <LinkComponent to={projekt.path}>
                            {projekt.translations[locale].name}
                        </LinkComponent>
                    </div>
                ))}

            </LayoutComponent>
        );
    }

}
