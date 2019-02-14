import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

export function initializeIcons() {
    const icons = [
        faBars,
        faTimes
    ];
    icons.forEach(icon => {
        library.add(icon);
    });
}
