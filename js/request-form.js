(function () {
  emailjs.init("ppvMPcZVxutacWzNu"); // EmailJS Public Key
})();

$(document).ready(function () {
  "use strict";

  // Submit the request form via EmailJS
  $("form[name='requestForm']").submit(function (e) {
    e.preventDefault(); // Prevent the default form submission

    // Clear previous messages and errors
    $(".loading").html("").hide();
    var name = $("input[name='name']");
    var email = $("input[name='email']");
    var childAge = $("select[name='childAge']");
    var visitDate = $("input[name='visitDate']");

    // Basic validation
    if (name.val() == "") {
      name.addClass("error");
      name.focus();
      return false;
    } else {
      name.removeClass("error").addClass("success");
    }
    if (email.val() == "") {
      email.addClass("error");
      email.focus();
      return false;
    } else {
      email.removeClass("error").addClass("success");
    }
    if (childAge.val() == null || childAge.val() == "") {
      childAge.addClass("error");
      childAge.focus();
      return false;
    } else {
      childAge.removeClass("error").addClass("success");
    }
    if (visitDate.val() == "") {
      visitDate.addClass("error");
      visitDate.focus();
      return false;
    } else {
      visitDate.removeClass("error").addClass("success");
    }

    // Set loading text or spinner
    $(".loading")
      .html('<img src="images/Ellipsis@1x-4.2s-200px-200px.svg" alt="Loading..." />')
      .fadeIn("slow");

    // Prepare data for EmailJS
    var templateParams = {
      name: name.val(),
      email: email.val(),
      childAge: childAge.val(),
      visitDate: visitDate.val()
    };

    // Send the email using EmailJS
    emailjs.send("service_h94jw7r", "template_cih3ivp", templateParams).then(
      function (response) {
        // On success
        $(".form-control").removeClass("success");
        $(".loading")
          .html('<font color="#48af4b">Request sent successfully.</font>')
          .delay(3000)
          .fadeOut("slow");
        $("form[name='requestForm']")[0].reset(); // Reset the form
      },
      function (error) {
        // On error
        $(".loading")
          .html('<font color="#ff5607">Request not sent. Please try again.</font>')
          .delay(3000)
          .fadeOut("slow");
      }
    );

    return false; // Prevent form submission
  });
});