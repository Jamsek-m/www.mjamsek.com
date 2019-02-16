import React, { Component } from "react";
import PropTypes from "prop-types";
import { injectIntl } from "react-intl";
import { FormattedMessage } from "react-intl";

import { EmailService } from "../../services/email.service";

import "./contact-form.component.scss";
import { AlertComponent } from "../alert/alert.component";


class ContactFormComponent extends Component {

    static propTypes = {
        intl: PropTypes.object,
    };

    constructor(props) {
        super(props);
        this.sendEmail = this.sendEmail.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            success: false,
            serverError: false,
            formData: {
                name: "",
                email: "",
                message: "",
            },
            errors: {
                name: "",
                email: "",
                message: "",
            },
            inProgress: false,
        };
    }

    __formErrored() {
        return this.state.errors.name.length > 0 ||
            this.state.errors.email.length > 0 ||
            this.state.errors.message.length > 0;
    }

    __validateEmail() {
        return new Promise(resolve => {
            const regex = new RegExp(/^(([^<>()[\].,;:\s@"]+(.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+.)+[^<>()[\].,;:\s@"]{2,})$/i);
            if (!regex.test(this.state.formData.email)) {
                const errors = { ...this.state.errors };
                errors["email"] = "footer.contact.error.invalid.email";
                this.setState({
                    ...this.state,
                    errors: errors,
                }, () => {
                    resolve();
                });
            } else {
                resolve();
            }
        });
    }

    __validateForm() {
        return new Promise(resolve => {
            const errors = { ...this.state.errors };
            if (this.state.formData["name"].length === 0) {
                errors["name"] = "footer.contact.error.empty.name";
            }
            if (this.state.formData["email"].length === 0) {
                errors["email"] = "footer.contact.error.empty.email";
            }
            if (this.state.formData["message"].length === 0) {
                errors["message"] = "footer.contact.error.empty.message";
            }
            this.setState({
                ...this.state,
                errors: errors,
            }, () => {
                this.__validateEmail().then(
                    () => {
                        resolve();
                    },
                );
            });
        });
    }

    handleChange($event) {
        this.setState({
            ...this.state,
            formData: {
                ...this.state.formData,
                [$event.target.name]: $event.target.value,
            },
        });
    }

    sendEmail($event) {
        $event.preventDefault();
        this.setState({
            ...this.state,
            success: false,
            serverError: false,
            inProgress: true,
            errors: {
                name: "",
                email: "",
                message: "",
            },
        }, () => {

            this.__validateForm().then(
                () => {
                    if (this.__formErrored()) {
                        this.setState({
                            ...this.state,
                            success: false,
                            serverError: false,
                            inProgress: false,
                        });
                        return false;
                    }
                    EmailService.sendEmail(this.state.formData).then(
                        () => {
                            this.setState({
                                ...this.state,
                                success: true,
                                serverError: false,
                                inProgress: false,
                                errors: {
                                    name: "",
                                    email: "",
                                    message: "",
                                },
                                formData: {
                                    name: "",
                                    email: "",
                                    message: "",
                                },
                            });
                        },
                    ).catch(
                        (err) => {
                            console.error(err);
                            this.setState({
                                ...this.state,
                                success: false,
                                serverError: true,
                                inProgress: false,
                                errors: {
                                    name: "",
                                    email: "",
                                    message: "",
                                },
                                formData: {
                                    name: "",
                                    email: "",
                                    message: "",
                                },
                            });
                        },
                    );
                },
            );
        });
    }

    renderValidationClass(fieldName) {
        if (this.state.errors[fieldName].length > 0) {
            return "validation-failed";
        }
        return "";
    }

    renderErrorMessage(fieldName) {
        if (this.state.errors[fieldName] !== "") {
            return (
                <p className="validation-message"><FormattedMessage id={this.state.errors[fieldName]}/></p>
            );
        }
        return null;
    }

    render() {
        const { intl } = this.props;
        const btnClass = this.state.inProgress ? "disabled-btn" : "";
        return (
            <div className="contact-form">
                <h2><FormattedMessage id="footer.contact.title"/></h2>
                <form onSubmit={this.sendEmail}>
                    <div className="forma">
                        <div className="forma-ime-area">
                            <div className="forma-group">
                                <label><FormattedMessage id="footer.contact.name"/>:</label>
                                <input name="name" type="text" value={this.state.formData.name}
                                    onChange={this.handleChange} className={this.renderValidationClass("name")}
                                    placeholder={intl.formatMessage({ id: "footer.contact.name_hint" })}/>
                                {this.renderErrorMessage("name")}
                            </div>
                            <div className="forma-group">
                                <label><FormattedMessage id="footer.contact.email"/>:</label>
                                <input name="email" type="text" value={this.state.formData.email}
                                    onChange={this.handleChange} className={this.renderValidationClass("email")}
                                    placeholder={intl.formatMessage({ id: "footer.contact.email_hint" })}/>
                                {this.renderErrorMessage("email")}
                            </div>
                        </div>
                        <div className="forma-group">
                            <label><FormattedMessage id="footer.contact.message"/>: </label>
                            <textarea name="message" value={this.state.formData.message} onChange={this.handleChange}
                                className={this.renderValidationClass("message")}
                                placeholder={intl.formatMessage({ id: "footer.contact.message_hint" })}>
                            </textarea>
                            {this.renderErrorMessage("message")}
                        </div>
                        <div className=" alerts">
                            {this.state.success ?
                                <AlertComponent type="success" dismissable={true}>
                                    <span><FormattedMessage id="footer.contact.success"/></span>
                                </AlertComponent> : null
                            }
                            {this.state.serverError ?
                                <AlertComponent type="danger" dismissable={false}>
                                    <span>
                                        <strong>
                                            <FormattedMessage id="footer.contact.error.server"/>
                                        </strong><br/>
                                        <FormattedMessage id="footer.contact.error.server_apology"/>
                                        &#160;
                                        <a href="#" className="mailto-link">
                                            <FormattedMessage id="footer.contact.error.server_apology_link"/>
                                        </a>.
                                    </span>
                                </AlertComponent> : null
                            }
                        </div>
                        <div className=" forma-submit">
                            <button type=" submit" disabled={this.state.inProgress} className={btnClass}>
                                <FormattedMessage
                                    id={this.state.inProgress ? "footer.contact.send_loading" : "footer.contact.send"}/>
                            </button>
                        </div>
                    </div>
                </form>

            </div>
        );
    }

}

export default injectIntl(ContactFormComponent);
