import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { LangSwitcher } from "../../i18n/lang-switcher/lang-switcher.component";


export class HeaderComponent extends Component {

    render() {

        return (
            <div className="header">
                <FormattedMessage id="header.title"/>
                <LangSwitcher/>
            </div>
        );
    }

}
