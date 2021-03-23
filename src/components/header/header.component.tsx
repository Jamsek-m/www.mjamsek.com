import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Navbar, Nav } from "react-bootstrap";

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
    contactAnchor,
    togglerContainer
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
            <Navbar collapseOnSelect expand="md" fixed="top" className={navbarContainer} variant="dark">
                <div className={togglerContainer}>
                    <Navbar.Toggle onClick={toggle} className={toggler} aria-controls="navbar-collapsible"/>
                </div>
                <Navbar.Collapse hidden={!isOpen} className={collapsible} id="navbar-collapsible">
                    
                    <Nav className={`${navbarContent} mr-auto`} navbar>
                        {NAV_ITEMS(t).map((item, index) => (
                            <Nav.Item className={`${navbarItem} ${isActive(item.url) ? navbarItemActive : ""}`}
                                key={index}>
                                <Link to={item.url} external={item.external}>{item.label}</Link>
                            </Nav.Item>
                        ))}
        
                        <Nav.Item className={navbarItem}>
                            <span className={contactAnchor} onClick={navigateToContacts}>
                                {t("common:nav.contact")}
                            </span>
                        </Nav.Item>
        
                        <Nav.Item className={navbarItem}>
                            <LangSelector/>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </header>
    );
};
