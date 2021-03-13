import { TFunction } from "react-i18next";
import { NavItems } from "../types";

export const NAV_ITEMS: NavItems = (t: TFunction<string>) => [
    {
        url: "/",
        label: t("common:nav.home")
    },
    {
        url: "/projects",
        label: t("common:nav.projects")
    },
    {
        url: "/social",
        label: t("common:nav.social")
    }
];
