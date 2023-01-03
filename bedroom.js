img="";

status="";

objects=[];

function preload(){
    img=loadImage("");
}

function setup(){
    canvas=CreateCanvas(640,420);
    canvas.center;
    objectDetetor=ml5.objectDetcetor('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="status:detecting objects";

}

function modelLoaded(){
    console.log("modelLoaded!")
    status=true;
    objectDetector.detect(img,gotResult);
}

function gotResult(){
    
}