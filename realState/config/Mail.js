const nodemailer = require('nodemailer');

 sendMail=(to,subject,message)=>
{
    const smtpConfig = {
        service: 'Gmail',
        auth: {
            user: 'saurabh.gup890@gmail.com',
            pass: 'saurabh890'
        }
    };
    const transporter = nodemailer.createTransport(smtpConfig);
    const mailOptions = {
        from: '"RealEstate" <saurabh.gup890@gmail.com>', // sender address
        to: to, // list of receivers
        subject: subject, // Subject line
        text: 'Verification mail from Gero Estate', // plaintext body
        html: message // html body
    };

    transporter.sendMail(mailOptions, (error, info)=>{
        if(error)
        {
            return console.log(error);
        }
        else
        {
            return console.log(info.response);
        }
    });
}
