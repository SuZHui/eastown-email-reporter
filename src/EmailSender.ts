import { createTransport, Transporter, SendMailOptions } from 'nodeMailer';

export class EmailSender {
	private transporter: Transporter;

	constructor() {
		this.transporter = createTransport({
			service: 'QQ',
			port: 465,
			secure: true,
			auth: {
				user: 'szh362680581@qq.com',
				pass: 'fwbejlnmqvqpbied'
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
