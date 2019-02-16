import React, { Component } from "react";
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";
import { gitProviders } from "../../content/git-providers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./repo.component.scss";

export class RepoComponent extends Component {

    static propTypes = {
        project: PropTypes.object,
    };

    constructor(props) {
        super(props);
        this.repo = this.__resolveRepoHost(props.project.repoUrl);
    }

    __resolveRepoHost(repoUrl) {
        try {
            const hostname = new URL(repoUrl).hostname;
            const provider = gitProviders[hostname];
            if (provider) {
                return {
                    name: hostname,
                    icon: provider.icon,
                };
            }
            return {
                name: "VCS",
                icon: gitProviders["default"].icon,
            };
        } catch (err) {
            console.error(err);
        }
    }

    render() {
        const { project } = this.props;

        return (
            <div className="repo-component">
                <h3><FormattedMessage id="projects.repo"/></h3>
                {project.publicRepo ?
                    <div className="link-container">
                        <a href={project.repoUrl} target="_blank" rel="noreferrer noopener">
                            <FontAwesomeIcon icon={["fab", this.repo.icon]} className="icon"/>
                            <span className="link">{this.repo.name}</span>
                        </a>
                    </div> :
                    <div>
                        <p><FormattedMessage id="projects.private_repo"/></p>
                    </div>
                }
            </div>
        );
    }

}
