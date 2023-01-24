const nodemailer = require('nodemailer');

const sendEmail = (email,verify) => {
    return new Promise((resolve, reject) => {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'lawyerandorderthemis@gmail.com',
                pass: 'dqtukwvngshsiind'
            }
        })
        const mail_configs = {
            from:'lawyerandorderthemis@gmail.com',
            to:email,
            subject:"verify email",
            html:`<h4>Verify Code:</h4><h2> ${verify}</h2>`
      
        }
        transporter.sendMail(mail_configs, (error)=>{
            if(error){
                console.log(error);
                return reject({message:"an error has occurred"})
            };
            return reject({massage:"Email Sent successfully"})
        } )
    })
}

module.exports={sendEmail}