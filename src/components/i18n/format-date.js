import moment from "moment";
import languages from "../../content/languages";

export function formatDate(isoDate, locale) {
    const format = languages[locale].dateFormat;
    return moment(isoDate).format(format);
}
