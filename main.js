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

