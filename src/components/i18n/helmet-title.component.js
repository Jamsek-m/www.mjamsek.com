import React, { Component } from "react";
import Helmet from "react-helmet";
import PropTypes from "prop-types";
import { injectIntl, intlShape } from "react-intl";


class HelmetTitleComponent extends Component {

    static propTypes = {
        title: PropTypes.string,
        titleTag: PropTypes.string,
        intl: intlShape.isRequired,
    };

    constructor(props) {
        super(props);
        this.renderMessage = this.renderMessage.bind(this);
    }

    renderMessage() {
        const { title, titleTag, intl } = this.props;
        if (title) {
            return `${title} - mJamsek`;
        } else if (titleTag) {
            return `${intl.formatMessage({ id: titleTag })} - mJamsek`;
        } else {
            return "mJamsek";
        }
    }

    render() {
        return (
            <Helmet>
                <title>{this.renderMessage()}</title>
            </Helmet>
        );
    }
}

export default injectIntl(HelmetTitleComponent);
