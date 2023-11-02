import nodemailer from "nodemailer";
import "dotenv/config";
export const sendMail = (req, res, next) => {
    const { NODE_MAILER_EMAIL, NODE_MAILER_PASS } = process.env;
    const { name, email, text } = req.body;
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: NODE_MAILER_EMAIL,
            pass: NODE_MAILER_PASS,
        },
        tls: {
            rejectUnauthorized: false,
        },
    });
    const message = {
        from: email,
        to: NODE_MAILER_EMAIL,
        subject: "༜ Portfolio Inquiry ༜",
        text: `${text} From, ${name}`,
    };
    transporter.sendMail(message, () => {
        try {
            res.status(200).json({ name: name, text: text, email: email });
        }
        catch (error) {
            console.error(error, "There was an error sending an email to the server.");
        }
    });
};
//# sourceMappingURL=nodeMailerController.js.map