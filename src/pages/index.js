import React, { Component } from "react";
import * as PropTypes from "prop-types";
import { LayoutComponent } from "../components/layout/layout.component";
import { FormattedMessage } from "react-intl";
import avatarImage from "../assets/images/avatar-circle.png";

import "./index.page.scss";
import { CurrentProjectsComponent } from "../components/current-projects/current-projects.component";
import HelmetTitleComponent from "../components/i18n/helmet-title.component";
import { GoogleAnalyticsService } from "../services/google.analytics.service";

export default class IndexPage extends Component {

    static propTypes = {
        pageContext: PropTypes.object,
    };

    componentDidMount() {
        GoogleAnalyticsService.registerPageView();
    }

    render() {
        const { pageContext } = this.props;
        const locale = pageContext.locale;

        return (
            <LayoutComponent locale={locale}>
                <div className="index-page">
                    <HelmetTitleComponent/>
                    <div className="index-header">
                        <img src={avatarImage} alt="avatar"/>
                        <h1><FormattedMessage id="index.about"/></h1>
                    </div>

                    <p><FormattedMessage id="index.content.short_intro"/></p>
                    <h3><FormattedMessage id="index.content.cv_title"/></h3>
                    <p><FormattedMessage id="index.content.cv"/></p>
                    <h3><FormattedMessage id="index.content.tech_title"/></h3>
                    <p><FormattedMessage id="index.content.tech"/></p>
                    <CurrentProjectsComponent locale={locale}/>
                </div>
            </LayoutComponent>
        );
    }
}
