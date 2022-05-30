function preload(){

}

function setup(){
canvas= createCanvas(300,300);
canvas.center();
video=createCapture(VIDEO);
video.hide();
poseNet=ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}

function modelLoaded(){
console.log('model is loaded');
}

function gotPoses(results){
if(results.length>0){
console.log(results);
leftEyeX=results[0].pose.leftEye.x;
leftEyeY=results[0].pose.leftEye.y;
rightEyeY=results[0].pose.rightEye.x;
rightEyeY=results[0].pose.rightEye.y;
}
}

function draw(){
image(video,0,0,300,300);
}

function take_snapshot(){
save("myFilterImage.jpg");
}