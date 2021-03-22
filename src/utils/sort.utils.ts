import { ProjectVersion } from "../types";

export function sortProjectVersion(v1: ProjectVersion, v2: ProjectVersion): number {
    if (v1.releaseDate && v2.releaseDate) {
        const d1 = new Date(v1.releaseDate);
        const d2 = new Date(v2.releaseDate);
        if (d1.getTime() > d2.getTime()) {
            return 1;
        }
        if (d1.getTime() < d2.getTime()) {
            return -1;
        }
    } else if (v1.releaseDate && !v2.releaseDate) {
        return 1;
    } else if (!v1.releaseDate && v2.releaseDate) {
        return -1;
    }
    return 0;
}
