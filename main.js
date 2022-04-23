
function setup(){
    canvas = Createcanvas(480, 380);
    canvas.center
}


function start(){
    objectdetector = ml5.objectdetcter('cocosd' , modelLoded);
    document.getElementById("status").innerHtml = "status : detecting objects";
    document.getElementById("numbeer_of_objects detcted are")
}


function modelLoded() {
    console.log("ModelLoaded !");
    status = true
}

function draw() {
    image(video,0 ,0 , 480, 380);
    if(status!= "")
    {
        objectdetcter.detect(video,gotResult);
        for(i = 0; i < object.lenth; i++) {
            document.getElementById("status").innerHtml = "status : object detected";

        }
    }
}
