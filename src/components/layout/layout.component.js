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
import Helmet from "react-helmet";
import favicon from "../../assets/favicon.ico";

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
                    <Helmet>
                        <meta charSet="UTF-8"/>
                        <meta name="description" content="Miha Jamsek's personal webpage"/>
                        <meta name="keywords"
                            content="Miha,Jamsek,Jamšek,spletna,stran,website,student,programmer,študent,programer"/>
                        <meta name="author" content="Miha Jamsek"/>

                        <link rel="shortcut icon" href={favicon} type="image/x-icon"/>
                        <link rel="icon" href={favicon} type="image/x-icon"/>
                    </Helmet>

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

