import React, { Component } from "react";
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";
import { LayoutComponent } from "../../components/layout/layout.component";

import "./projekt-page.template.scss";
import LinkComponent from "../../components/i18n/link.component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { formatDate } from "../../components/i18n/format-date";
import { FileService } from "../../services/file.service";
import { RepoComponent } from "../../components/repo/repo.component";
import { PictureViewerComponent } from "../../components/picture-viewer/picture-viewer.component";

export default class ProjektPageTemplate extends Component {

    static propTypes = {
        pageContext: PropTypes.object,
    };

    hasPictures(project) {
        return project.images.length > 0;
    }

    resolveDeploymentIcon(project) {
        const type = project.deployment.type;
        if (type === "file") return "download";
        if (type === "link") return "link";
        throw new TypeError("Unrecognized deployment type!");
    }

    constructor(props) {
        super(props);
        this.handleDeployment = this.handleDeployment.bind(this);
    }

    handleDeployment(project) {
        if (project.deployment.type === "link") {
            const win = window.open(project.deployment.url, "_blank");
            win.focus();
        } else if (project.deployment.type === "file") {
            const deploymentFile = project.deployment.url;
            const mimeType = project.deployment.mimeType;
            FileService.downloadFile(project.id, deploymentFile, mimeType);
        }
    }

    render() {
        const { pageContext } = this.props;
        const locale = pageContext.locale;
        const project = pageContext.project;

        return (
            <LayoutComponent locale={locale}>
                <div>

                    <LinkComponent className="back-btn" to="/projekti">
                        <FormattedMessage id="general.btn.back"/>
                    </LinkComponent>

                    <div className="project-page">

                        <h1>{project.translations[locale].name}</h1>
                        <p className="short-desc">{project.translations[locale].shortDescription}</p>

                        {/* if project has images */}
                        {this.hasPictures(project) ?
                            <div className="pictures-area">
                                <PictureViewerComponent images={project.images} projectId={project.id}/>
                            </div> : null
                        }

                        <div className="deployment-wrapper">
                            {/* if deployment is not private */}
                            {project.deployment ?
                                <div className="deployment" onClick={() => this.handleDeployment(project)}>
                                    <div className="deployment-icon">
                                        <FontAwesomeIcon icon={this.resolveDeploymentIcon(project)}/>
                                    </div>
                                    <div className="deployment-meta">
                                        <div>
                                            <FormattedMessage id="projects.version"/>:&#160;
                                            <strong>{project.version}</strong>
                                        </div>
                                        <div>
                                            <FormattedMessage id="projects.last-update"/>:&#160;
                                            {formatDate(project.lastUpdate, locale)}
                                        </div>
                                    </div>
                                </div> : null
                            }
                        </div>

                        <div dangerouslySetInnerHTML={{ __html: project.translations[locale].description }}
                            className="project-desc">
                        </div>

                        <div>
                            <RepoComponent project={project}/>
                        </div>

                    </div>

                </div>
            </LayoutComponent>
        );

    }
}
