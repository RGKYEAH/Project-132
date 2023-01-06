img = "";
status = "";

function preload() {
    img = loadImage("laptop.jpg");
}

function setup() {
    canvas = createCanvas(640,420);
    canvas.center();

    objectDetector = ml5.objectDetector('cocossd',ModelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}
function draw() {
    image(img,0,0,640,420);
    fill("lightgreen");
    text("Laptop",45,25);
    noFill();
    stroke("lightgreen");
    rect(30,05,555,395);
}

function ModelLoaded() {
    console.log("Model Is Loaded");
    status = true;
    objectDetector.detect(img,gotresult);
}

function gotresult(error,results) {
    if(error) {
        console.error(error);
    }
    else {
        console.log(results);
    }
}