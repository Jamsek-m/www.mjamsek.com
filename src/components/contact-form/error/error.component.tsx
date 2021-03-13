import React from "react";
import { error as errStyle } from "./error.module.scss";

interface ErrorProps {
    visible: boolean;
    error: string;
}

export const Error = (props: ErrorProps) => {
    const { error, visible } = props;
    if (visible) {
        return (
            <div className={errStyle}>
                <span>{error}</span>
            </div>
        );
    }
    return null;
};
