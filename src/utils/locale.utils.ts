import { useI18next } from "gatsby-plugin-react-i18next";

export function getLocalePrefix(currentLang: string, defaultLang: string): string {
    if (currentLang === defaultLang) {
        return "";
    }
    return "/" + currentLang;
}

export function appendPrefix(url: string, prefix: string): string {
    if (url.startsWith("#")) {
        return url;
    }
    return prefix + url;
}

export function useLocalizedUrl() {
    const i18next = useI18next();
    
    return function(url: string) {
        const prefix = getLocalePrefix(i18next.language, i18next.defaultLanguage);
        return appendPrefix(url, prefix);
    };
}
