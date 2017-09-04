app.controller('MainCtrl', function ($scope, $location, mainService) {
    $scope.title = "Work";
    init();
    function init() {

        bindContactFormButton();

    //     mainService.fetchProjects(function(data) {
    //          $scope.projects = data;            
    //     });
    }

    function bindContactFormButton() {
        var title, body;
        var errorTitle = "Error";
        var errorBody = "Oops something went wrong. Please try again later.";
        var successTitle = "Thank you!";
        var successBody = "Your message has been sent. I will be in touch shortly.";
        $('.close-reveal-modal').click(function(){
            $('#emailModal').foundation('reveal', 'close');
        });

        $("#email-submit").on('click', function(){
            if (validateForm()) {
                $.ajax({
                    url: 'submitform.php',
                    type: 'POST',
                    data: $("#contactForm").serialize(),
                    success: function(res) {
                        var json = JSON.parse(res);
                        if (json.status === 'no') {

                            $("#email-title").html(errorTitle);
                            $("#email-body").html(errorBody);   
                        } else {
                            $("#email-title").html(successTitle);
                            $("#email-body").html(successBody);   
                        }
                        $('#emailModal').foundation('reveal', 'open');
                    },
                    failure: function(res) {
                        $("#email-title").html(successTitle);
                        $("#email-body").html(successBody); 
                        $('#emailModal').foundation('reveal', 'open');
                    }
                }); 
            }


        });
    }

    function validateForm() {
        var isValid = true;
        $("#e-name, #e-email, #e-message").removeClass('error');

        var err = 0;
        if ($("#e-name").val().length === 0) {
                err++;
                $("#e-name").addClass('error');
        }

        if ($("#e-email").val().length === 0) {
                err++;
                $("#e-email").addClass('error');
        }

        if ($("#e-message").val().length === 0) {
                err++;
                $("#e-message").addClass('error');
        }

        if (err > 0) {
            isValid = false;
        }
        return isValid;
    }
});