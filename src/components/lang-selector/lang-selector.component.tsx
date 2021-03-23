import React, { useState } from "react";
import { useI18next } from "gatsby-plugin-react-i18next";
import { LANGUAGES } from "../../config/lang.config";
import { toggler, langMenu, langMenuItem } from "./lang-selector.module.scss";
import { Dropdown } from "react-bootstrap";


interface LangSelectorProps {

}

export const LangSelector = (_: LangSelectorProps) => {
    
    const i18next = useI18next();
    const [dropdownOpen, toggleDropdown] = useState(false);
    
    const toggleLanguage = (lang: string) => {
        return () => {
            toggleDropdown(false);
            i18next.changeLanguage(lang);
        };
    };
    
    const toggle = () => {
        return () => {
            toggleDropdown(!dropdownOpen);
        };
    };
    
    return (
        <Dropdown show={dropdownOpen}>
            <Dropdown.Toggle variant="success" id="navbar-toggler" className={toggler} onClick={toggle()}>
                <img src={(LANGUAGES as any)[i18next.language].icon} alt={`lang-${i18next.language}`}/>
            </Dropdown.Toggle>
            <Dropdown.Menu className={langMenu}>
                {Object.keys(LANGUAGES).map((lang: string, index) => (
                    <Dropdown.Item key={index}
                        className={langMenuItem}
                        onClick={toggleLanguage(lang)}>
                        <img src={(LANGUAGES as any)[lang].icon} alt={`lang-${lang}`}/>
                        <span>{(LANGUAGES as any)[lang].label}</span>
                    </Dropdown.Item>
                ))}
            </Dropdown.Menu>
        </Dropdown>
    );
};

LangSelector.defaultProps = {};
