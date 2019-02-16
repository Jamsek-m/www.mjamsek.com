import { library } from "@fortawesome/fontawesome-svg-core";
import {
    faArrowRight,
    faBars, faChevronCircleLeft, faChevronCircleRight,
    faChevronLeft,
    faChevronRight,
    faDownload,
    faLink,
    faTimes,
} from "@fortawesome/free-solid-svg-icons";
import {
    faBitbucket,
    faGithub,
    faGitlab,
    faLinkedinIn,
    faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";

export function initializeIcons() {
    const icons = [
        faBars,
        faTimes,
        faLinkedinIn,
        faGithub,
        faStackOverflow,
        faBitbucket,
        faGitlab,
        faArrowRight,
        faLink,
        faDownload,
        faChevronLeft,
        faChevronRight,
        faChevronCircleLeft,
        faChevronCircleRight
    ];
    icons.forEach(icon => {
        library.add(icon);
    });
}
