import { TFunction } from "i18next";
import { KnowledgeAreas } from "../types";

export const KNOWLEDGE: (t: TFunction) => KnowledgeAreas = (t) => [
    {
        title: t("index:learn-more.knowledge.technologies.backend.title"),
        items: [
            {
                title: "Java EE",
                emphasized: true
            },
            {
                title: "Node.js"
            },
            {
                title: "Docker & Docker Compose"
            }
        ]
    },
    {
        title: t("index:learn-more.knowledge.technologies.frontend.title"),
        items: [
            {
                title: "Angular",
                emphasized: true
            },
            {
                title: "React"
            },
            {
                title: "GatsbyJs"
            },
            {
                title: "Typescript"
            }
        ]
    },
    {
        title: t("index:learn-more.knowledge.technologies.mobile.title"),
        items: [
            {
                title: "React Native"
            },
        ]
    },
    {
        title: t("index:learn-more.knowledge.technologies.other.title"),
        items: [
            {
                title: "Keycloak"
            },
            {
                title: "Jenkins"
            }
        ]
    }
];
