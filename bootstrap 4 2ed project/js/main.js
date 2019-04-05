$(function () {
	'use strict';
	
	//for nice scroll
	$('html').niceScroll({
		cursorcolor: '#f7600e',
		cursorwidth: 10,
		cursorborderradius: 10,
		cursorborder: '1px solid #f7600e',
		zindex: 20
	
	});
	
bannerHeight();
	
	$(window).resize(function() {
		bannerHeight();	 
					 });
	
	function bannerHeight() {
		var winh = $(window).height(),
			navh = $('.navbar').innerHeight();
			$('.banner').height(winh - navh);
	}
	    
    // Scroll To Features 
    $('.banner i').click(function() {
		
		$('html,body').animate({
			
			scrollTop: $('.features').offset().top
		},1000);
	});

	//Scroll to hire us
	$('.banner .banner-inner a:first-of-type').click(function() {
		$('html,body').animate({
			scrollTop: $('.contact').offset().top
		},2000);	
	});
	// scroll to our work
	$('.banner .banner-inner a:last-of-type').click(function(){
		$('html,body').animate({
			scrollTop: $('.our-work').offset().top
		},1500);
	});
	//Scroll to top
	$('.copyright i').click(function(){
//		alert('this is clicked');
		$('html,body').animate({
			scrollTop: $('body').offset().top
		},2000);
	});
	// show the hidden row from our-work section
	$('.our-work .show-more').on('click',function(){
		console.log($(this).text().toLowerCase());
		if($(this).text().toLowerCase() == "show more"){
			$(this).text("show less"); // this to change the button label
			$('.our-work .row:last-of-type').fadeIn(1000); //this to made fade in to the element which displays it smoothly
			
			//$('.our-work .row:last-of-type').addClass('block');
		}else{
			$(this).text("show more"); // this to change the button label 
			$('.our-work .row:last-of-type').fadeOut(1000);}
	});
	
	
});
    
//    $('html').niceScroll({
//        
//        cursorcolor: '#f7600e',
//        cursorwidth: 10,
//        cursorborderradius: 0,
//        cursorborder: '1px solid #f7600e'
//        
//    });
//    
//    // Change Header Height
//    
//    $('.header').height($(window).height());
//    
//    // Scroll To Features 
//    
//    $('.header .arrow i').click(function () {
//       
//        $('html, body').animate({
//            
//            scrollTop: $('.features').offset().top
//            
//        }, 1000);
//        
//    });
//    
//    $('.hire').click(function () {
//       
//        $('html, body').animate({
//            
//            scrollTop: $('.our-team').offset().top
//            
//        }, 1000);
//        
//    });