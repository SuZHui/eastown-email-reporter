import { EmailSender } from './src/EmailSender';
import { getTestMessageUrl } from 'nodeMailer';




async function main() {
	const emailSender = new EmailSender();
	const info = await emailSender
		.send({
			from: 'szh362680581@qq.com',
			to: '362680581@qq.com',
			subject: "Hello ✔", // Subject line
			text: "Hello world?", // plain text body
			html: "<b>Hello world?</b>" // html body
		});

	console.log("Message sent: %s", info.messageId);
	// Preview only available when sending through an Ethereal account
	console.log("Preview URL: %s", getTestMessageUrl(info));
}



console.log('Start sending...');
main();
console.log('End sending...');
