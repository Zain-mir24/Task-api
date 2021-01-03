const sgMail=require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail=(email,name)=>{
    sgMail.send({
        to:email,
        from:'zainnaeemk10@gmail.com',
        subject:'Thanks for  joining our app',
        text:`Welcome to the app , ${name}.Let me know how you get along with the app `     
    })

}

const sendGoodbyeEmail=(email,name)=>{
    sgMail.send({
        to:email,
        from:'zainnaeemk10@gmail.com',
        subject:'Thanks for  joining our app',
        text:`why are you leaving our app , ${name}.Let me know the unfortunate reason you are leaving us:( ` 
    })
}
module.exports={
    sendWelcomeEmail,
    sendGoodbyeEmail
}