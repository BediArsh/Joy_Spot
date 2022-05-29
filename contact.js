function sendEmail() {
    Email.send({
    Host : "smtp.gmail.com",
    Username : "joyspotworld@gmail.com",
    Password : "joyspotwebsite",
    To : 'joyspotworld@gmail.com',
    From : document.getElementById("name").value,
    Subject : "New Contact Form Enquiry",
        Body: "Name: " + document.getElementById("name").value
            + "<br> Email: " + document.getElementById("email").value
            + "<br> Phone No.: " + document.getElementById("phone").value
            + "<br> Message: " + document.getElementById("message").value
}).then(
  message => alert(" Message Sent Successfully ")
);
}

