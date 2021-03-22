import React from "react";
import { ProjectRepository } from "../../types";
import { CODE_LINKS } from "../../config/social.config";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
    container,
    header,
    desc,
    iconContainer,
    nameContainer,
    
} from "./repository.module.scss";
import { Link } from "../link/link.component";

interface RepositoryProps {
    repository: ProjectRepository;
    name: string;
    description: string;
}

export const Repository = (props: RepositoryProps) => {
    const { repository, description, name } = props;
    const { t } = useTranslation();
    
    const repositoryProvider = CODE_LINKS(t).find(link => link.id === repository.provider);
    
    return (
        <div className={container}>
            <div className={header}>
                <div className={iconContainer}>
                    {repositoryProvider && repositoryProvider.icon ? (
                        <FontAwesomeIcon size="2x"
                            icon={repositoryProvider.icon}
                            title={repositoryProvider.label}/>
                    ) : (
                        <FontAwesomeIcon icon={["fab", "database"]}/>
                    )}
                </div>
                <Link className={nameContainer} to={repository.url} external={true}>
                    {name}
                </Link>
            </div>
            <div className={desc}>
                {description}
            </div>
        </div>
    );
};
