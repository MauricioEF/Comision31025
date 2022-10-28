import mailer from 'nodemailer';

export default class MailingService {
    constructor(){
        this.client = mailer.createTransport({
            service: 'gmail',
            port: 587,
            auth: {
                user: 'mauricioespinosaflores25@gmail.com',
                pass: 'fnfjyrqxqvbujhdl'
            }
        })
    }
    sendSimpleMail = async({from,to,subject,html,attachments=[]})=>{
        let result = await this.client.sendMail({
            from,
            to,
            subject,
            html,
            attachments
        })
        return result;
    }
}