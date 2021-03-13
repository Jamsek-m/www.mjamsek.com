import { AnchorableSection, NavItems } from "../types";


export const LEARN_MORE_ITEMS: NavItems = (t) => [
    {
        url: "/projects",
        label: t("common:nav.projects")
    },
    {
        url: "#" + AnchorableSection.KNOWLEDGE,
        label: t("index:learn-more.knowledge.title"),
        anchor: true
    },
    {
        url: "#" + AnchorableSection.REFERENCES,
        label: t("index:learn-more.references.title"),
        anchor: true
    }
];
