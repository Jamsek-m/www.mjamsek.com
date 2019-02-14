import React, { Component } from "react";
import PropTypes from "prop-types";
import { socialLinks } from "../../../content/social-media.links";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./footer.component.scss";
import ContactFormComponent from "../../contact-form/contact-form.component";

export class FooterComponent extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <footer className="footer">
                <div className="footer-content">
                    <div className="social-links">
                        {socialLinks.map((link, index) => (
                            <div key={index} className="link">
                                <a href={link.url} target="_blank" rel="noreferrer noopener" title={link.label}>
                                    <FontAwesomeIcon icon={["fab", link.icon]}/>
                                </a>
                            </div>
                        ))}
                    </div>
                    <ContactFormComponent/>
                </div>
            </footer>
        );

    }
}
