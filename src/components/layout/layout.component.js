import React, { Component } from "react";
import PropTypes from "prop-types";

import slData from "react-intl/locale-data/sl";
import enData from "react-intl/locale-data/en";

import enTranslations from "../../content/translations/en.json";
import slTranslations from "../../content/translations/sl.json";
import { addLocaleData, IntlProvider } from "react-intl";
import { HeaderComponent } from "./header/header.component";
import { initializeIcons } from "../../content/fontawesome-icons";
import { FooterComponent } from "./footer/footer.component";

const messages = {
    en: enTranslations,
    sl: slTranslations,
};

addLocaleData([...enData, ...slData]);

initializeIcons();

import "./layout.component.scss";


export class LayoutComponent extends Component {

    static propTypes = {
        locale: PropTypes.string,
        children: PropTypes.object,
    };

    render() {
        const { locale, children } = this.props;
        return (
            <IntlProvider locale={locale} messages={messages[locale]}>
                <div className="wrapper">
                    <HeaderComponent/>
                    <div className="content">
                        <section>
                            {children}
                        </section>
                    </div>
                    <FooterComponent/>
                </div>
            </IntlProvider>
        );
    }
}

