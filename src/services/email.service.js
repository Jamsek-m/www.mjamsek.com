export class EmailService {

    static sendEmail(emailData) {
        return new Promise(((resolve, reject) => {
            const html = `
            <h2>Novo sporočilo!</h2>
            <p>Ime: ${emailData.name}</p>
            <p>Email: ${emailData.email}</p>
            <p>${emailData.message}</p>        
        `;

            const request = new XMLHttpRequest();
            request.open("POST", "https://email.mjamsek.com/api/v1/email", true);
            request.setRequestHeader("Content-Type", "application/json");
            request.setRequestHeader("X-Email-Service-Key", "xQUmUlTaSC9kpnqz6LZPZhlNcpUpk6uJMrcqWQnhJ");
            request.addEventListener("load", () => {
                const response = JSON.parse(request.responseText);
                if (request.status === 200) {
                    resolve(response);
                } else {
                    reject(response);
                }
            });
            request.addEventListener("error", (err) => {
                reject(err);
            });
            request.send(JSON.stringify({
                htmlContent: html,
                textContent: `Sporocilo od '${emailData.name}' (${emailData.email}): ${emailData.message}`,
                title: "mJamsek Site",
            }));
        }));
    }

}
