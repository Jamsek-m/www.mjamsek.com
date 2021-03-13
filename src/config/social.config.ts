import { SocialLinks } from "../types";
import mavenCentralIcon from "../assets/images/social/maven_central.jpg";
import nexusIcon from "../assets/images/social/nexus_repo.png";

export const SOCIAL_MAIN_LINKS: SocialLinks = (t) => [
    {
        url: "https://github.com/Jamsek-m",
        label: "GitHub",
        icon: ["fab", "github"]
    },
    {
        url: "https://www.linkedin.com/in/mihajamsek/",
        label: "LinkedIn",
        icon: ["fab", "linkedin-in"]
    }
];

export const CODE_LINKS: SocialLinks = (t) => [
    {
        url: "https://github.com/Jamsek-m",
        label: "GitHub",
        icon: ["fab", "github"]
    },
    {
        url: "https://gitlab.com/Jamsek-m",
        label: "GitLab",
        icon: ["fab", "gitlab"]
    },
    {
        url: "https://bitbucket.org/Jamsek-m/",
        label: "BitBucket",
        icon: ["fab", "bitbucket"]
    },
]

export const REPOSITORIES_LINKS: SocialLinks = (t) => [
    {
        url: "https://www.npmjs.com/~mjamsek",
        label: "Npm",
        icon: ["fab", "npm"]
    },
    {
        url: "https://mvnrepository.com/artifact/com.mjamsek",
        label: "Maven Central",
        image: mavenCentralIcon,
    },
    {
        url: "https://nexus.mjamsek.com/#browse/browse:mjamsek-beta",
        label: "mJamsek Beta",
        image: nexusIcon,
    }
];

export const SOCIAL_OTHER_LINKS: SocialLinks = (t) => [
    {
        url: "https://stackoverflow.com/users/6383445/miha-jamsek",
        label: "Stack Overflow",
        icon: ["fab", "stack-overflow"]
    },
];
