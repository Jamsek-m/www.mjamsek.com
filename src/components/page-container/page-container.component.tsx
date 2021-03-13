import React, { ReactNode } from "react";

interface PageContainerProps {
    containerStyle: string;
    style: string;
    children: ReactNode;
}

export const PageContainer = (props: PageContainerProps) => {
    const {
        containerStyle,
        style,
        children
    } = props;
    
    return (
        <div className={`page-container ${containerStyle ? containerStyle : ""}`}>
            <div className={`page-content ${style ? style : ""}`}>
                {children}
            </div>
        </div>
    );
};

PageContainer.defaultProps = {
    containerStyle: undefined,
    style: undefined
};
