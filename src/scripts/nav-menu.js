$( document ).ready(function() {
	$('#menu-icon').click(function() {
		openNav();
	});

	$('.menu-word').click(function() {
		openNav();
	})

	$('.overlay-menu-word').click(function() {
		closeNav();
	})

	$('#overlay-menu-icon').click(function() {
		closeNav();
	})

});

function openNav() {
	$('#menu-icon').toggleClass("change");
	$('#overlay-menu-icon').toggleClass("change");
	$('#nav').css("height", "100%");
		
}

function closeNav() {
	$('#menu-icon').toggleClass("change", false);
	$('#overlay-menu-icon').toggleClass("change", false);
	$('#nav').css("height", 0);
}
