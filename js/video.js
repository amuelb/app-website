var $dialog = $('#video');
var $placeholder = $('#video-placeholder');

$('#btn-open').on('click', function() {
	$placeholder.html('<iframe src="http://player.vimeo.com/video/81295966?color=333333&amp;autoplay=1" width="700" height="394" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>');
	//.get() returns the native javascript for us to access
	//when using jquery we dont have access to the original HTML elements directly, we are using jquery to manipulate them.
	//EXAMPLE: 
	//$dialog.show() - will call jquery's "show()" function
	//$dialog.get(0).show() - will call javascripts native "show()" function
	$dialog.get(0).showModal();
	//.show() --> allows multiple dialogs
	//.showModal() --> single dialog, with no user interaction below
});


$('#btn-close').on('click', function() {
	//.get() returns the native javascript for us to access
	//when using jquery we dont have access to the original HTML elements directly, we are using jquery to manipulate them.
	//EXAMPLE: 
	//$dialog.show() - will call jquery's "show()" function
	//$dialog.get(0).show() - will call javascripts native "show()" function
	$dialog.get(0).close();
	$placeholder.html('');
	//.show() --> allows multiple dialogs
	//.showModal() --> single dialog, with no user interaction below
});