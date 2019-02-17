import React, { Component } from "react";
import PropTypes from "prop-types";
import { LinkComponent } from "../../i18n";
import { FormattedMessage } from "react-intl";

import "./header-link.component.scss";

export class HeaderLinkComponent extends Component {

    static propTypes = {
        menuItem: PropTypes.object,
        active: PropTypes.bool,
        whenSelected: PropTypes.func,
    };

    render() {
        const { menuItem, active, whenSelected } = this.props;
        const clazz = (active && menuItem.internal) ? "nav-links active-nav-link" : "nav-links";
        if (menuItem.internal) {
            return (
                <LinkComponent to={menuItem.url} className={clazz} onClick={() => whenSelected(true)}>
                    <FormattedMessage id={menuItem.labelTag}/>
                </LinkComponent>
            );
        } else {
            return (
                <a href={menuItem.url} target="_blank" rel="noreferrer noopener" className={clazz}>
                    <FormattedMessage id={menuItem.labelTag}/>
                </a>
            );
        }
    }
}
