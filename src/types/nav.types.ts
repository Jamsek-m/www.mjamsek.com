import { TFunction } from "react-i18next";

export interface NavigationItem {
    url: string;
    label: string;
    external?: boolean;
    anchor?: boolean;
}

export type NavItems = (t: TFunction<string>) => NavigationItem[];

export enum AnchorableSection {
    CONTACT = "contact",
    KNOWLEDGE = "knowledge",
    REFERENCES = "references",
}
