import React, { FormEvent, useState } from "react";
import { AnchoredSection } from "../anchored-section/anchored-section.component";
import { AnchorableSection, ContactFormData } from "../../types";
import {
    container,
    title,
    messageSection,
    nameSection,
    form,
    actions,
    formItemLabel,
    submitButton,
    alert,
    alerts,
    alertError,
    alertSent,
    formItemGroup
} from "./contact-form.module.scss";
import { useTranslation } from "react-i18next";
import { EmailService } from "../../services";
import { determineInputStyle, determineTextAreaStyle, validateForm } from "./contact-form.controller";
import { Error } from "./error/error.component";

interface ContactFormProps {

}

type SendResultType = null | "sent" | "error";

export const ContactForm = (_: ContactFormProps) => {
    const { t } = useTranslation();
    const emailService = EmailService.getInstance();
    
    const [contact, setContact] = useState<ContactFormData>(new ContactFormData());
    const [sending, setSending] = useState<boolean>(false);
    const [resultType, setResultType] = useState<SendResultType>(null);
    
    const sendEmail = async ($event: FormEvent<HTMLFormElement>) => {
        $event.preventDefault();
        if (sending) {
            return;
        }
        setResultType(null);
        if (!validateForm(contact, setContact, t)) {
            return;
        }
        
        setSending(true);
        try {
            await emailService.sendEmail(contact.raw());
            setResultType("sent");
            setContact(contact.reset());
        } catch (err) {
            setResultType("error");
            console.error(err);
        } finally {
            setSending(false);
        }
    };
    
    return (
        <AnchoredSection id={AnchorableSection.CONTACT} className={container}>
            <h2 className={title}>{t("common:footer.contact.title")}</h2>
            
            <form name="contact-form"
                data-netlify="true"
                data-netlify-honeypot="itsatrap"
                onSubmit={sendEmail}
                className={form}
            >
                <input type="hidden" name="form-name" value="contact-form"/>
                <input type="hidden" name="itsatrap"/>
                
                <div className={nameSection}>
                    <div className={`form-group ${formItemGroup}`}>
                        <label className={formItemLabel}>{t("common:footer.contact.fields.name")}</label>
                        <input type="text"
                            className={determineInputStyle(contact.name.hasErrored())}
                            name="name"
                            value={contact.name.value}
                            onChange={(e) => {
                                contact.name.value = e.target.value;
                                setContact(ContactFormData.deepClone(contact));
                            }}/>
                        <Error visible={contact.name.hasErrored()} error={contact.name.error || ""}/>
                    </div>
                    
                    <div className={`form-group ${formItemGroup}`}>
                        <label className={formItemLabel}>{t("common:footer.contact.fields.email")}</label>
                        <input type="text"
                            className={determineInputStyle(contact.email.hasErrored())}
                            name="email"
                            value={contact.email.value}
                            onChange={(e) => {
                                contact.email.value = e.target.value;
                                setContact(ContactFormData.deepClone(contact));
                            }}/>
                        <Error visible={contact.email.hasErrored()} error={contact.email.error || ""}/>
                    </div>
                </div>
                <div className={messageSection}>
                    <div className={`form-group ${formItemGroup}`}>
                        <label className={formItemLabel}>{t("common:footer.contact.fields.message")}</label>
                        <textarea name="message"
                            rows={5}
                            className={determineTextAreaStyle(contact.message.hasErrored())}
                            value={contact.message.value}
                            onChange={(e) => {
                                contact.message.value = e.target.value;
                                setContact(ContactFormData.deepClone(contact));
                            }}/>
                        <Error visible={contact.message.hasErrored()} error={contact.message.error || ""}/>
                    </div>
                </div>
                
                {resultType !== null && (
                    <div className={alerts}>
                        {resultType === "sent" && (
                            <div className={`${alert} ${alertSent}`}>
                                {t("common:footer.contact.alerts.sent.text")}
                            </div>
                        )}
                        {resultType === "error" && (
                            <div className={`${alert} ${alertError}`}>
                                {t("common:footer.contact.alerts.error.text")}
                            </div>
                        )}
                    </div>
                )}
                
                <div className={actions}>
                    <button type="submit"
                        className={submitButton}
                        disabled={sending}
                    >
                        {t(sending ?
                            "common:footer.contact.button.loading" :
                            "common:footer.contact.button.default")}
                    </button>
                </div>
            </form>
        </AnchoredSection>
    );
};

ContactForm.defaultProps = {};
