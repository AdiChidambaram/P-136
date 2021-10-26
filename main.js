function setup() {
    canvas = createCanvas(400, 400);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}

function start() {
    obde = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Object Detecting";
    document.getElementById("inp").value;
}

function modelLoaded() {
    console.log("Model Loaded");
}

function draw() {
    image(video, 0, 0, 400, 400);
}
