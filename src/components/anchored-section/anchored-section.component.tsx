import React, { ReactNode } from "react";
import { AnchorableSection } from "../../types";
import { otherProps } from "../../utils";

interface AnchoredSectionProps {
    id: AnchorableSection;
    children: ReactNode;
    
    [propName: string]: unknown;
}

const propsKeys: AnchoredSectionProps = {
    children: {} as ReactNode,
    id: AnchorableSection.NOOP
};

export const AnchoredSection = (props: AnchoredSectionProps) => {
    return (
        <section id={props.id} className={props.className} {...otherProps(props, propsKeys)}>
            {props.children}
        </section>
    );
};
