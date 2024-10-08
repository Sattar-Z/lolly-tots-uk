$(document).ready(function() {

    "use strict";

    /*----------------------------------------------------*/
    /*  Contact Form Send Function
    /*----------------------------------------------------*/

    $(".contact-form").submit(function(e) {
        e.preventDefault();
        var name = $(".name");
        var email = $(".email");
        var phone = $(".phone");
        var childAge = $(".child-age");
        var flag = false;

        if (name.val() == "") {
            name.closest(".form-control").addClass("error");
            name.focus();
            flag = false;
            return false;
        } else {
            name.closest(".form-control").removeClass("error").addClass("success");
        } 

        if (email.val() == "") {
            email.closest(".form-control").addClass("error");
            email.focus();
            flag = false;
            return false;
        } else {
            email.closest(".form-control").removeClass("error").addClass("success");
        }

        if (phone.val() == "") {
            phone.closest(".form-control").addClass("error");
            phone.focus();
            flag = false;
            return false;
        } else {
            phone.closest(".form-control").removeClass("error").addClass("success");
        }

        if (childAge.val() == "" || childAge.val() < 0.25 || childAge.val() > 5) { // 0.25 = 3 months
            childAge.closest(".form-control").addClass("error");
            childAge.focus();
            flag = false;
            return false;
        } else {
            childAge.closest(".form-control").removeClass("error").addClass("success");
        }

        flag = true;

        if (flag) {
            // Proceed with formSubmit.co action
            $(this).unbind('submit').submit();
        }
    });

    $("#reset").on('click', function() {
        $(".form-control").removeClass("success").removeClass("error");
    });

    /*----------------------------------------------------*/
    /*  Contact Form Validation
    /*----------------------------------------------------*/
    
    $(".contact-form").validate({
        rules:{ 
                name:{
                    required: true,
                    minlength: 1,
                    maxlength: 50,
                },
                email:{
                    required: true,
                    email: true,
                },
                phone:{
                    required: true,
                    minlength: 10,
                    maxlength: 15,
                },
                "child-age":{
                    required: true,
                    number: true,
                    min: 0.25, // 3 months
                    max: 5, // 5 years
                }
        },
        messages:{
            name:{
                required: "Please enter your full name."
            }, 
            email:{
                required: "We need your email address to contact you.",
                email: "Your email address must be in the format of name@domain.com"
            }, 
            phone:{
                required: "Please enter your contact number.",
                minlength: "Phone number must be at least 10 digits."
            },
            "child-age":{
                required: "Please provide the age of your child.",
                number: "Please enter a valid number for age.",
                min: "Age must be at least 3 months.",
                max: "Age must be 5 years or less."
            }
        }
    });
});
