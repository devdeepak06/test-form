// Description: JavaScript code for the contact form
document.addEventListener("DOMContentLoaded", function () {
  const emailForm = document.getElementById("emailForm");
  if (emailForm) {
    emailForm.addEventListener("submit", function (event) {
      event.preventDefault(); // prevent default form submission

      // collect form data
      const email = document.getElementById("email").value;
      const firstName = document.getElementById("first-name").value;
      const lastName = document.getElementById("last-name").value;
      const subject = document.getElementById("subject").value;
      const message = document.getElementById("message").value;

      // send email using EmailJS
      emailjs
        .send(
          "service_opg88hm",
          "template_ncov2g6",
          {
            to_email: "k.deepak2217@gmail.com",
            from_email: email,
            from_name: firstName + " " + lastName,
            subject: subject,
            message: message,
          },
          "r1dVmEr53AZ7OK_-D"
        )
        .then((response) => {
          // Code executed if email is sent successfully
          console.log("Email sent successfully!", response);
          alert("Email sent successfully!");
        })
        .catch((error) => {
          // Code executed if there's an error sending the email
          console.error("Error:", error);
          alert("An error occurred while sending the email");
        });

      // Optionally clear the form fields after submission
      document.getElementById("emailForm").reset();
    });
  } else {
    console.error("Form element not found");
  }
});
// Below jQuery code is for reference only and is not used in this project
// $('#emailForm').on('submit', function(event) {
//     event.preventDefault(); // prevent reload

//     var formData = new FormData(this);
//     formData.append('service_id', 'service_opg88hm');
//     formData.append('template_id', 'template_3252sv5');
//     formData.append('user_id', 'r1dVmEr53AZ7OK_-D');

//     $.ajax('https://api.emailjs.com/api/v1.0/email/send-form', {
//         type: 'POST',
//         data: formData,
//         contentType: false, // auto-detection
//         processData: false // no need to parse formData to string
//     }).done(function() {
//         alert('Your mail is sent!');
//     }).fail(function(error) {
//         alert('Oops... ' + JSON.stringify(error));
//     });
// });
