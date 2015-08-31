$(document).ready(function(){
	$("a").click(function(event){
		event.preventDefault();
	})
	//JS for MAIN MENU functionalites
	$(".close-menu a").click(function(){
		$(".main-menu ul").addClass("toggle-menu").removeClass("otoggle-menu");
	});
	$(".main-menu > p").click(function(){
		$(".main-menu ul").addClass("otoggle-menu").removeClass("toggle-menu");
	});
	$(".banner-desc p > a").click(function(){
		$(".main-menu ul").addClass("otoggle-menu").removeClass("toggle-menu");
		$( ".search-bar input" ).focus();
	});
	
	
	//wow JS Script
		 wow = new WOW(
			{
			  boxClass:     'wow',      // default
			  animateClass: 'animated', // default
			  offset:       0,          // default
			  mobile:       true,       // default
			  live:         true        // default
			}
		  )

		 new WOW().init();
		 
	//JS for Header Scroll Condition
	$(window).scroll(function() {
		var height = $(window).scrollTop();
		var winHeight = $("#banner").height();
		if(height  >= winHeight) {
			$("header").addClass("header-bg");
			$("#newscont").addClass("news-bg");
			$("aside").addClass("news-bg");
		}
		else{
			$("header").removeClass("header-bg");
			$("#newscont").removeClass("news-bg");
			$("aside").removeClass("news-bg");
		}
		
	});
	//var winHeight = $(window).height();
	//$(".more").click(function(){
	//	$(window).scrollTop(winHeight);		
	//});
	
	//JS FOR BX SLIDER
	$('.bxslider').bxSlider({
		auto:true,
		pager:true,
		pause:5000,
		autoHover:true
	});
	
	//BACK to top js
	 $(function() {
        $('a[href*=#]:not([href=#])').click(function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });
});