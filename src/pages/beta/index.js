import React, {Component} from "react";
import {FormattedMessage} from "react-intl";
import * as PropTypes from "prop-types";

import {GoogleAnalyticsService} from "../../services/google.analytics.service";

import {LayoutComponent} from "../../components/layout/layout.component";
import HelmetTitleComponent from "../../components/i18n/helmet-title.component";

import "./beta.page.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default class BetaPage extends Component {
    static propTypes = {
        pageContext: PropTypes.object,
    };
    
    componentDidMount() {
        GoogleAnalyticsService.registerPageView();
    }
    
    render() {
        const { pageContext: { locale } } = this.props;
        return (
            <LayoutComponent locale={locale}>
                <div className="beta-page">
                    <HelmetTitleComponent titleTag="page.beta.title"/>
                    
                    <p className="para-1">
                        <FormattedMessage id="page.beta.para-1"/>
                    </p>
                    
                    <div className="beta-projects">
                        <h2>
                            <FormattedMessage id="page.beta.projects.title"/>
                        </h2>
                        
                        <div className="beta-project">
                            <h3>
                                <FormattedMessage id="page.beta.projects.java.title"/>
                            </h3>
                            <p>
                                <FormattedMessage id="page.beta.projects.java.subtitle"/>
                                :
                            </p>
    
                            <a href="https://nexus.mjamsek.com/#browse/browse:mjamsek-beta" target="_blank" rel="noreferrer noopener">
                                <FontAwesomeIcon icon={"link"}/>
                                <span className="beta-download-link">
                                    <FormattedMessage id="page.beta.projects.java.link"/>
                                </span>
                            </a>
                        </div>
                        
                    </div>
                </div>
            </LayoutComponent>
        );
    }
}
