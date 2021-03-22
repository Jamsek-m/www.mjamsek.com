import { SocialLinks } from "../types";
import mavenCentralIcon from "../assets/images/social/maven_central.jpg";
import nexusIcon from "../assets/images/social/nexus_repo.png";

export const SOCIAL_MAIN_LINKS: SocialLinks = (t) => [
    {
        id: "github",
        url: "https://github.com/Jamsek-m",
        label: "GitHub",
        icon: ["fab", "github"]
    },
    {
        id: "linkedin",
        url: "https://www.linkedin.com/in/mihajamsek/",
        label: "LinkedIn",
        icon: ["fab", "linkedin-in"]
    }
];

export const CODE_LINKS: SocialLinks = (t) => [
    {
        id: "github",
        url: "https://github.com/Jamsek-m",
        label: "GitHub",
        icon: ["fab", "github"]
    },
    {
        id: "gitlab",
        url: "https://gitlab.com/Jamsek-m",
        label: "GitLab",
        icon: ["fab", "gitlab"]
    },
    {
        id: "bitbucket",
        url: "https://bitbucket.org/Jamsek-m/",
        label: "BitBucket",
        icon: ["fab", "bitbucket"]
    }
];

export const REPOSITORIES_LINKS: SocialLinks = (t) => [
    {
        id: "npm",
        url: "https://www.npmjs.com/~mjamsek",
        label: "Npm",
        icon: ["fab", "npm"]
    },
    {
        id: "maven_central",
        url: "https://mvnrepository.com/artifact/com.mjamsek",
        label: "Maven Central",
        image: mavenCentralIcon
    },
    {
        id: "mjamsek_beta",
        url: "https://nexus.mjamsek.com/#browse/browse:mjamsek-beta",
        label: "mJamsek Beta",
        image: nexusIcon
    }
];

export const SOCIAL_OTHER_LINKS: SocialLinks = (t) => [
    {
        id: "stack_overflow",
        url: "https://stackoverflow.com/users/6383445/miha-jamsek",
        label: "Stack Overflow",
        icon: ["fab", "stack-overflow"]
    }
];

type UrlNameTranslation = {
    url: string;
    name: string;
}

const TRANSLATIONS: UrlNameTranslation[] = [
    {
        url: "https://mvnrepository.com/artifact",
        name: "Maven Central"
    },
    {
        url: "https://nexus.mjamsek.com",
        name: "mJamsek Beta"
    },
    {
        url: "https://www.npmjs.com/package",
        name: "NPM"
    },
    {
        url: "https://github.com",
        name: "GitHub"
    }
];

export function translateUrlToName(url: string): string {
    const foundTranslation = TRANSLATIONS.find(tr => url.startsWith(tr.url));
    if (foundTranslation) {
        return foundTranslation.name;
    }
    return url;
}
