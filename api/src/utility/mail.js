import nodemailer from 'nodemailer';
import "@babel/polyfill"
const transport = nodemailer.createTransport({
    host: 'mail.3ewebapps.co.in',
    port: 465,
    secure: true, // use SSL
    auth: {
        user: 'gstapp@3ewebapps.co.in',
        pass: 'Gst@123#'
    }
});
export default transport;