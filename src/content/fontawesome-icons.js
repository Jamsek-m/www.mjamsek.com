import { library } from "@fortawesome/fontawesome-svg-core";
import { faArrowRight, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { faBitbucket, faGithub, faGitlab, faLinkedin, faStackOverflow } from "@fortawesome/free-brands-svg-icons";

export function initializeIcons() {
    const icons = [
        faBars,
        faTimes,
        faLinkedin,
        faGithub,
        faStackOverflow,
        faBitbucket,
        faGitlab,
        faArrowRight
    ];
    icons.forEach(icon => {
        library.add(icon);
    });
}
