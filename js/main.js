;(function () {

	'use strict';



	var isMobile = {
		Android: function() {
			return navigator.userAgent.match(/Android/i);
		},
			BlackBerry: function() {
			return navigator.userAgent.match(/BlackBerry/i);
		},
			iOS: function() {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
			Opera: function() {
			return navigator.userAgent.match(/Opera Mini/i);
		},
			Windows: function() {
			return navigator.userAgent.match(/IEMobile/i);
		},
			any: function() {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
	};

	var fullHeight = function() {

		if ( !isMobile.any() ) {
			$('.js-fullheight').css('height', $(window).height());
			$(window).resize(function(){
				$('.js-fullheight').css('height', $(window).height());
			});
		}

	};

	// Animations

	var contentWayPoint = function() {
		var i = 0;
		$('.animate-box').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('animated') ) {

				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .animate-box.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn animated');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft animated');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight animated');
							} else {
								el.addClass('fadeInUp animated');
							}

							el.removeClass('item-animate');
						},  k * 200, 'easeInOutExpo' );
					});

				}, 100);

			}

		} , { offset: '85%' } );
	};


	var burgerMenu = function() {

		$('.js-fh5co-nav-toggle').on('click', function(event){
			event.preventDefault();
			var $this = $(this);

			if ($('body').hasClass('offcanvas')) {
				$this.removeClass('active');
				$('body').removeClass('offcanvas');
			} else {
				$this.addClass('active');
				$('body').addClass('offcanvas');
			}
		});



	};

	// Click outside of offcanvass
	var mobileMenuOutsideClick = function() {

		$(document).click(function (e) {
	    var container = $("#fh5co-aside, .js-fh5co-nav-toggle");
	    if (!container.is(e.target) && container.has(e.target).length === 0) {

	    	if ( $('body').hasClass('offcanvas') ) {

    			$('body').removeClass('offcanvas');
    			$('.js-fh5co-nav-toggle').removeClass('active');

	    	}

	    }
		});

		$(window).scroll(function(){
			if ( $('body').hasClass('offcanvas') ) {

    			$('body').removeClass('offcanvas');
    			$('.js-fh5co-nav-toggle').removeClass('active');

	    	}
		});

	};

	var sliderMain = function() {

	  	$('#fh5co-hero .flexslider').flexslider({
			animation: "fade",
			slideshowSpeed: 5000,
			directionNav: true,
			start: function(){
				setTimeout(function(){
					$('.slider-text').removeClass('animated fadeInUp');
					$('.flex-active-slide').find('.slider-text').addClass('animated fadeInUp');
				}, 500);
			},
			before: function(){
				setTimeout(function(){
					$('.slider-text').removeClass('animated fadeInUp');
					$('.flex-active-slide').find('.slider-text').addClass('animated fadeInUp');
				}, 500);
			}

	  	});

	};

	// click and hide and show

var clickToggle = function(){

  var tempScrollTop = $(window).scrollTop();

	var net = $('#net');
	var rb = $('#rb');
	var vr= $('#vr');
	var uxmil= $('#uxmil');
	var _3dm = $('#3dm');
	var ar = $('#ar');
	var sm = $('#sm');
	var mis = $('#mis');
	var fl = $('#fl');
	var re = $('#re');
	var vui = $('#vui');


	$('#frontend').on('click', (function(event) {
	  	event.preventDefault();
	    var $this = $(this);

			net.is(":hidden")? net.show() : net.show();
      rb.is(":hidden")? rb.show() : rb.show();
      uxmil.is(":hidden")? uxmil.show() : uxmil.show();
      _3dm.is(":hidden")? _3dm.show() : _3dm.show();
      vr.is(":visible")? vr.hide() : vr.hide();
      ar.is(":visible")? ar.hide() : ar.hide();
      mis.is(":visible")? mis.hide() : mis.hide();
      sm.is(":visible")? sm.hide() : sm.hide();
      fl.is(":visible")? fl.hide() : fl.hide();
      re.is(":visible")? re.hide() : re.hide();
      vui.is(":hidden")? _3dm.show() : _3dm.show();
			$(window).scrollTop(tempScrollTop);

   	})

  );

	$('#ux').on('click', (function(event) {
		event.preventDefault();
		var $this = $(this);


		mis.is(":hidden")? mis.show() : mis.show();
		sm.is(":hidden")? sm.show() : sm.show();
		fl.is(":hidden")? fl.show() : fl.show();
		uxmil.is(":hidden")? uxmil.show() : uxmil.show();
    net.is(":hidden")? net.show() : net.show();
		rb.is(":hidden")? rb.show() : rb.show();
		vr.is(":visible")? vr.hide() : vr.hide();
		ar.is(":visible")? ar.hide() : ar.hide();
		re.is(":visible")? re.hide() : re.hide();
		_3dm.is(":visible")? _3dm.hide() : _3dm.hide();
    vui.is(":hidden")? _3dm.show() : _3dm.show();
	 	$(window).scrollTop(tempScrollTop);
		})

	);

	$('#arvr').on('click', (function(event) {
		event.preventDefault();
		var $this = $(this);

		mis.is(":visible")? mis.hide() : mis.hide();
		sm.is(":visible")? sm.hide() : sm.hide();
		fl.is(":visible")? fl.hide() : fl.hide();
		uxmil.is(":visible")? uxmil.hide() : uxmil.hide();
    net.is(":visible")? net.hide() : net.hide();
		rb.is(":visible")? rb.hide() : rb.hide();
		vr.is(":hidden")? vr.show() : vr.show();
		ar.is(":hidden")? ar.show() : ar.show();
		re.is(":visible")? re.hide() : re.hide();
		_3dm.is(":visible")? _3dm.hide() : _3dm.hide();
    vui.is(":visible")? rb.hide() : rb.hide();
   	$(window).scrollTop(tempScrollTop);
		})
	);

	$('#resrch').on('click', (function(event) {
		event.preventDefault();
		var $this = $(this);

    re.is(":hidden")? re.show() : re.show();
    rb.is(":hidden")? rb.show() : rb.show();
		mis.is(":visible")? mis.hide() : mis.hide();
 		sm.is(":visible")? sm.hide() : sm.hide();
 		fl.is(":visible")? fl.hide() : fl.hide();
 		uxmil.is(":visible")? uxmil.hide() : uxmil.hide();
    net.is(":visible")? net.hide() : net.hide();
		_3dm.is(":visible")? _3dm.hide() : _3dm.hide();
		vr.is(":visible")? vr.hide() : vr.hide();
		ar.is(":visible")? ar.hide() : ar.hide();
		vui.is(":visible")? rb.hide() : rb.hide();
		})
	);

};


	// Document on load.
	$(function(){
		fullHeight();
		contentWayPoint();
		burgerMenu();
		mobileMenuOutsideClick();
		sliderMain();
		clickToggle();
	});


}());
