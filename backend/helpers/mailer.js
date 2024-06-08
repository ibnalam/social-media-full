const nodemailer = require("nodemailer")
const{google} = require('googleapis')
const {OAauth2} = google.auth
const oauth_link = "https://developers.google.com/oauthplayground"
const {EMAIL, MAILING_ID,MAILING_REFRESH, MAILING_SECRET} = process.env

const auth = new OAauth2(
    MAILING_ID,
    MAILING_REFRESH,
    MAILING_SECRET,
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
        html: ""
    }
    stmp.sendMail(mailOptions,(err,res)=>{
        if(err) return err;
        return res
    })
}


