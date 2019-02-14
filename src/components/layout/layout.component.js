import React from "react";
import { Component } from "react";

import slData from "react-intl/locale-data/sl";
import enData from "react-intl/locale-data/en";

import enTranslations from "../i18n/messages/en.json";
import slTranslations from "../i18n/messages/sl.json";
import { addLocaleData, IntlProvider } from "react-intl";
import { HeaderComponent } from "./header/header.component";
import { initializeIcons } from "../../content/fontawesome-icons";

const messages = {
    en: enTranslations,
    sl: slTranslations
};

addLocaleData([...enData, ...slData]);

initializeIcons();

import "./layout.component.scss";


export class LayoutComponent extends Component {

    render() {
        const { locale, children } = this.props;

        return (
            <IntlProvider locale={locale} messages={messages[locale]}>
                <div className="wrapper">
                    <HeaderComponent/>
                    <div className="content">
                        {children}
                    </div>
                </div>
            </IntlProvider>
        );
    }
}

