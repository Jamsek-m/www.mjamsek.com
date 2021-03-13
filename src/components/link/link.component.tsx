import React, { HTMLAttributes, ReactNode } from "react";
import { Link as InternalLink } from "gatsby";
import { useLocalizedUrl } from "../../utils";

interface LinkProps {
    to: string;
    external?: boolean;
    anchor?: boolean;
    children: ReactNode;
    
    [propName: string]: unknown;
}

const propsKeys: LinkProps = {
    anchor: true,
    external: true,
    to: "#",
    children: {} as ReactNode
};

type ContainerType =
    HTMLAttributes<HTMLSpanElement>
    | HTMLAttributes<HTMLAnchorElement>
    | HTMLAttributes<InternalLink<any>>;

function getOtherProps(props: LinkProps): ContainerType {
    let htmlProps = {} as ContainerType;
    for (let key in props) {
        // noinspection JSUnfilteredForInLoop
        if (!(propsKeys as any)[key]) {
            // noinspection JSUnfilteredForInLoop
            (htmlProps as any)[key] = props[key];
        }
    }
    return htmlProps;
}


export const Link = (props: LinkProps) => {
    const { to, external, anchor, children } = props;
    
    if (anchor) {
        return (
            <span {...getOtherProps(props) as HTMLAttributes<HTMLSpanElement>} onClick={() => {
                const elem: HTMLHeadingElement | null = document.querySelector(to);
                if (elem) {
                    console.log("ELEM: ", elem);
                    elem.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                        inline: "start"
                    });
                }
            }}>
                {children}
            </span>
        );
    }
    
    if (external) {
        return (
            <a href={to} {...getOtherProps(props) as HTMLAttributes<HTMLAnchorElement>}
                target="_blank" rel="noreferrer noopener">
                {children}
            </a>
        );
    }
    
    const localizeUrl = useLocalizedUrl();
    const url = localizeUrl(to);
    
    return (
        <InternalLink to={url} {...getOtherProps(props) as HTMLAttributes<HTMLAnchorElement>}>
            {children}
        </InternalLink>
    );
};

const defaultProps: Partial<LinkProps> = {
    external: false,
    anchor: false
};
Link.defaultProps = defaultProps;
