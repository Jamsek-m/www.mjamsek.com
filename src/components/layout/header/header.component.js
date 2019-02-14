import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./header.component.scss";
import { LinkComponent } from "../../i18n";
import { menuLinks } from "../../../content/menu-links";
import { HeaderLinkComponent } from "./header-link.component";
import { LangSwitcher } from "../../i18n/lang-switcher/lang-switcher.component";

export class HeaderComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            openedMobileMenu: false,
            activeLink: this.initActiveLink(),
        };
        this.changeActivePage = this.changeActivePage.bind(this);
        this.isLinkActive = this.isLinkActive.bind(this);
        this.getRootLink = this.getRootLink.bind(this);
        this.toggleMobileMenu = this.toggleMobileMenu.bind(this);
    }

    toggleMobileMenu() {
        this.setState({
            ...this.state,
            openedMobileMenu: !this.state.openedMobileMenu,
        });
    }

    initActiveLink() {
        const pattern = new RegExp(/(\/[a-zA-Z0-9]*)\/?\d+$/);
        const match = pattern.exec(window.location.pathname);
        if (match) {
            return menuLinks.find(link => link.url === match[1]) || menuLinks[0];
        } else {
            return menuLinks.find(link => link.url === window.location.pathname) || menuLinks[0];
        }
    }

    changeActivePage(selectedLink) {
        if (selectedLink.internal) {
            this.setState({
                ...this.state,
                activeLink: selectedLink,
            });
        }
    }

    isLinkActive(menuItem) {
        if (!this.state.activeLink) return false;
        return menuItem.id === this.state.activeLink.id;
    }

    getRootLink() {
        return menuLinks.find(link => link.id === "home");
    }

    render() {
        const mobileMenuClass = this.state.openedMobileMenu ? "active-mobile-menu" : "inactive-mobile-menu";
        const mobileIcon = this.state.openedMobileMenu ? "times" : "bars";

        return (
            <div className="navbar-container">
                <nav className="navbar">
                    <div className="navbar-visible">
                        <span id="navbar-lang">
                            <LangSwitcher/>
                        </span>
                        <span id="navbar-toggle" onClick={this.toggleMobileMenu}>
                            <FontAwesomeIcon icon={mobileIcon}/>
                        </span>
                        <LinkComponent to="/" id="logo" onClick={() => this.changeActivePage(this.getRootLink())}>
                            <FormattedMessage id="navbar.logo"/>
                        </LinkComponent>
                    </div>
                    <ul id="main-nav" className={mobileMenuClass}>
                        {menuLinks.map((menuLink, index) => (
                            <li key={index}>
                                <HeaderLinkComponent menuItem={menuLink}
                                    active={this.isLinkActive(menuLink)}
                                    whenSelected={() => this.changeActivePage(menuLink)}/>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        );
    }

}
