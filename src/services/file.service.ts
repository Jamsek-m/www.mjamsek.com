import { saveAs } from "file-saver";


export class FileService {
    
    public static async saveFile(fileUri: string, filename: string): Promise<void> {
        const request = new Request(fileUri, {
            method: "GET"
        });
        
        try {
            const response = await fetch(request);
            const blob = await response.blob();
            saveAs(blob, filename);
        } catch (err) {
            console.error(err);
        }
    }
    
}
