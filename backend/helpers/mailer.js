const nodemailer = require("nodemailer")
const{google} = require('googleapis')
const {OAuth2} = google.auth
const oauth_link = "https://developers.google.com/oauthplayground"
const {EMAIL, MAILING_ID,MAILING_REFRESH, MAILING_SECRET} = process.env

const auth = new OAuth2(
    MAILING_ID,
    MAILING_SECRET,
    MAILING_REFRESH,
    oauth_link
)



exports.sendVarifiedEmail = (email,name,url) =>{
    auth.setCredentials({
        refresh_token: MAILING_REFRESH
    })
    const accessToken = auth.getAccessToken()
    const stmp = nodemailer.createTransport(
        {
            service: "gmail",
            auth: {
                type: "OAuth2",
                user: EMAIL,
                clientId: MAILING_ID,
                clientSecret: MAILING_SECRET,
                refreshToken: MAILING_REFRESH,
                accessToken
            }
        }
    )
    const mailOptions = {
        from: EMAIL,
        to: email,
        subject: "KINTU APP",
        html: `<div style="padding: 30px; border: 1px solid #ddd; border-radius: 8px; text-align: center;"> <h3>Assalamualikum ${name}</h3> <p style="color: #333; font-size: 16px;">Hello ${name}, Hope you are doing well. Please confirm your varification email to start journey with KINTU APP</p> <a href=${url} style="border: 1px solid #666; padding: 8px 13px; border-radius: 5px; text-decoration: none; color: #333; margin-top: 20px;" onMouseOver='this.style.background="#ddd"' onMouseLeave='this.style.background="transparent"'> Verify Email</a> </div>`
    }
    stmp.sendMail(mailOptions,(err,res)=>{
        if(err) return err;
        return res
    })
}


