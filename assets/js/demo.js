$(document).ready(function() {
    $(function() {
		"use strict";
        var owlTestimonialCenter = $("#owlTestimonial-center");

        owlTestimonialCenter.owlCarousel({
            autoPlay: 3000,
            items : 3,  
            itemsDesktop : [1000,3],  
            itemsDesktopSmall : [900,2],  
            itemsTablet: [600,1],  
            itemsMobile : false  

        });
        
        var owlTestimonialCenterBgDark = $("#owlTestimonial-center-bg-dark");

        owlTestimonialCenterBgDark.owlCarousel({
            autoPlay: 3000,
            items : 3,  
            itemsDesktop : [1000,3],  
            itemsDesktopSmall : [900,2],  
            itemsTablet: [600,1],  
            itemsMobile : false  

        });

        var owlTestimonialLeft = $("#owlTestimonial-left");

        owlTestimonialLeft.owlCarousel({
            autoPlay: 5000,
            items : 3,  
            itemsDesktop : [1000,3],  
            itemsDesktopSmall : [900,2],  
            itemsTablet: [600,1],  
            itemsMobile : false  

        });

        var owlTestimonialRight = $("#owlTestimonial-right");

        owlTestimonialRight.owlCarousel({
            autoPlay: 7000,
            items : 3,  
            itemsDesktop : [1000,3],  
            itemsDesktopSmall : [900,2],  
            itemsTablet: [600,1],  
            itemsMobile : false  

        });
        
        var owlTestimonialTriangleIsosceles = $("#owlTestimonial-triangle-isosceles");

        owlTestimonialTriangleIsosceles.owlCarousel({
            autoPlay: 9000,
            transitionStyle : "fade",
            items : 3,  
            itemsDesktop : [1000,3],  
            itemsDesktopSmall : [900,2],  
            itemsTablet: [600,1],  
            itemsMobile : false,  
            

        });
        
        var owlTestimonialTriangleIsoscelesBgDark = $("#owlTestimonial-triangle-isosceles-bg-dark");

        owlTestimonialTriangleIsoscelesBgDark.owlCarousel({
            autoPlay: 9000,
            transitionStyle : "fade",
            items : 1,  
            itemsDesktop : [1000,1],  
            itemsDesktopSmall : [900,1],  
            itemsTablet: [600,1],  
            itemsMobile : false,  
            

        });
        
        var owlTestimonialTriangleIsoscelesTop = $("#owlTestimonial-triangle-isosceles-top");

        owlTestimonialTriangleIsoscelesTop.owlCarousel({
            autoPlay: 5000,
            items : 3,  
            itemsDesktop : [1000,3],  
            itemsDesktopSmall : [900,2],  
            itemsTablet: [600,1],  
            itemsMobile : false  

        });
    });
});