const nodemailer = require('nodemailer');
var mg = require('nodemailer-mailgun-transport');
// Mailgun account info: teamgiterate@gmail.com, giterate
// giterate gmail account info: teamgiterate@gmail.com, giterate

var EmailController = {};

console.log('dude');
EmailController.autoMail = function(fName, lName, email) {
  var smtpTransport = nodemailer.createTransport({
     service: "MailGun",  // sets automatically host, port and connection security settings
     auth: {
         user: "postmaster@sandbox10db197587ca49d692a12174e861760f.mailgun.org",
         pass: "Alexander"
         // use Mailgun sandbox domain with password that I had to reset
     }
  });

  mailOptions = {  //email options
       from: "Team Giterate <teamgiterate@gmail.com>", // sender address.  Must be the same as authenticated user if using Gmail.
       to: email, // receiver
       subject: "Here are your algorithm questions, you fucking piece of shit!", // subject
       text: "Click the link to access your questions: "+"http://localhost:8080/question/"+fName+"/"+lName // body
    }

  smtpTransport.sendMail(mailOptions, function(error, response){  //callback
       if(error){
           console.log(error);
       }else{
           console.log("Message sent!");
       }
       smtpTransport.close(); // shut down the connection pool, no more messages.  Comment this line out to continue sending emails.
    });
}

module.exports = EmailController;
