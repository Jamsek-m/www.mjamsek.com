import React, { useState } from "react";
import { useI18next } from "gatsby-plugin-react-i18next";
import { LANGUAGES } from "../../config/lang.config";
import { toggler, langMenu, langMenuItem } from "./lang-selector.module.scss";
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap";


interface LangSelectorProps {

}

export const LangSelector = (_: LangSelectorProps) => {
    
    const i18next = useI18next();
    const [dropdownOpen, toggleDropdown] = useState(false);
    
    const toggleLanguage = (lang: string) => {
        return () => {
            i18next.changeLanguage(lang);
        };
    };
    
    const toggle = () => {
        return () => {
            toggleDropdown(!dropdownOpen);
        };
    };
    
    return (
        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle onClick={toggle()} className={toggler}>
                <img src={(LANGUAGES as any)[i18next.language].icon} alt={`lang-${i18next.language}`}/>
            </DropdownToggle>
            <DropdownMenu className={langMenu}>
                {Object.keys(LANGUAGES).map((lang: string, index) => (
                    <DropdownItem key={index} className={langMenuItem} onClick={toggleLanguage(lang)}>
                        <img src={(LANGUAGES as any)[lang].icon} alt={`lang-${lang}`}/>
                        <span>{(LANGUAGES as any)[lang].label}</span>
                    </DropdownItem>
                ))}
            </DropdownMenu>
        </Dropdown>
    );
};

LangSelector.defaultProps = {};
