const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const welcomeEmail = (model, content) => {
    sgMail.send({
        to: model.email,
        from: process.env.EMAIL,
        subject: content.subject,
        text: content.text
    });
};

module.exports = welcomeEmail;
