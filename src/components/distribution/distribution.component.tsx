import React from "react";
import { ProjectDistribution } from "../../types";

interface DistributionProps {
    distribution: ProjectDistribution;
}

export const Distribution = (props: DistributionProps) => {
    const { distribution } = props;
    
    return (
        <div>
            {distribution.url}
        </div>
    );
};
