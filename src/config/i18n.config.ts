import i18n from "i18next";
import detector from "i18next-browser-languagedetector";
import backend from "i18next-http-backend";
import cache from "i18next-localstorage-cache";
import { initReactI18next } from "react-i18next";

import slCommon from "../../static/locales/sl/common.json";

import enCommon from "../../static/locales/en/common.json";

i18n
    .use(detector)
    .use(backend)
    .use(cache)
    .use(initReactI18next)
    .init({
        fallbackLng: "sl",
        load: "languageOnly",
        preload: ["en", "sl"],
        ns: ["common"],
        defaultNS: "common",
        debug: false,
        interpolation: {
            escapeValue: false
        },
        react: {
            wait: true,
            bindI18n: "languageChanged, loaded"
        }
    });

i18n.addResourceBundle("en", "common", enCommon);

i18n.addResourceBundle("sl", "common", slCommon);

export default i18n;
