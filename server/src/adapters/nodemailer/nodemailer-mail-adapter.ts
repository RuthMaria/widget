import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from '../mail-adapter';

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "01235687ecbf39",
        pass: "09de838c87da4a"
    }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMain({ subject, body }: SendMailData): Promise<void> {
    await transport.sendMail({
    from: 'Equipe Feedget <oi@feedget.com>',
    to: 'Ruth Maria da Silva <ruthmariia01@gmail.com>',
    subject,
    html: body,
  });
  }
}