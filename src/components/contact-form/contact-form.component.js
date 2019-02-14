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
            formData: {
                name: "",
                email: "",
                message: "",
            },
            inProgress: false,
        };
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
        EmailService.sendEmail(this.state.formData).then(
            (res) => {
                console.log(res);
            }
        ).catch(
            (err) => {
                console.error(err);
            }
        );
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
                                    onChange={this.handleChange}
                                    placeholder={intl.formatMessage({ id: "footer.contact.name_hint" })}/>
                            </div>
                            <div className="forma-group">
                                <label><FormattedMessage id="footer.contact.email"/>:</label>
                                <input name="email" type="text" value={this.state.formData.email}
                                    onChange={this.handleChange}
                                    placeholder={intl.formatMessage({ id: "footer.contact.email_hint" })}/>
                            </div>
                        </div>
                        <div className="forma-group">
                            <label><FormattedMessage id="footer.contact.message"/>: </label>
                            <textarea name="message" value={this.state.formData.message} onChange={this.handleChange}
                                placeholder={intl.formatMessage({ id: "footer.contact.message_hint" })}>
                            </textarea>
                        </div>
                        <div className=" alerts">
                            <AlertComponent type="success" dismissable={true}>
                                <span>Uspelo je!</span>
                            </AlertComponent>
                            <AlertComponent type="danger" dismissable={false}>
                                <span>
                                    <strong>
                                        <FormattedMessage id="footer.contact.error.server"/>
                                    </strong>&#160;
                                    <FormattedMessage id="footer.contact.error.server_apology"/>
                                    &#160;
                                    <a href="#" className="mailto-link">
                                        <FormattedMessage id="footer.contact.error.server_apology_link"/>
                                    </a>
                                </span>
                            </AlertComponent>
                            {/*<mj-alert alert=" alert" ngFor=" let alert of alerts"></mj-alert>*/}
                            {/*<mj-alert alert=" sendingError.alert" ngIf=" sendingError.show">*/}
                            {/*<mj-contact-error></mj-contact-error>*/}
                            {/*</mj-alert>*/}
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
