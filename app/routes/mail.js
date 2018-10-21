module.exports = function (app) {
    //----------POST---------------------------//
    app.post('/v1/public/mails', (req, res) => {
        const newMail = req.body.mail;

        var nodemailer = require('nodemailer');

        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: '****@gmail.com',
                pass: '*****'
            }
        });

        var mailOptions = {
            from: 'lucsgp10@gmail.com',
            to: 'lucashanryque@hotmail.com',
            subject: 'Sending Email using Node.js',
            text: 'That was easy!'
        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });

        res.send('Email enviado !!');
    });
};