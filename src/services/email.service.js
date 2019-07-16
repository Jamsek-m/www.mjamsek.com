export class EmailService {

    static sendEmail(emailData) {
        return new Promise((resolve, reject) => {

            const req = new XMLHttpRequest();
            req.open("POST", "/", true);
            req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            req.addEventListener("error", (err) => {
                reject(err);
            });
            req.addEventListener("load", () => {
                if (req.status >= 400) {
                    reject(new Error("Error submitting form!"));
                } else {
                    resolve();
                }
            });
            req.send(EmailService.__encodeData(emailData));

        });
    }

    static __encodeData(data) {
        return Object.keys(data)
            .filter(key => {
                return data[key] !== undefined;
            })
            .map(key => {
            return encodeURIComponent(key) + "=" + encodeURIComponent(data[key]);
        }).join("&");
    }

}
