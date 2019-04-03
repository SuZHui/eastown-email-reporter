import { createTransport, Transporter, SendMailOptions } from 'nodeMailer';
import { config } from './config';

export class EmailSender {
	private transporter: Transporter;

	constructor() {
		this.transporter = createTransport({
			service: 'QQ',
			port: 465,
			secure: true,
			auth: {
				user: config.email.user,
				pass: config.email.pass
			}
		});
	}

	/**
	 * 发送邮件
	 */
	async send(option: SendMailOptions) {
		return this.transporter.sendMail(option);
	}

}
