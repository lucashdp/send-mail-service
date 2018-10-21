module.exports = function (app, db) {
    //----------POST---------------------------//
    app.post('/v1/public/mails', (req, res) => {
        const newMail = req.body.mail;
        
        console.log(JSON.stringify(newMail));
    });
};