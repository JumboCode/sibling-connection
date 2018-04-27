var isNavOpen = false;

$( document ).ready(function() {
	$('.menu-icon').click(function() {
		toggleNav();
	});

	$('.menu-word').click(function() {
		toggleNav();
	})

});

function toggleNav()
{
    isNavOpen = !isNavOpen;
    if (isNavOpen) {
    	openNav();
	} else {
    	closeNav();
	}
}

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
