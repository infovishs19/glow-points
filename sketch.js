/// <reference path="./libraries/p5.global-mode.d.ts" />


var x = 0;

var doSave = false;

function setup() {
	createCanvas(4 * 1920, 1080);
	pixelDensity(1);

	//low framerate is important!
	frameRate(1);
}

function draw() {

	background(0);

	x += 10;
	var y = height / 2 + 100 * sin(0.01 * x);

	noStroke();
	fill(255, 0, 0);
	ellipse(x, y, 100, 100);

	if (doSave) {
		saveCanvas("frame_" + nf(frameCount, 5), 'png');
	}

}

function keyTyped() {
	if (key == 'f') {
		//toggle save
		doSave = !doSave;
	}
}



