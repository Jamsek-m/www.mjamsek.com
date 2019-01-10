import React, { Component } from "react";
import {LayoutComponent} from "../components/layout/layout.component";
import { FormattedMessage } from "react-intl";
import {LinkComponent} from "../components/i18n";

export default class IndexPage extends Component {

    render() {
        const {pageContext} = this.props;
        const locale = pageContext.locale;

        return (
                <LayoutComponent locale={locale}>
                    <div className="index-page">
                        <h1>
                            <FormattedMessage id="index.title"/>
                        </h1>
                        <LinkComponent to="/page-2">
                            <FormattedMessage id="index.page2"/>
                        </LinkComponent>
                    </div>
                </LayoutComponent>
        );
    }
}
