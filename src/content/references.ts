import { TFunction } from "i18next";
import { References } from "../types";

export const REFERENCES: (t: TFunction) => References = (t) => [
    {
        title: t("index:learn-more.references.items.restclient.title"),
        items: [
            {
                description: t("index:learn-more.references.items.restclient.item-1"),
            },
            {
                description: t("index:learn-more.references.items.restclient.item-2")
            }
        ]
    },
    {
        title: t("index:learn-more.references.items.mashery.title"),
        items: [
            {
                description: t("index:learn-more.references.items.mashery.item-1"),
            },
            {
                description: t("index:learn-more.references.items.mashery.item-2")
            },
            {
                description: t("index:learn-more.references.items.mashery.item-3")
            }
        ]
    },
    {
        title: t("index:learn-more.references.items.kee.title"),
        items: [
            {
                description: t("index:learn-more.references.items.kee.item-1")
            },
            {
                description: t("index:learn-more.references.items.kee.item-2")
            },
            {
                description: t("index:learn-more.references.items.kee.item-3")
            }
        ]
    }
];
