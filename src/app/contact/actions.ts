'use server';

import { z } from 'zod';
import nodemailer from 'nodemailer';

const formSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  message: z.string(),
});

export async function handleContactForm(values: z.infer<typeof formSchema>) {
  try {
    const validatedData = formSchema.parse(values);

    const { name, email, message } = validatedData;
    
    // The following section is for sending email.
    // It requires environment variables to be set for SMTP server details.
    // e.g., in a .env.local file:
    // EMAIL_SERVER_HOST="smtp.example.com"
    // EMAIL_SERVER_PORT=587
    // EMAIL_SERVER_USER="your-email@example.com"
    // EMAIL_SERVER_PASSWORD="your-password"
    // EMAIL_FROM="your-email@example.com"
    // EMAIL_TO="behzad.nemo@gmail.com"

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_SERVER_HOST,
      port: Number(process.env.EMAIL_SERVER_PORT),
      secure: Number(process.env.EMAIL_SERVER_PORT) === 465, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_SERVER_USER,
        pass: process.env.EMAIL_SERVER_PASSWORD,
      },
    });

    const mailOptions = {
      from: `"${name}" <${process.env.EMAIL_FROM}>`,
      to: process.env.EMAIL_TO,
      replyTo: email,
      subject: `پیام جدید از طرف ${name} از طریق وب‌سایت`,
      html: `
        <h1>پیام جدید از فرم تماس</h1>
        <p><strong>نام:</strong> ${name}</p>
        <p><strong>ایمیل:</strong> ${email}</p>
        <p><strong>پیام:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    };
    
    // This check ensures email is only sent if credentials are provided
    if (process.env.EMAIL_SERVER_USER) {
      await transporter.sendMail(mailOptions);
    } else {
        console.log("EMAIL_SERVER_USER not set. Skipping email sending.");
        console.log("Form data:", validatedData);
    }

    return { success: true, message: 'فرم با موفقیت ارسال شد.' };
  } catch (error) {
    console.error('Form submission error:', error);
    if (error instanceof z.ZodError) {
        return { success: false, message: 'اطلاعات وارد شده نامعتبر است.' };
    }
    return { success: false, message: 'ارسال فرم با شکست مواجه شد. لطفاً دوباره تلاش کنید.' };
  }
}