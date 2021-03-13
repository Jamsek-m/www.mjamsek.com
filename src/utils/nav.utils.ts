import { AnchorableSection } from "../types";
import { navigate } from "gatsby";
import { useLocalizedUrl } from "./locale.utils";

export function useNavigateToContacts() {
    const localizeUrl = useLocalizedUrl();
    
    return () => {
        const elem: HTMLDivElement | null = document.querySelector("#" + AnchorableSection.CONTACT) as HTMLDivElement;
        if (elem) {
            elem.scrollIntoView({
                behavior: "smooth",
                block: "start",
                inline: "start"
            });
        } else {
            const contactUrl = localizeUrl("/") + "#" + AnchorableSection.CONTACT;
            navigate(contactUrl);
        }
    };
}
