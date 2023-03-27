song1 = "";
song2 = "";
var leftwristx = 0;
var leftwristy = 0;
var rightwristx = 0;
var rightwristy = 0;

function preload(){
	song1=loadSound("song.mp3");
	song2=loadSound("song2.mp3");
}
 function setup(){
	canvas = createCanvas(600,500);
	canvas.center();
	video = createCapture(VIDEO);
	 video.hide();
	 posenet = ml5.poseNet(video, modelloaded);
	posenet.on('Pose', gotposes);
 }


function draw(){
	image(video, 0, 0, 600, 500);
	fill("#FF0000");
	stroke("#FF0000");
	if(scoreleftwrist>0.2);
	circle(leftwristx, leftwristy, 20);
	numberleftwristy=Number(leftwristy);
	remove_decimal=floor(numberleftwristy);
	volume=remove_decimal/500;
	document.getElementById("volume").innerHTML="volume= "+volume;
	song.setVolume(volume);
}

function play_music(){
	song.play();
	song.setVolume(1);
	song.rate(1);
}

function modelloaded(){
	console.log("Posenet has been initialized!");
}

function gotposes(){
	if(results.length > 0){
		console.log(results);
		leftwristx = results[0].pose.leftWrist.x;
		leftwristy = results[0].pose.leftWrist.y;
		console.log("Left wrist x = "+leftwristx+" Left wrist y = "+leftwristy);
		rightwristx = results[0].pose.rightWrist.x;
		rightwristy = results[0].pose.rightWrist.y;
		console.log("Right wrist x = "+rightwristx+" Left wrist y = "+rightwristy);
		scoreleftwrist=results[0].pose.keypoints[9].score;
}

