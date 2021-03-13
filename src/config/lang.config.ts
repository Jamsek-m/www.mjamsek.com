import { Languages, Locales } from "../types";

import slImage from "../assets/images/sl-lang32.png";
import enImage from "../assets/images/en-lang32.png";

export const LANGUAGES: Locales = {
    [Languages.SL]: {
        icon: slImage,
        label: "SL",
    },
    [Languages.EN]: {
        icon: enImage,
        label: "EN",
    }
};
