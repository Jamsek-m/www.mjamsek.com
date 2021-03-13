import { EmailPayload } from "../types";

export class EmailService {
    
    private static INSTANCE: EmailService | null = null;
    
    public static getInstance(): EmailService {
        if (EmailService.INSTANCE === null) {
            EmailService.INSTANCE = new EmailService();
        }
        return EmailService.INSTANCE;
    }
    
    private constructor() {
    
    }
    
    public async sendEmail(payload: EmailPayload): Promise<void> {
        const headers = new Headers({
            "Content-Type": "application/x-www-form-urlencoded"
        });
        
        const request = new Request("/", {
            method: "POST",
            headers,
            body: this.encodeFormData(payload)
        });
        
        try {
            await fetch(request);
        } catch (err) {
            console.error(err);
            throw err;
        }
    }
    
    private encodeFormData(payload: EmailPayload): FormData {
        const formData = new FormData();
        Object.keys(payload).forEach(key => {
            formData.set(key, (payload as any)[key]);
        });
        return formData;
    }
    
}
