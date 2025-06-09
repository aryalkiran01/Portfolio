// utils/transporter.ts
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.zoho.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.ZOHO_MAIL_USER as string,
    pass: process.env.ZOHO_MAIL_PASS as string,
  },
});

export default transporter;
