import React, { Component } from "react";
import langs from "../../../content/languages";
import { navigate } from "gatsby";
import { LocaleService } from "../../../services/locale.service";

import "./lang-switcher.component.scss";

export class LangSwitcher extends Component {

    constructor(props) {
        super(props);

        this.changeLocale = this.changeLocale.bind(this);
        this.onHoverIn = this.onHoverIn.bind(this);
        this.onHoverOut = this.onHoverOut.bind(this);
        this.onClick = this.onClick.bind(this);

        this.langsWithMedia = LocaleService.getLangObjectWithMedia();

        const currentLocale = LocaleService.getCurrentLocale();
        this.state = {
            currentLocale: currentLocale,
            currentLang: this.langsWithMedia[currentLocale],
            showLangSelection: true,
        };
    }

    changeLocale(newLocale) {
        const url = LocaleService.resolveNewUrl(newLocale);
        navigate(url);
    }

    onHoverIn() {
        this.setState({
            ...this.state,
            showLangSelection: true,
        });
    }

    onHoverOut() {
        this.setState({
            ...this.state,
            showLangSelection: true,
        });
    }

    onClick() {
        this.setState({
            ...this.state,
            showLangSelection: !this.state.showLangSelection,
        });
    }

    render() {
        return (
            <div className="lang-dropdown" onMouseOver={this.onHoverIn} onMouseLeave={this.onHoverOut}>
                <img src={this.state.currentLang.image} onClick={this.onClick}
                    alt={this.state.currentLocale} title={this.state.currentLang.text}/>

                {this.state.showLangSelection ?
                    <div className="dropdown-content">
                        {Object.keys(this.langsWithMedia).map((lang, index) => (
                            <div key={index} className="lang-dropdown-item"
                                onClick={() => this.changeLocale(this.langsWithMedia[lang].locale)}>
                                <img src={this.langsWithMedia[lang].image} alt={this.langsWithMedia[lang].locale}
                                    title={this.langsWithMedia[lang].text}/>
                            </div>
                        ))}
                    </div> : null
                }
            </div>
        );
    }
}
