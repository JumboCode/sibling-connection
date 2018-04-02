$('#menu-icon').click(function() {
	console.log("hey1");
	$(this).toggleClass("change");
});

$('.menu-word').click(function() {
	console.log("hey");
	$('#menu-icon').toggleClass("change");
})