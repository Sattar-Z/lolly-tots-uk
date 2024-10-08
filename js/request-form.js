$(document).ready(function () {
  "use strict";

  $(".request-form").submit(function (e) {
    var email = $(".email");
    var flag = true;

    if (email.val() == "") {
      email.closest(".form-control").addClass("error");
      email.focus();
      flag = false;
    } else {
      email.closest(".form-control").removeClass("error").addClass("success");
    }

    // If flag is still true, let the form submit
    return flag;
  });

  $("#reset").on("click", function () {
    $(".form-control").removeClass("success").removeClass("error");
  });

  /*----------------------------------------------------*/
  /*  Request Form Validation
    /*----------------------------------------------------*/
  $(".request-form").validate({
    rules: {
      email: {
        required: true,
        email: true,
      },
    },
    messages: {
      email: {
        required: "We need your email address to contact you",
        email: "Your email address must be in the format of name@domain.com",
      },
    },
  });
});
