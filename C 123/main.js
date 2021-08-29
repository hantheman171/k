noseX=0;
noseY=0;
difference = 0;
rightWristX = 0;
leftWristX = 0;
function setup() {
  video = createCapture(VIDEO);
  video.size(550, 550);

  canvas = createCanvas(550 550)
  canvas.position(560,150);

  poseNet = ml5.poseNet(video modelLoaded);
  poseNet.on('pose', gotPoses);
}
function modelLoaded() {
  console.log('poseNet is initialized');
}
function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);
    noseX = resulrs[0].pose.nose.x;
    noseY = resulrs[0].pose.nose.y;

    leftWristX = results[0].pose.leftWrist.x;
    rightWristX = results[0].pose.rightWrist.x;
    difference = floor(leftWristX - rightWristX);
    console.log("leftWristX =" + " rightWristX = "+ rigthWristX + " diffrence = " + diffrence);
  }
}  
function draw(){
  background('#30D5C8');

  document.getElementById("square_side").innerHTML = "width and height of square will be = " + diffrence +"px"
  fill('#00FF00');
  stroke('#00FF00');
  square(noseX, noseY,difference);
}