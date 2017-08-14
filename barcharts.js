window.onload = function() {
	var canvas = document.getElementById('bar-charts');
	var ctx = canvas.getContext('2d');

	var array = [5,8,2,1,15,2,3,5,9,11,10,4,3,14,1,7,10,3,2,13];
	var width =  50;
	var currX = 50;
	var base = 200;

	ctx.fillStyle = "#00e0d0";
	for (var i=0; i < array.length; i++) {
		var h = array[i];
		h*=10;
		ctx.fillRect(currX, canvas.height - h, width, h);
		currX += width + 10;
	}
};