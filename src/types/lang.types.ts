export enum Languages {
    SL = "sl",
    EN = "en"
}

export interface Locale {
    label: string;
    icon: string;
}

export type Locales = Record<Languages, Locale>;
