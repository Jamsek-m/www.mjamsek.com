import React, { Component } from "react";
import PropTypes from "prop-types";
import { getCurrentProjects } from "../../content/current-projects";
import { FormattedMessage } from "react-intl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./current-projects.component.scss";
import { navigateTo } from "../i18n/navigate-to";

export class CurrentProjectsComponent extends Component {

    static propTypes = {
        locale: PropTypes.string,
    };

    constructor(props) {
        super(props);
    }

    render() {
        const { locale } = this.props;
        return (
            <div className="current-projects">
                <p><FormattedMessage id="index.content.current"/>:</p>
                <ul>
                    {getCurrentProjects(locale).map((project, index) => (
                        <li key={index}>
                            <span className="project-name">
                                {project.name}
                            </span>
                            <span className="project-link" onClick={() => navigateTo(project.path, locale)}>
                                <FontAwesomeIcon icon="arrow-right"/>
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }

}
