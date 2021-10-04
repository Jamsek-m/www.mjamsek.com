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
    
        const response = await fetch(request);
        if (response.status >= 400) {
            throw new Error("Error sending email!");
        }
    }
    
    private encodeFormData(payload: EmailPayload): string {
        return Object.keys(payload)
            .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent((payload as any)[key]))
            .join("&");
    }
    
}
