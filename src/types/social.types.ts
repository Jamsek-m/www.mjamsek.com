import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { TFunction } from "react-i18next";

export type SocialLinks = (t: TFunction<string>) => SocialLink[];

export interface SocialLink {
    url: string;
    label: string;
    icon?: IconProp;
    image?: string;
}
