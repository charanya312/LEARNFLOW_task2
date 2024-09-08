
const express = require('express')
const bodyparser = require("body-parser");
const nodemailer = require('nodemailer');
const app = express();
app.use('/css', express.static(path.join(__dirname, 'css')));
app.use(bodyparser.urlencoded({extended: true}));
app.get("/",function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/",function(req, res){

    const comm = req.body.message;
     const na = req.body.nameofperson;
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'cherry@gmail.com',
          pass:'ufbtgooquyplvly' 
        }
      });

      var mailOptions = {
        from: 'cherry@gmail.com',
        to: req.body.username,
        cc: 'cherry@gmail.com',
        subject: 'Thanks for giving feedback ' + na,
        text: 'Thanks for your message you have sent to us --> ' + comm
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log("sent");
          res.redirect("/");
        }
      });
      
      
    });



app.listen(3000, function() {
    console.log("server started at 3000");
});