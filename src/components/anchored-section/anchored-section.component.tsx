import React, { ReactNode } from "react";
import { AnchorableSection } from "../../types";

interface AnchoredSectionProps {
    id: AnchorableSection;
    children: ReactNode;
    className: string;
}

export const AnchoredSection = (props: AnchoredSectionProps) => {
    return (
        <section id={props.id} className={props.className}>
            {props.children}
        </section>
    );
};

AnchoredSection.defaultProps = {
    className: "",
};
