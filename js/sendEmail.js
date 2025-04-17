function SendEmail() {
    const name = document.getElementById("name").value
    const email = document.getElementById("email").value
    const message = document.getElementById("message").value
    Email.send({
        SecureToken: '8d84f3bc-1432-42c2-8d2e-3bd5e559f2fe',
        To: 'bm977753@gmail.com',
        From: "bm977753@gmail.com",
        Subject: "fORM PORTÓLIO✨⚠️:",
        Body: `
            Name: ${name} <br>
            Email: ${email} <br>
            Message: ${message}
        `
    }).then(() => {
        const popup = document.getElementById('popup');
        popup.style.display = 'block';
        setTimeout(() => {
            popup.style.display = 'none';
        }, 2000);
    });
}