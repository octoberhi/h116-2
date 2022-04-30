rightEyeX=0;
rightEyeY=0;

function setup()
{
canvas=createCanvas(300,300);
canvas.center();
video=createCapture(VIDEO);
video.size(300,300);
video.hide();
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on("pose",gotPoses);
}

function modelLoaded(){
console.log("Model is loaded");
}

function gotPoses(results){
if (results.length>0){
console.log(results);
rightEyeX=results[0].pose.rightEye.x-20;
rightEyeY=results[0].pose.rightEye.y-50;
}
}

function draw(){
image(video,0,0,300,300);
fill(255,255,255,0);
stroke("blue");
square(rightEyeX,rightEyeY,100);
}
