import React, { Component } from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import PropTypes from "prop-types";
import { LayoutComponent } from "../components/layout/layout.component";
import { FormattedMessage } from "react-intl";

/*const NotFoundPage = () => (
    <Layout>
        <SEO title="404: Not found" />
        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
);

export default NotFoundPage;*/

export default class NotFoundPage extends Component {

    static propTypes = {
        pageContext: PropTypes.object,
    };

    render() {
        const { pageContext } = this.props;
        const locale = pageContext.locale;

        return (
            <LayoutComponent locale={locale}>
                <div className="page-404">
                    <h1 className="text-center"><FormattedMessage id="not-found.title"/></h1>
                    <p className="text-center"><FormattedMessage id="not-found.message"/></p>
                    <p className="text-center">
                        <FormattedMessage id="not-found.home"/>
                        <a href="#">
                            <FormattedMessage id="not-found.link"/>
                        </a>
                    </p>
                </div>
            </LayoutComponent>
        );
    }

}
