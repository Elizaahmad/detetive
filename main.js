function preload(){
ClownFilter=loadImage('https://i.postimg.cc/8513f5Gz/search-icon-png-9971.png');
} 

function setup(){
canvas=createCanvas(300,300);
canvas.center();
video=createCapture(VIDEO);
video.size(300,300);
video.hide();

poseNet = ml5.poseNet(video,modelloaded);
poseNet.on('pose',gotposes);
}

function draw(){
image(video,0,0,300,300);
image(ClownFilter,noseX,noseY,100,100);

}

function modelloaded(){
    console.log('modelloaded');
}
noseX=0;
noseY=0;
function gotposes(results){
    if(results.length>0)
    {
        noseX=results[0].pose.nose.x- 15;
        noseY=results[0].pose.nose.y- 65;
    }
}
function Take_Snapshot(){
    save('Selfie.png');
}