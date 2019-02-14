import langs from "../content/languages";


export class LocaleService {

    static getCurrentLocale() {
        const foundLocale = LocaleService.__getLocale();
        if (foundLocale) {
            return foundLocale;
        }
        return Object.keys(langs).find(lang => langs[lang].default);
    }

    static resolveNewUrl(newLocale) {
        const paths = LocaleService.__getPaths();
        const foundLocale = LocaleService.__getLocale();
        if (foundLocale) {
            paths.shift();
        }
        return `/${langs[newLocale].default ? "" : newLocale + "/"}${paths.join("/")}`;
    }

    static __getLocale() {
        if (typeof window !== "undefined") {
            const paths = LocaleService.__getPaths();
            return Object.keys(langs).find(lang => langs[lang].locale === paths[0]);
        }
        return null;
    }

    static __getPaths() {
        if (typeof window !== "undefined") {
            let url = window.location.pathname;
            if (url.startsWith("/")) {
                url = url.substring(1);
            }
            if (url.endsWith("/")) {
                url = url.substring(0, url.length - 1);
            }
            return url.split("/");
        }
        return null;
    }

}
