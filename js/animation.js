var $row = $('.col-md-4'); // calling ships for the ship slide effect
var $top = $('.top img'); // calling ships for the ship slide effect



$('.container').waypoint(function () { // using the section as the register to say when to load the ships on screen
	$row.addClass('js-row-animate'); // this is the final animation
}, { offset: '0'});


$('.top-section').waypoint(function () { // using the section as the register to say when to load the ships on screen
	$top.addClass('js-top-animate'); // this is the final animation
}, { offset: '99%'});