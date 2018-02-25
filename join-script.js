$( document ).ready(function() {
	/* Donate Icons */
	$('.donate').hover(function() {
		$('#donate-black').stop().animate({
			opacity: 0
		}, 200);
		$('#donate-peach').stop().animate({
			opacity: 1
		}, 200);
		$('#donate-txt').stop().animate({
			color: "#FF9D76"
		}, 190);
	}, function() {
		$('#donate-peach').stop().animate({
			opacity: 0
		}, 200);
		$('#donate-black').stop().animate({
			opacity: 1
		}, 200);
		$('#donate-txt').stop().animate({
			color: "#000000"
		}, 190);
	});

	/* Social Worker Icons */
	$('.social-workers').hover(function() {
		$('#social-black').stop().animate({
			opacity: 0
		}, 200);
		$('#social-peach').stop().animate({
			opacity: 1
		}, 200);
		$('#social-txt').stop().animate({
			color: "#FF9D76"
		}, 190);
	}, function() {
		$('#social-peach').stop().animate({
			opacity: 0
		}, 200);
		$('#social-black').stop().animate({
			opacity: 1
		}, 200);
		$('#social-txt').stop().animate({
			color: "#000000"
		}, 190);
	});

	/* Volunteer Icons */
	$('.volunteer').hover(function() {
		$('#vol-black').stop().animate({
			opacity: 0
		}, 200);
		$('#vol-peach').stop().animate({
			opacity: 1
		}, 200);
		$('#vol-txt').stop().animate({
			color: "#FF9D76"
		}, 190);
	}, function() {
		$('#vol-peach').stop().animate({
			opacity: 0
		}, 200);
		$('#vol-black').stop().animate({
			opacity: 1
		}, 200);
		$('#vol-txt').stop().animate({
			color: "#000000"
		}, 190);
	});
});