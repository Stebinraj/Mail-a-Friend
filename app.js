const express = require('express');
const nodemailer = require('nodemailer');

const app = new express();
app.use(express.json());

app.post('/mail', async (req, res) => {

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: req.body.user,
            pass: req.body.pass
        }
    });

    const message = {
        to: req.body.to,
        subject: req.body.subject,
        text: req.body.text
    }

    transporter.sendMail(message, async (error) => {
        if (error) {
            await res.send("Error Happenend While Sending Email!!!");
        } else {
            await res.send("Email Send Successfully!!!");
        }
    });

})

app.listen(3000, () => {
    console.log("Server is running on the PORT 3000");
})