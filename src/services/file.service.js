import * as FileSaver from "file-saver";

export class FileService {

    static downloadFile(projectId, fileName) {
        const fileUrl = `/projects/${projectId}/${fileName}`;
        const request = new XMLHttpRequest();
        request.open("GET", fileUrl, true);
        request.responseType = "blob";
        request.addEventListener("load", () => {
            const blob = request.response;
            FileSaver.saveAs(blob, fileName);
        });
        request.send();
    }

}
