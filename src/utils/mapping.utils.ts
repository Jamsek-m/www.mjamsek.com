import { GitHubRelease, ProjectVersion } from "../types";

export function fromGithubRelease(release: GitHubRelease): ProjectVersion {
    return {
        releaseDate: release.publishedAt,
        version: release.name,
        latest: release.isLatest,
        snapshot: release.isPrerelease
    };
}

export function otherProps<E>(props: E, propsKeys: E): any {
    let htmlProps = {};
    for (let key in props) {
        // noinspection JSUnfilteredForInLoop
        if (!(propsKeys as any)[key]) {
            // noinspection JSUnfilteredForInLoop
            (htmlProps as any)[key] = props[key];
        }
    }
    return htmlProps;
}
