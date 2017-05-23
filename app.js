//including modules
var twilio = require('twilio');

var sid = '' //twilio sid
var token = '' //twilio token

//sid and token avaible on twilio account dashboard 

var client = new twilio(sid,token);

//Send message
client.messages.create({
    body: 'Hello by krishnkant Node',  // Message
    to: '+919179347476,                // Receiver's number
    from: '+14243638673'             // valid Twilio number. Can be generarted after creating twilio account.
}, function(err, message) {
    if (err) {    //Cecking for error 
        console.error('Text failed because: ' + err.message);
    } else {
        console.log('Text sent! Message SID: ' + message.sid);
    }
});



