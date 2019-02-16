import languages from "../../content/languages";
import {navigate} from "gatsby";

export function navigateTo(to, locale) {
    const path = languages[locale].default ? to : `${locale}/${to}`;
    navigate(path);
}
