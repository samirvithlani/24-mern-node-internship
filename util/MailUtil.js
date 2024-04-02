const mailer = require('nodemailer');

const mailSend = async(to,subject,text)=>{
    const mailOptions = {
        from: 'pythonforsamir@gmail.com',
        to: to,
        subject: subject,
     //   text: text
        html: `<h1>${text}</h1>`
    }

    const transporter = mailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'pythonforsamir@gmail.com',
            pass: 'oqvfzzklteighhks'
        }
    })
        

    const res = await transporter.sendMail(mailOptions)
    
    return res

}
//mailSend("samir.vithlani83955@gmail.com","Test","welcome to app...")
module.exports = {
    mailSend
}