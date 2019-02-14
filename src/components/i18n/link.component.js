import React from "react";
import * as PropTypes from "prop-types";
import { Component } from "react";

import languages from "../../content/languages";
import { Link } from "gatsby";
import { injectIntl, intlShape } from "react-intl";

class LinkComponent extends Component {

    static propTypes = {
        to: PropTypes.string.isRequired,
        intl: intlShape.isRequired,
        children: PropTypes.object
    };

    render() {
        const { to, intl: { locale }, children, ...otherProps } = this.props;
        const path = languages[locale].default ? to : `/${locale}${to}`;
        return (
            <Link to={path} {...otherProps}>
                {children}
            </Link>
        );
    }
}

export default injectIntl(LinkComponent);
