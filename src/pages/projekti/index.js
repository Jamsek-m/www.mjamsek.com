import React, { Component } from "react";
import PropTypes from "prop-types";
import { LayoutComponent } from "../../components/layout/layout.component";
import data from "../../content/projects.json";
import { FormattedMessage } from "react-intl";
import { navigateTo } from "../../components/i18n/navigate-to";
import emptyThumbnail from "../../assets/projects/empty.png";

import "./projekti.page.scss";
import HelmetTitleComponent from "../../components/i18n/helmet-title.component";

export default class ProjektiPage extends Component {

    static propTypes = {
        pageContext: PropTypes.object,
    };

    renderProjectThumbnail(project) {
        if (project.thumbnail) {
            return `/projects/${project.id}/${project.thumbnail}`;
        } else {
            return emptyThumbnail;
        }
    }

    render() {
        const { pageContext: { locale } } = this.props;
        return (
            <LayoutComponent locale={locale}>
                <div>
                    <HelmetTitleComponent titleTag="page.projekti.title"/>
                    <h1 className="projects-title"><FormattedMessage id="projects.title"/></h1>
                    {data.projects.map((project, index) => (
                        <div key={index} className="project-item" id={project.id}>

                            <div className="project-name" onClick={() => navigateTo(project.path, locale)}>
                                <h3>{project.translations[locale].name}</h3>
                            </div>
                            <div className="project-about">
                                <div className="project-img" onClick={() => navigateTo(project.path, locale)}>
                                    <img src={this.renderProjectThumbnail(project)} alt={project.id}/>
                                </div>
                                <div className="project-desc" onClick={() => navigateTo(project.path, locale)}>
                                    {project.translations[locale].shortDescription}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </LayoutComponent>
        );
    }

}
