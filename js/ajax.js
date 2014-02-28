//RANDOM TESTIMONIALS
var rand = Math.round(Math.random() * 2); 
	//Math.round rounds the number up, so that it's no longer decimal numbers
	//Multiply by 2 so that the number can go up to 2 (if not, it's just decimal numbers ≤ 1)
var file = 'testimonial-'+ rand +'.html';
	//This generates the random file name

//console.log(file); This will test it out

$('.rand-test').load(file);