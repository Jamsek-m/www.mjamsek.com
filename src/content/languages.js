const slImage = require("../assets/images/sl-lang32.png");
const enImage = require("../assets/images/en-lang32.png");

module.exports = {
    en: {
        path: "en",
        locale: "en",
        text: "English",
        dateFormat: "",
        image: enImage,
    },
    sl: {
        path: "sl",
        locale: "sl",
        text: "Slovenščina",
        dateFormat: "",
        image: slImage,
        default: true,
    },
};
