
// **************************************
// jQuery to collapse the navbar on scroll
// **************************************

$(window).scroll(function() {
	if ($(".navbar").offset().top > 50) {
		$(".navbar-fixed-top").addClass("top-nav-collapse");
	} else {
		$(".navbar-fixed-top").removeClass("top-nav-collapse");
	}
});


$(window).resize(function(){
	if ($(window).width() < 976){	
		$('.navbar-collapse a').click(function (e) {
			$('.navbar-collapse').collapse('toggle');
		});
	}	
});



// ****************************************************************
// jQuery for page scrolling feature - requires jQuery Easing plugin
// ****************************************************************

$(function() {
	$('.page-scroll a').bind('click', function(event) {
		var $anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $($anchor.attr('href')).offset().top
		}, 1500, 'easeInOutExpo');
		event.preventDefault();
	});
});


// ****************************************************************
// owl-caurosel
// ****************************************************************			
			
$(document).ready(function() {
 
	$("#featured-list").owlCarousel({
 
		items : 4, //4 items above 1000px browser width
		itemsDesktop : [1000,4], //4 items between 1000px and 901px
		itemsDesktopSmall : [900,2], // betweem 900px and 601px
		itemsTablet: [600,1], //1 items between 600 and 0
		itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option
	  
	});
   
});


// ***********************************
// totop
// ***********************************

$(document).ready(function(){
	$().UItoTop({ easingType: 'easeOutQuart' });
});	


// ***********************************
// pageloader
// ***********************************
$(window).load(function(){
	if($(".preloader").length > 0){
		$('.preloader').fadeOut(1000); // set duration in brackets
	}
});


// ***********************************
// stop video when modal close
// ***********************************

$(document).ready(function(){
  $("#video-modal").on('hide.bs.modal', function(evt){
    var player = $(evt.target).find('iframe'),
        vidSrc = player.prop('src');
    player.prop('src', ''); // to force it to pause
    player.prop('src', vidSrc);
  });
});

	
// ***********************************
// Backstretch - Slider on Background
//
//  Note :  make sure  use this  http://bootstrapwizard.info/Theme/Fullscreen/images/bg4.jpg"  when on server  but you can simply use  "images/bg1.jpg"  if you are on localhost
//
// ***********************************								  
			 
$("body.bg-slider").backstretch([
   "images/bg7.jpg",
   "images/bg8.jpg",
   "images/bg9.jpg",
], {duration: 5000, fade: 1000});
							  

							  				  

// ***********************************
// magnificPopup
// ***********************************	

$('.gallery-item').magnificPopup({
  type: 'image',
  gallery:{
	enabled:true
  }
});



// ****************************************************************
// wow - for animation together with animate.css
// ****************************************************************	
	
$(document).ready(function(){
	wow = new WOW(
	  {
		animateClass: 'animated',
		offset:       150
	  }
	);
	wow.init();
});


// ****************************************************************
// counterUp
// ****************************************************************

$(document).ready(function( $ ) {
	if($("span.count").length > 0){	
		$('span.count').counterUp({
			delay: 10, // the delay time in ms
			time: 1000 // the speed time in ms
		});
	}
});



// ****************************************************************
// Form Validation  -  Contact Form
// ****************************************************************			
		
/*
	Jquery Validation using jqBootstrapValidation
   example is taken from jqBootstrapValidation docs 
  */
 
 
  
$(function() {

    $("input,textarea").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function($form, event, errors) {
            // something to have when submit produces an error ?
            // Not decided if I need it yet
        },
        submitSuccess: function($form, event) {
            event.preventDefault(); // prevent default submit behaviour
            // get values from FORM
            var name = $("input#name").val();
            var email = $("input#email").val();
            var message = $("textarea#message").val();
            var firstName = name; // For Success/Failure Message
            // Check for white space in name for Success/Fail message
            if (firstName.indexOf(' ') >= 0) {
                firstName = name.split(' ').slice(0, -1).join(' ');
            }
            $.ajax({
                url: "contact_me.php",
                type: "POST",
                data: {
                    name: name,
                    email: email,
                    message: message
                },
                cache: false,
                success: function() {
                    // Success message
                    $('#success').html("<div class='alert alert-success'>");
                    $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#success > .alert-success')
                        .append("<strong>Your message has been sent. </strong>");
                    $('#success > .alert-success')
                        .append('</div>');

                    //clear all fields
                    $('#contactForm').trigger("reset");
                },
                error: function() {
                    // Fail message
                    $('#success').html("<div class='alert alert-danger'>");
                    $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#success > .alert-danger').append("<strong>Sorry " + firstName + " it seems that my mail server is not responding...</strong> Could you please email me directly to <a href='mailto:me@example.com?Subject=Message_Me from myprogrammingblog.com;>me@example.com</a> ? Sorry for the inconvenience!");
                    $('#success > .alert-danger').append('</div>');
                    //clear all fields
                    $('#contactForm').trigger("reset");
                },
            })
        },
        filter: function() {
            return $(this).is(":visible");
        },
    });

    $("a[data-toggle=\"tab\"]").click(function(e) {
        e.preventDefault();
        $(this).tab("show");
    });
});


/*When clicking on Full hide fail/success boxes */
$('#name').focus(function() {
    $('#success').html('');
});






// ****************************************************************
// Form Validation  -  Subscribe Form
// ****************************************************************			
		
/*
	Jquery Validation using jqBootstrapValidation
   example is taken from jqBootstrapValidation docs 
  */
 
  
$(function() {

    $("input").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function($form, event, errors) {
            // something to have when submit produces an error ?
            // Not decided if I need it yet
        },
        submitSuccess: function($form, event) {
            event.preventDefault(); // prevent default submit behaviour
            // get values from FORM

            var email = $("input#email_subscribe").val();

            $.ajax({
                url: "subscribe.php",
                type: "POST",
                data: {
                    email: email

                },
                cache: false,
                success: function() {
                    // Success message
                    $('#SubscribeForm #success_newsletter').html("<div class='alert alert-success'>");
                    $('#SubscribeForm #success_newsletter > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#SubscribeForm #success_newsletter > .alert-success')
                        .append("<strong>Your message has been sent. </strong>");
                    $('#SubscribeForm #success_newsletter > .alert-success')
                        .append('</div>');

                    //clear all fields
                    $('#SubscribeForm').trigger("reset");
                },
                error: function() {
                    // Fail message
                    $('#SubscribeForm #success_newsletter').html("<div class='alert alert-danger'>");
                    $('#SubscribeForm #success_newsletter > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#SubscribeForm #success_newsletter > .alert-danger').append("<strong>Sorry " + firstName + " it seems that my mail server is not responding...</strong> Could you please email me directly to <a href='mailto:me@example.com?Subject=Message_Me from myprogrammingblog.com;>me@example.com</a> ? Sorry for the inconvenience!");
                    $('#SubscribeForm #success_newsletter > .alert-danger').append('</div>');
                    //clear all fields
                    $('#SubscribeForm').trigger("reset");
                },
            })
        },
        filter: function() {
            return $(this).is(":visible");
        },
    });

    $("a[data-toggle=\"tab\"]").click(function(e) {
        e.preventDefault();
        $(this).tab("show");
    });
});



/*When clicking on Full hide fail/success boxes */
$('#email_subscribe').focus(function() {
    $('#SubscribeForm #success_newsletter').html('');
});




















			
		


