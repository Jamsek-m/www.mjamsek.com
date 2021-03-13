import React, { useState } from "react";
import { ProjectVersion } from "../../types";

interface VersionsProps {
    versions: ProjectVersion[];
}

export const Versions = (props: VersionsProps) => {
    const { versions } = props;
    
    const [opened, toggleOpened] = useState<boolean>(false);
    
    console.log(versions);
    const latestVersion = versions.find(version => version.latest);
    
    return (
        <div>
            
            {latestVersion && (
                <div onClick={() => {
                    toggleOpened(!opened);
                }}>
                    Latest: {latestVersion.version} ({latestVersion.releaseDate})
                </div>
            )}
            {opened && (
                <div>
                    {versions.map((version, index) => (
                        <div key={index}>
                            {version.version} ({version.releaseDate})
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

Versions.defaultProps = {
    versions: []
};
