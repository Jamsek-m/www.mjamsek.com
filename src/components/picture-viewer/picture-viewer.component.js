import React, { Component } from "react";
import PropTypes from "prop-types";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import "./picture-viewer.component.scss";

export class PictureViewerComponent extends Component {

    static propTypes = {
        images: PropTypes.array,
        projectId: PropTypes.string
    };

    constructor(props) {
        super(props);
        this.state = {
            currentImage: props.images[0]
        };
    }

    render() {
        const {projectId, images} = this.props;

        return (
            <div className="picture-viewer">
                <div className="preview-area">
                    <div className="left-arrow arrow">
                        <span>
                            <FontAwesomeIcon icon="chevron-left"/>
                        </span>
                    </div>
                    <div className="image-area">
                        <img src={`/projects/${projectId}/${this.state.currentImage}`} alt="viewed-image"/>
                    </div>
                    <div className="right-arrow arrow">
                        <span>
                            <FontAwesomeIcon icon="chevron-right"/>
                        </span>
                    </div>
                </div>
            </div>
        );
    }

}
