import React, { Component } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./picture-viewer.component.scss";

export class PictureViewerComponent extends Component {

    static propTypes = {
        images: PropTypes.array,
        projectId: PropTypes.string,
    };

    constructor(props) {
        super(props);
        this.IMAGE_COUNT = 4;
        this.state = {
            currentImageIndex: 0,
            previewedImages: props.images.slice(0, this.IMAGE_COUNT),
            sliceIndex: {
                left: 0,
                right: this.IMAGE_COUNT,
            },
        };
        this.showNextPicture = this.showNextPicture.bind(this);
        this.showPreviousPicture = this.showPreviousPicture.bind(this);
        this.openChosenPicture = this.openChosenPicture.bind(this);
        this.scrollPreviewRight = this.scrollPreviewRight.bind(this);
        this.scrollPreviewLeft = this.scrollPreviewLeft.bind(this);
    }

    showPreviousPicture() {
        if (this.state.currentImageIndex > 0) {
            this.setState({
                ...this.state,
                currentImageIndex: this.state.currentImageIndex - 1,
            }, () => {
                if (this.state.currentImageIndex === this.state.sliceIndex.left) {
                    this.scrollPreviewLeft();
                }
            });
        }
    }

    showNextPicture() {
        if (this.state.currentImageIndex < this.props.images.length - 1) {
            this.setState({
                ...this.state,
                currentImageIndex: this.state.currentImageIndex + 1,
            }, () => {
                if (this.state.currentImageIndex === this.state.sliceIndex.right - 1) {
                    this.scrollPreviewRight();
                }
            });
        }
    }

    openChosenPicture(image) {
        const indexOf = this.props.images.indexOf(image);
        this.setState({
            ...this.state,
            currentImageIndex: indexOf,
        });
    }

    scrollPreviewLeft() {
        if (this.state.sliceIndex.left > 0) {
            this.setState({
                ...this.state,
                sliceIndex: {
                    left: this.state.sliceIndex.left - 1,
                    right: this.state.sliceIndex.right - 1,
                },
                previewedImages: this.props.images.slice(this.state.sliceIndex.left - 1, this.state.sliceIndex.right - 1),
            });
        }
    }

    scrollPreviewRight() {
        if (this.state.sliceIndex.right < this.props.images.length) {
            this.setState({
                ...this.state,
                sliceIndex: {
                    left: this.state.sliceIndex.left + 1,
                    right: this.state.sliceIndex.right + 1,
                },
                previewedImages: this.props.images.slice(this.state.sliceIndex.left + 1, this.state.sliceIndex.right + 1),
            });
        }
    }

    render() {
        const { projectId, images } = this.props;
        const classes = {
            main: {
                left: this.state.currentImageIndex > 0 ? "" : "disabled",
                right: this.state.currentImageIndex < this.props.images.length - 1 ? "" : "disabled",
            },
            selection: {
                left: this.state.sliceIndex.left > 0 ? "" : "disabled",
                right: this.state.sliceIndex.right < this.props.images.length ? "" : "disabled",
            },
        };

        return (
            <div className="picture-viewer">
                <div className="preview-area">
                    <div className="left-arrow arrow">
                        <span onClick={this.showPreviousPicture} className={classes.main.left}>
                            <FontAwesomeIcon icon="chevron-left"/>
                        </span>
                    </div>
                    <div className="image-area">
                        <img src={`/projects/${projectId}/${images[this.state.currentImageIndex]}`} alt="viewed-image"/>
                    </div>
                    <div className="right-arrow arrow">
                        <span onClick={this.showNextPicture} className={classes.main.right}>
                            <FontAwesomeIcon icon="chevron-right"/>
                        </span>
                    </div>
                </div>
                <div className="selection-area">
                    <div onClick={this.scrollPreviewLeft} className={classes.selection.left}>
                        <FontAwesomeIcon icon="chevron-circle-left"/>
                    </div>
                    <div className="selection-items">
                        {this.state.previewedImages.map((image, index) => (
                            <div key={index} className="selection-item">
                                <img src={`/projects/${projectId}/${image}`} alt={image}
                                    onClick={() => this.openChosenPicture(image)}/>
                            </div>
                        ))}
                    </div>
                    <div onClick={this.scrollPreviewRight} className={classes.selection.right}>
                        <FontAwesomeIcon icon="chevron-circle-right"/>
                    </div>
                </div>
            </div>
        );
    }

}
