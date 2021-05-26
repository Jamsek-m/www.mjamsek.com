export interface KnowledgeItem {
    title: string;
    emphasized?: boolean;
}

export interface KnowledgeArea {
    title: string;
    items?: KnowledgeItem[];
}

export type KnowledgeAreas = KnowledgeArea[];

export interface ReferenceItem {
    description: string;
}

export interface Reference {
    title: string;
    items?: ReferenceItem[];
}

export type References = Reference[];
