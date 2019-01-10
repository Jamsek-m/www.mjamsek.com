import React, { Component } from "react";
import langs from "../../../content/languages";
import { navigate } from "gatsby";

export class LangSwitcher extends Component {

    constructor(props) {
        super(props);
        this.changeLocale = this.changeLocale.bind(this);
    }

    resolveNewUrl(newLocale) {
        if (typeof window !== "undefined") {
            let url = window.location.pathname;
            if (url.startsWith("/")) {
                url = url.substring(1);
            }
            if (url.endsWith("/")) {
                url = url.substring(0, url.length - 1);
            }
            const paths = url.split("/");

            const foundLocale = Object.keys(langs).find(lang => langs[lang].locale === paths[0]);
            if (foundLocale) {
                paths.shift();
            }
            return `/${langs[newLocale].default ? "" : newLocale + "/"}${paths.join("/")}`;
        }
    }

    changeLocale(newLocale) {
        const url = this.resolveNewUrl(newLocale);
        navigate(url);
    }

    render() {

        return (
            <span>
                {Object.keys(langs).map((lang, index) => (
                    <button key={index} onClick={() => this.changeLocale(lang)}>{langs[lang].text}</button>
                ))}
            </span>
        );
    }
}
