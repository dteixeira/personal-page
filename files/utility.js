$(document).ready(function(){

	// Scroll to anchor functionality
	$(".scroll").click(function(event){
		event.preventDefault();
		var dest = 0;
		if($(this.hash).offset().top > $(document).height() - $(window).height()) {
			dest=$(document).height()-$(window).height();
		} else {
			dest=$(this.hash).offset().top - $('.main-nav').height();
		}
		$('html,body').animate({scrollTop:dest}, 1000, 'swing');
	});

	// Email form submition and feedback
	$("form#email-form").submit(function(){
		$.post('php/email.php', {
			email: $("#email").val(),
			name: $("#name").val(),
			message: $("#message").val()
		}).done(function(data) {
			var res = $.parseJSON(data);
			if(res['result'])
				alertify.success("Email sent.");
			else
				alertify.error("Failed to send email.");
		});
		return false;
	});

	// Deactivate thumbnail links
	$('.thumbnail a').click(function() { return false; });
});