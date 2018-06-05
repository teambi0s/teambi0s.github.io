$(document).ready(function() {
	$('.magnific-popup').magnificPopup({
		//delegate: 'a',
		type: 'image',
        verticalFit: true,
        closeOnContentClick: true,
		closeBtnInside: true,
        mainClass: 'mfp-with-zoom mfp-img-mobile',
        gallery: {
			enabled: true
		},
	});
});