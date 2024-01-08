const nodemailer = require('nodemailer')

const { MAIL_HOST, MAIL_PORT, NODEMAILER_USERNAME, NODEMAILER_PW } = process.env

// Create a Nodemailer transporter
const transporter = nodemailer.createTransport({
  host: MAIL_HOST,
  port: MAIL_PORT,
  secure: true,
  auth: {
    user: NODEMAILER_USERNAME,
    pass: NODEMAILER_PW
  }
})

export async function sendEmail (to, subject, text, html) {
  console.log({ to, subject, text, html })
  try {
    const mailOptions = {
      from: 'GuruDevelopers <your@email.com>',
      to,
      subject,
      text,
      html
    }
    await transporter.sendMail(mailOptions)
    console.log('Email sent successfully')
  } catch (error) {
    console.error('Error sending email:', error)
  }
}
