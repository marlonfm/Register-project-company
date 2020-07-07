const nodemailer = require("nodemailer");
const {host, port, user, pass} = require("../../config/mail.json"); //entra dentro de json e pega os nomes q precisa
const path =  require("path");
const hbs = require("nodemailer-express-handlebars");

const transport = nodemailer.createTransport({
    host,
    port,
    auth: {
      user,
      pass
    },
  });
  
  transport.use('compile', hbs({
    viewEngine: {
      defaultLayout: undefined,
      partialsDir: path.resolve('./src/resources/mail/'),

    },
    viewPath: path.resolve('./src/resources/mail/'),
    extName: '.html',
  }));  

module.exports = transport;