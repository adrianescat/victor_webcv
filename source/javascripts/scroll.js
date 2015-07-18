$(document).ready(function(){

	//animatescroll.js---------------------------------------------------//
		//HEADER
		$("#js-about-link").on("click",function(){
			$("#js-about-section").animatescroll();
		});
		$("#js-studies-link").on("click",function(){
			$("#js-studies-section").animatescroll();
		});
		$("#js-xp-link").on("click",function(){
			$("#js-xp-section").animatescroll();
		});
		$("#js-contact-link").on("click",function(){
			$("#js-contact-section").animatescroll();
		});

		//FOOTER
		$("#js-about-footer-link").on("click",function(){
			$("#js-about-section").animatescroll();
		});
		$("#js-studies-footer-link").on("click",function(){
			$("#js-studies-section").animatescroll();
		});
		$("#js-xp-footer-link").on("click",function(){
			$("#js-xp-section").animatescroll();
		});
		$("#js-contact-footer-link").on("click",function(){
			$("#js-contact-section").animatescroll();
		});
	//-------------------------------------------------------------------//

	//FadeInScroll.js----------------------------------------------------//
		$("#js-studies-section").fadeInScroll();
		$("#js-xp-section").fadeInScroll();
		$("#js-contact-section").fadeInScroll();
	//-------------------------------------------------------------------//

	//NAVBAR MERGING WITH HEADER IMAGE-----------------------------------//
		$(window).scroll(function() {
	    if ($(".navbar").offset().top > 50) {
	        $('#custom-nav').addClass('affix');
	        $(".navbar-fixed-top").addClass("top-nav-collapse");
	    } else {
	        $('#custom-nav').removeClass('affix');
	        $(".navbar-fixed-top").removeClass("top-nav-collapse");
	    }   
		});
	//-------------------------------------------------------------------//

});