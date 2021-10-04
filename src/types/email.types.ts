export type EmailPayload = {
    [key: string]: string;
} | object;

export class FormItem {
    public value: string;
    public error: string | null;
    
    public static deepClone(item: FormItem): FormItem {
        const copy = new FormItem();
        copy.value = item.value;
        copy.error = item.error;
        return copy;
    }
    
    constructor(value?: string) {
        this.value = value || "";
        this.error = null;
    }
    
    public hasErrored(): boolean {
        return this.error !== null;
    }
}

export class ContactFormData {
    public name: FormItem;
    public email: FormItem;
    public message: FormItem;
    public "form-name": string;
    
    public static empty(formName: string): ContactFormData {
        return new ContactFormData(formName);
    }
    
    public static deepClone(data: ContactFormData): ContactFormData {
        const copy = new ContactFormData(data["form-name"]);
        copy.name = FormItem.deepClone(data.name);
        copy.email = FormItem.deepClone(data.email);
        copy.message = FormItem.deepClone(data.message);
        return copy;
    }
    
    public constructor(formName: string) {
        this.name = new FormItem();
        this.email = new FormItem();
        this.message = new FormItem();
        this["form-name"] = formName;
    }
    
    public reset(): ContactFormData {
        return ContactFormData.empty(this["form-name"]);
    }
    
    public resetErrors() {
        const data = new ContactFormData(this["form-name"]);
        data.name = new FormItem(this.name.value);
        data.email = new FormItem(this.email.value);
        data.message = new FormItem(this.message.value);
        return data;
    }
    
    public raw(): object {
        return {
            name: this.name.value,
            email: this.email.value,
            message: this.message.value,
            "form-name": this["form-name"],
        };
    }
}
