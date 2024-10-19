(function () {
    emailjs.init("ppvMPcZVxutacWzNu"); // Initialize EmailJS with your Public Key
  })();
  
  $(document).ready(function () {
    "use strict";
  
    // Submit the contact form via EmailJS
    $("form[name='contactform']").submit(function (e) {
      e.preventDefault(); // Prevent the default form submission
  
      // Clear previous messages and errors
      $(".loading").html("").hide();
      var enquiryType = $("select[name='enquiry-type']");
      var name = $("input[name='name']");
      var email = $("input[name='email']");
      var phone = $("input[name='phone']");
      var childAge = $("select[name='child-age']");
      var lookingFor = $("input[name='lookingFor']");
  
      // Basic validation
      var fields = [enquiryType, name, email, phone, childAge, lookingFor];
      var isValid = true;
  
      fields.forEach(function(field) {
        if (field.val() == "" || field.val() == null) {
          field.addClass("error");
          isValid = false;
        } else {
          field.removeClass("error").addClass("success");
        }
      });
  
      if (!isValid) {
        fields.find(field => field.hasClass("error")).first().focus();
        return false;
      }
  
      // Set loading text or spinner
      $(".loading")
        .html('<img src="images/Ellipsis@1x-4.2s-200px-200px.svg" alt="Loading..." />')
        .fadeIn("slow");
  
      // Prepare data for EmailJS
      var templateParams = {
        enquiryType: enquiryType.val(),
        name: name.val(),
        email: email.val(),
        phone: phone.val(),
        childAge: childAge.val(),
        lookingFor: lookingFor.val()
      };
  
      // Send the email using EmailJS
      emailjs.send("service_h94jw7r", "template_72wsja6", templateParams).then(
        function (response) {
          // On success
          $(".form-control").removeClass("success");
          $(".loading")
            .html('<font color="#48af4b">Message sent successfully.</font>')
            .delay(3000)
            .fadeOut("slow");
          $("form[name='contactform']")[0].reset(); // Reset the form
        },
        function (error) {
          // On error
          $(".loading")
            .html('<font color="#ff5607">Message not sent. Please try again.</font>')
            .delay(3000)
            .fadeOut("slow");
        }
      );
  
      return false; // Prevent form submission
    });
  
    // Reset button handler
    $("#reset").on("click", function () {
      $("form[name='contactform']")[0].reset();
      $(".form-control").removeClass("success").removeClass("error");
    });
  });