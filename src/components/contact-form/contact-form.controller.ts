import { ContactFormData } from "../../types";
import { Dispatch, SetStateAction } from "react";
import { TFunction } from "react-i18next";
import { formItem, errored as erroredStyle, formItemText } from "./contact-form.module.scss";

export function validateForm(contactForm: ContactFormData, setter: Dispatch<SetStateAction<ContactFormData>>, t: TFunction): boolean {
    const contactCopy = contactForm.resetErrors();
    
    let hasErrored = false;
    if (contactCopy.name.value.length === 0) {
        contactCopy.name.error = t("common:footer.contact.errors.name");
        hasErrored = true;
    }
    if (contactCopy.email.value.length === 0) {
        contactCopy.email.error = t("common:footer.contact.errors.email");
        hasErrored = true;
    }
    if (contactCopy.message.value.length === 0) {
        contactCopy.message.error = t("common:footer.contact.errors.message");
        hasErrored = true;
    }
    setter(contactCopy);
    
    return !hasErrored;
}

export function determineInputStyle(errored: boolean): string {
    if (errored) {
        return `${formItem} ${erroredStyle}`;
    }
    return formItem;
}

export function determineTextAreaStyle(errored: boolean): string {
    if (errored) {
        return `${formItem} ${formItemText} ${erroredStyle}`;
    }
    return `${formItem} ${formItemText}`;
}
