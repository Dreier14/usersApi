"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendMail = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
require("dotenv/config");
const sendMail = (req, res, next) => {
    const { NODE_MAILER_EMAIL, NODE_MAILER_PASS } = process.env;
    const { name, email, text } = req.body;
    const transporter = nodemailer_1.default.createTransport({
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
exports.sendMail = sendMail;
//# sourceMappingURL=nodeMailerController.js.map