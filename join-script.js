$( document ).ready(function() {
	$('#menu-icon').click(function() {
		$(this).toggleClass("change");
		openNav();
	});

	$('.menu-word').click(function() {
		$('#menu-icon').toggleClass("change");
	})



	/* Donate Icons */
	$('.donate').hover(function() {
		$('#donate-black').stop().animate({
			opacity: 0
		}, 50);
		$('#donate-peach').stop().animate({
			opacity: 1
		}, 50);
		$('#donate-txt').stop().animate({
			color: "#557CF6"
		}, 190);
		$('#donate-peach').toggleClass('hvr-bob');
		$('#donate-txt').css("padding-top", "14px");
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
		$('#donate-peach').toggleClass('hvr-bob');
		$('#donate-txt').css("padding-top", "10px");
	});

	/* Social Worker Icons */
	$('.social-workers').hover(function() {
		$('#social-black').stop().animate({
			opacity: 0
		}, 50);
		$('#social-peach').stop().animate({
			opacity: 1
		}, 50);
		$('#social-txt').stop().animate({
			color: "#557CF6"
		}, 190);
		$('#social-peach').toggleClass('hvr-bob');
		$('#social-txt').css("padding-top", "14px");
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
		$('#social-peach').toggleClass('hvr-bob');
		$('#social-txt').css("padding-top", "10px");
	});

	/* Volunteer Icons */
	$('.volunteer').hover(function() {
		$('#vol-black').stop().animate({
			opacity: 0
		}, 50);
		$('#vol-peach').stop().animate({
			opacity: 1
		}, 50);
		$('#vol-peach').toggleClass('hvr-bob');
		$('#vol-txt').css("padding-top", "14px");
		$('#vol-txt').stop().animate({
			color: "#557CF6"
		}, 190);
	}, function() {
		$('#vol-peach').stop().animate({
			opacity: 0
		}, 200);
		$('#vol-peach').toggleClass('hvr-bob');
		$('#vol-txt').css("padding-top", "10px");
		$('#vol-black').stop().animate({
			opacity: 1
		}, 200);
		$('#vol-txt').stop().animate({
			color: "#000000"
		}, 190);
	});
});