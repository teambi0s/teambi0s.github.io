/* --------------------------------------------
 MAIN FUNCTION
-------------------------------------------- */
$(document).ready(function() {
    
	/* --------------------------------------------------------
	 ANIMATED PAGE ON REVEALED
	----------------------------------------------------------- */
	$(function($) {
		"use strict";
		$('.animated').appear(function() {
			var elem = $(this);
			var animation = elem.data('animation');
			if ( !elem.hasClass('visible') ) {
				var animationDelay = elem.data('animation-delay');
				if ( animationDelay ) {
				
					setTimeout(function(){
					 elem.addClass( animation + " visible" );
					}, animationDelay);
					
				} else {
					elem.addClass( animation + " visible" );
				}
			}
		});
	});
    

    /* --------------------------------------------
	 CLOSE COLLAPSE MENU ON MOBILE VIEW EXCEPT DROPDOWN
	-------------------------------------------- */
	$(function () {
        "use strict"; 
        $('.navbar-collapse ul li a:not(.dropdown-toggle)').on('click',function (event) { 
            $('.navbar-toggle:visible').click(); 
        }); 
    });
    
    /* --------------------------------------------
	 STICKY SETTING
	-------------------------------------------- */
	$(function () {
        "use strict"; 
        if( $(".navbar-sticky").length > 0){
            $(".navbar-sticky").sticky({ topSpacing: 0 });
            $(".navbar-sticky").css('z-index','100');
            $(".navbar-sticky").addClass('bg-light');
            $(".navbar-sticky").addClass("top-nav-collapse");
        };
    });
    
    
    /* --------------------------------------------------------
	 ANIMATED SCROLL PAGE WITH ACTIVE MENU - BOOTSTRAP SROLLSPY
	----------------------------------------------------------- */
    $(function(){
        "use strict";
        $(".navbar-op ul li a, .navbar-op a.navbar-brand, .intro-direction a, a.go-to-top").on('click', function(event) {    
            event.preventDefault();
            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 900, function(){
                window.location.hash = hash;
            });
        });
    });
    

    /* --------------------------------------------------------
	 NAVBAR FIXED TOP ON SCROLL
	----------------------------------------------------------- */
    $(function(){
        "use strict"; 
        if( $(".navbar-standart").length > 0 ){
            $(".navbar-pasific").addClass("top-nav-collapse");
        } else {
            $(window).scroll(function() {
                if ($(".navbar").offset().top > 10)  {
                    $(".navbar-pasific").addClass("top-nav-collapse");

                } else {
                    $(".navbar-pasific").removeClass("top-nav-collapse");
                }
            });
        };
    });
    
    /* --------------------------------------------------------
	 NAVBAR-INVERSE FIXED TOP ON SCROLL
	----------------------------------------------------------- */
    $(function(){
        "use strict"; 
        if( $(".navbar-pasific-inverse").length > 0 ){
            $(window).scroll(function() {
                if ($(".navbar").offset().top > 10)  {
                    $(".navbar-pasific").addClass("top-nav-collapse-inverse");

                } else {
                    $(".navbar-pasific").removeClass("top-nav-collapse-inverse");
                }
            });
        };
    });
    
    
    /* --------------------------------------------------------
	 GO TO TOP SCROLL
	----------------------------------------------------------- */
    $(function(){
        "use strict";
        if( $("a.go-to-top").length > 0 ){
            $("a.go-to-top").fadeOut();
            $(window).scroll(function() {
                if ($(".navbar").offset().top > 1200)  {
                    $("a.go-to-top").fadeIn();
                } else {
                    $("a.go-to-top").fadeOut();
                }
            });
        };
    });
    
    
    /* --------------------------------------------------------
	 BOOTSTRAP TOGGLE TOOLTIP
	----------------------------------------------------------- */
    $(function(){
        "use strict";
        $('[data-toggle="tooltip"]').tooltip();
    });
    
    
    /* --------------------------------------------------------
	 TEAM HOVER
	----------------------------------------------------------- */   
    $(function () {
        "use strict"
        $('.team-seven').hover(
            function () {
                var overlay = $(this).find('.team-seven-overlay');
                overlay.removeClass(overlay.data('return')).addClass(overlay.data('hover'));
            },
            function () {
                var overlay = $(this).find('.team-seven-overlay');		
                overlay.removeClass(overlay.data('hover')).addClass(overlay.data('return'));

            }
        );
    });
    
    
    /* --------------------------------------------------------
	 COUNT TO
	----------------------------------------------------------- */
    $(function() {
        "use strict";
		$(".fact-number").appear(function(){
            var dataperc = $(this).attr('data-perc');
			$(this).each(function(){			
				$(this).find('.factor').delay(6000).countTo({
					from: 10,
					to: dataperc,
					speed: 3000,
					refreshInterval: 50,	
				});  
			});
		});
	});
    
 
    /* --------------------------------------------------------
	 OWL CAROUSEL FOR TESTIMONIAL
	----------------------------------------------------------- */
    $(function() {
        "use strict";
        var owlSectionOneItem = $("#owlSectionOneItem");
        owlSectionOneItem.owlCarousel({
            autoPlay: 5000,
            items : 1,  
            itemsDesktop : [1000,1],  
            itemsDesktopSmall : [900,1],  
            itemsTablet: [600,1],  
            itemsMobile : false
        });
        
        var owlSectionTwoItem = $("#owlSectionTwoItem");
        owlSectionTwoItem.owlCarousel({
            autoPlay: 5000,
            items : 2,  
            itemsDesktop : [1000,2],  
            itemsDesktopSmall : [900,2],  
            itemsTablet: [600,2],  
            itemsMobile : false
        });
        
        var owlSectionThreeItem = $("#owlSectionThreeItem");
        owlSectionThreeItem.owlCarousel({
            autoPlay: 5000,
            items : 3,  
            itemsDesktop : [1000,3],  
            itemsDesktopSmall : [900,3],  
            itemsTablet: [600,1],  
            itemsMobile : false
        });
        
        var owlSectionFourItem = $("#owlSectionFourItem");
        owlSectionFourItem.owlCarousel({
            autoPlay: 5000,
            items : 4,  
            itemsDesktop : [1000,4],  
            itemsDesktopSmall : [900,2],  
            itemsTablet: [600,2],  
            itemsMobile : false
        });
        
        var owlSectionFiveItem = $("#owlSectionFiveItem");
        owlSectionFiveItem.owlCarousel({
            autoPlay: 5000,
            items : 5,  
            itemsDesktop : [1000,5],  
            itemsDesktopSmall : [900,3],  
            itemsTablet: [600,3],  
            itemsMobile : false
        });
        
        var owlSectionSixItem = $("#owlSectionSixItem");
        owlSectionSixItem.owlCarousel({
            autoPlay: 5000,
            items : 6,  
            itemsDesktop : [1000,6],  
            itemsDesktopSmall : [900,3],  
            itemsTablet: [600,3],  
            itemsMobile : false
        });
        

    });    
    
    /* --------------------------------------------------------
	 OWL CAROUSEL FOR SHOP
	-----------------------------------------------------------  */          
    $(function() {
        "use strict";
        var owlShop = $("#owlShop");

        owlShop.owlCarousel({
            slideSpeed : 1000,
            autoPlay : true,
            pagination: false,
            items : 4, 
        });

        $(".shop-control-next").on('click', function(){
            owlShop.trigger('owl.next');
        })
        $(".shop-control-prev").on('click', function(){
            owlShop.trigger('owl.prev');
        });

    });
    
 
    /* --------------------------------------------------------
	 PAGE LOADER
	----------------------------------------------------------- */
    $(function() {
		"use strict";		
        $("body").imagesLoaded(function(){
            $(".loader-item").delay(700).fadeOut();
            $("#pageloader").delay(800).fadeOut("slow");
        });
	});
    
    /* --------------------------------------------------------
	 JQUERY TYPED
	----------------------------------------------------------- */
    $(function(){
        "use strict";
        if($("#typed").length > 0 ) {
            $("#typed").typed({
                stringsElement: $('#typed-strings'),
                startDelay: 2000,
                typeSpeed: 50,
                backDelay: 500,
                loop: true,
                contentType: 'html', 
                loopCount: false,
            });
        };
    });
    
    /* --------------------------------------------------------
	 JQUERY TYPED#2
	----------------------------------------------------------- */
    $(function(){
        "use strict";
        if($("#typed-2").length > 0 ) {
            $("#typed-2").typed({
                stringsElement: $('#typed-strings-2'),
                startDelay: 100,
                typeSpeed: 50,
                backDelay: 500,
                loop: false,
                contentType: 'html', 
            });
        };
    });
    
    /* --------------------------------------------------------
	 JQUERY TEXTILLATE
	----------------------------------------------------------- */
    $(function(){
        "use strict";
        if($(".tlt").length > 0 ) {
            $('.tlt').textillate({
                loop: true,
                minDisplayTime: 5000,
                out: {
                effect: 'hinge',
                delayScale: 1.5,
                delay: 50,
                sync: false,
                shuffle: false,
                reverse: false,
                callback: function () {}
              },
            });
        };
    });
    
    /* --------------------------------------------------------
	 JQUERY ROTATE
	----------------------------------------------------------- */
    $(function(){
        "use strict";
        if($(".rotate").length > 0 ) {
            $(".rotate").textrotator({
                animation: "fade",
                separator: ",",
                speed: 2000
             });
        };
    });
    
    /* --------------------------------------------------------
	 SHOP RANGE SLIDER
	----------------------------------------------------------- */
    $(function() {
        "use strict";
        if($("#shop-range-price").length > 0 ) {
            var $rangePrice = $("#shop-range-price");
            $rangePrice.ionRangeSlider({
                type: "double",
                grid: true,
                min: 0,
                max: 250,
                from: 45,
                to: 200,
                prefix: "$"
            });
        };
    });
    
    /* --------------------------------------------------------
	 BG YOUTUBE VIDEO
	----------------------------------------------------------- */
    $(function() {
		"use strict";
		if ( $( ".mb-ytplayer" ).length > 0 ) {
			$(".mb-ytplayer").mb_YTPlayer();
		}
	});
    
    /* --------------------------------------------------------
	 YOUTUBE VIDEO POPUP
	----------------------------------------------------------- */
     $(function() {
		"use strict";
		if ( $( ".popup-youtube" ).length > 0 ) {
			$('.popup-youtube').magnificPopup({
              disableOn: 700,
              type: 'iframe',
              mainClass: 'mfp-fade',
              removalDelay: 160,
              preloader: false,
              fixedContentPos: false
            });
		};
	});
    
    
    
}(jQuery));

$(window).load(function() {
    
    /* --------------------------------------------------------
	 ISOTOPE MASONRY GRID
	----------------------------------------------------------- */
    $( function() {
        "use strict";
        
        var $portfolioMasonryOne = $('.portfolio-masonry-one').isotope({
            itemSelector: '.portfolio-masonry-one-item',
            masonry: {
              columnWidth: 180,
              gutter: 10
            }
        }); 
        
        var $portfolioMasonryOneFullwidth = $('.portfolio-masonry-one-fullwidth').isotope({
            itemSelector: '.portfolio-masonry-one-item',
            masonry: {
              columnWidth: 180,
              gutter: 10
            }
        });
        
        var $portfolioMasonryTwo = $('.portfolio-masonry-two').isotope({
            itemSelector: '.portfolio-masonry-two-item',
            masonry: {
              columnWidth: 250,
              gutter: 10
            }
        });
        
        var $portfolioMasonryTwoFullwidth = $('.portfolio-masonry-two-fullwidth').isotope({
            itemSelector: '.portfolio-masonry-two-item',
            masonry: {
              columnWidth: 250,
              gutter: 10
            }
        });
        
        var $portfolio = $('.portfolio').isotope({
            itemSelector: '.portfolio-item',
            masonry: {
              rowHeight: 280
            }
        });
        
        var $blogMasonry6col = $('.blog-masonry-6col').isotope({
            itemSelector: '.blog-masonry-item',
            masonry: {
              columnWidth: '.col-lg-2',
              gutter: 0
            }
        });
        
        var $blogMasonry4Col = $('.blog-masonry-4col').isotope({
            itemSelector: '.blog-masonry-item',
            masonry: {
              columnWidth: '.col-md-3',
              gutter: 0
            }
        });
        
        var $blogMasonry3Col = $('.blog-masonry-3col').isotope({
            itemSelector: '.blog-masonry-item',
            masonry: {
              columnWidth: '.col-md-4',
              gutter: 0
            }
        });
        
        var $blogMasonry2Col = $('.blog-masonry-2col').isotope({
            itemSelector: '.blog-masonry-item',
            masonry: {
              columnWidth: '.col-md-6',
              gutter: 0
            }
        });
        
        $('ul.filters li a').on('click', function() {
            var filterValue = $( this ).attr('data-filter');
            $portfolioMasonryOne.isotope({ filter: filterValue });
            $portfolioMasonryOneFullwidth.isotope({ filter: filterValue });
            $portfolioMasonryTwo.isotope({ filter: filterValue });
            $portfolioMasonryTwoFullwidth.isotope({ filter: filterValue });
            $portfolio.isotope({ filter: filterValue });
        });       
        

        $('ul.filters li a').on('click', function(){
            $('ul.filters li a').removeClass('active');
            $(this).addClass('active');
        });

    });
    
    /* --------------------------------------------
     SECURITY CHECK HUMAN
    -------------------------------------------- */
    if($("#senderHuman").length > 0 ) {
        var a = Math.ceil(Math.random() * 10) + 1;
        var b = Math.ceil(Math.random() * 10) + 1;
        document.getElementById("senderHuman").placeholder = a +" + "+ b +" = ?";
        document.getElementById("checkHuman_a").value = a;
        document.getElementById("checkHuman_b").value = b;
    }
   
    /* --------------------------------------------
     CONTACT FORM
    -------------------------------------------- */
    var messageDelay = 2000;
    $(init);

    function init() {
      $('#contactForm').show().submit( submitForm ).addClass( 'positioned' );  
    }

    // Submit the form via Ajax
    function submitForm() {
      var contactForm = $(this);

      // Are all the fields filled in?

      if ( !$('#senderName').val() || !$('#senderEmail').val() || !$('#message').val() ) {

        // No; display a warning message and return to the form
        $('#incompleteMessage').fadeIn().delay(messageDelay).fadeOut();
        contactForm.fadeOut().delay(messageDelay).fadeIn();

      } else {

        // Yes; submit the form to the PHP script via Ajax

        $('#sendingMessage').fadeIn();
        contactForm.show();

        $.ajax( {
          url: contactForm.attr( 'action' ) + "?ajax=true",
          type: contactForm.attr( 'method' ),
          data: contactForm.serialize(),
          success: submitFinished
        } );
      }

      // Prevent the default form submission occurring
      return false;
    }


    // Handle the Ajax response
    function submitFinished( response ) {
      response = $.trim( response );
      $('#sendingMessage').fadeOut();

      if ( response == "success" ) {

        // Form submitted successfully:
        // 1. Display the success message
        // 2. Clear the form fields
        // 3. Fade the content back in

        $('#successMessage').fadeIn().delay(messageDelay).fadeOut();
        $('#senderName').val( "" );
        $('#senderEmail').val( "" );
        $('#message').val( "" );

        $('#content').delay(messageDelay+500).fadeTo( 'slow', 1 );

      } else {

        // Form submission failed: Display the failure message,
        // then redisplay the form
        $('#failureMessage').fadeIn().delay(messageDelay).fadeOut();
        $('#contactForm').delay(messageDelay+500).fadeIn();
      }
    }

});