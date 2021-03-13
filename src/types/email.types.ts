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
    
    public static empty(): ContactFormData {
        return new ContactFormData();
    }
    
    public static deepClone(data: ContactFormData): ContactFormData {
        const copy = new ContactFormData();
        copy.name = FormItem.deepClone(data.name);
        copy.email = FormItem.deepClone(data.email);
        copy.message = FormItem.deepClone(data.message);
        return copy;
    }
    
    public constructor() {
        this.name = new FormItem();
        this.email = new FormItem();
        this.message = new FormItem();
    }
    
    public reset(): ContactFormData {
        return ContactFormData.empty();
    }
    
    public resetErrors() {
        const data = new ContactFormData();
        data.name = new FormItem(this.name.value);
        data.email = new FormItem(this.email.value);
        data.message = new FormItem(this.message.value);
        return data;
    }
    
    public raw(): object {
        return {
            name: this.name.value,
            email: this.email.value,
            message: this.message.value
        };
    }
}
