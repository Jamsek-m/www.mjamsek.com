import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Collapse, Nav, Navbar, NavbarToggler, NavItem } from "reactstrap";

import { useNavigateToContacts } from "../../utils";
import { NAV_ITEMS } from "../../config/nav.config";
import { Link } from "../link/link.component";
import { LangSelector } from "../lang-selector/lang-selector.component";

import {
    container,
    navbarContent,
    navbarItem,
    navbarItemActive,
    navbarContainer,
    collapsible,
    toggler,
    contactAnchor
} from "./header.module.scss";


export const Header = () => {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const navigateToContacts = useNavigateToContacts();
    
    const toggle = () => {
        setIsOpen(!isOpen);
    };
    
    const isActive = (url: string): boolean => {
        if (typeof window !== "undefined") {
            const path = window.location.pathname;
            if (url === "/" && path === "/") {
                return true;
            } else {
                if (url === "/") {
                    return false;
                }
                return path.includes(url);
            }
        }
        return false;
    };
    
    return (
        <header className={container}>
            <Navbar dark expand="md" fixed="top" className={navbarContainer}>
                <NavbarToggler onClick={toggle} className={toggler}/>
                <Collapse isOpen={isOpen} navbar className={collapsible}>
                    <Nav className={navbarContent} navbar>
                        {NAV_ITEMS(t).map((item, index) => (
                            <NavItem className={`${navbarItem} ${isActive(item.url) ? navbarItemActive : ""}`}
                                key={index}>
                                <Link to={item.url} external={item.external}>{item.label}</Link>
                            </NavItem>
                        ))}
                        
                        <NavItem className={navbarItem}>
                            <span className={contactAnchor} onClick={navigateToContacts}>
                                {t("common:nav.contact")}
                            </span>
                        </NavItem>
                        
                        <NavItem className={navbarItem}>
                            <LangSelector/>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </header>
    );
};
