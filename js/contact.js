$(function() {
	'use strict';
	
	// Subscription form
   	$('#subscribe').validate({
        rules: {
            subscribe_email: {
                required: true,
                email: true
            } 
        },
        messages: {
            subscribe_email: {
                required: "Please enter your email address"
            } 
        },
        submitHandler: function(form) {
            $(form).ajaxSubmit({
                type:"POST",
                data: $(form).serialize(),
                url:"http://www.sam-bell.com/golanguk/inc/subscribe.php",
                success: function() {
                    $('#subscribe :input').attr('disabled', 'disabled');
                    $('#subscribe').fadeTo( "slow", 0.15, function() {
                        $(this).find(':input').attr('disabled', 'disabled');
                        $(this).find('label').css('cursor','default');
                        $('#success').fadeIn();
                    });
                },
                error: function() {
                    $('#subscribe').fadeTo( "slow", 0.15, function() {
                        $('#error').fadeIn();
                    });
                }
            });
        }
    });

});