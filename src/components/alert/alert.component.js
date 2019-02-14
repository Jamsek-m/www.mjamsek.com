import React, { Component } from "react";
import PropTypes from "prop-types";

import "./alert.component.scss";

export class AlertComponent extends Component {

    static propTypes = {
        type: PropTypes.string,
        children: PropTypes.object,
        dismissable: PropTypes.bool,
    };

    constructor(props) {
        super(props);
        this.dismissAlert = this.dismissAlert.bind(this);
        this.state = {
            show: true,
        };
    }

    dismissAlert() {
        this.setState({
            show: false,
        });
    }

    render() {
        const { children, dismissable, type } = this.props;
        const alertClass = `alert alert-${type}`;
        return (
            <div className={alertClass}>
                {this.state.show ?
                    <div className="alert-content">
                        <div className="alert-text">
                            {children}
                        </div>
                        <div className="alert-button">
                            {dismissable ?
                                <button onClick={this.dismissAlert}>
                                    <span>&times;</span>
                                </button> : null}

                        </div>
                    </div> : null}
            </div>
        );
    }

}
