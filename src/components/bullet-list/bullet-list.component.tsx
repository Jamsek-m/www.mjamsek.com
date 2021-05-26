import React, { ReactElement } from "react";
import { BulletProps } from "./bullet.component";

interface BulletListProps {
    className: string;
    children: ReactElement<BulletProps> | ReactElement<BulletProps>[];
}

export const BulletList = (props: BulletListProps) => {
    const { className, children } = props;
    
    return (
        <ul className={className}>
            {children}
        </ul>
    );
};

BulletList.defaultProps = {
    className: ""
};
