import { library } from "@fortawesome/fontawesome-svg-core";

import {
    faBitbucket,
    faGithub,
    faGitlab,
    faLinkedinIn, faNpm,
    faStackOverflow
} from "@fortawesome/free-brands-svg-icons";
import {
    faDatabase
} from "@fortawesome/free-solid-svg-icons";

export function initializeIcons() {
    const icons = [
        faDatabase,
        faBitbucket,
        faGithub,
        faGitlab,
        faLinkedinIn, faNpm,
        faStackOverflow
    ];
    library.add(...icons);
}
