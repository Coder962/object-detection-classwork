function setup() {
    canvas = createCanvas(800 , 450);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd' , modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}
img = "";
status = "";
function preload() {
    img = loadImage('dog_cat.jpg');
}
function modelLoaded() {
    console.log("Model Loaded!")
    status = true;
    objectDetector.detect(img, gotResult);
}
function gotResult(error , results) {
    if (error) {
        console.log("error");
    }
    console.log(results);
}
function draw() {
    image(img,0,0,800,450);
    fill("#FF0000");
    text("Dog",45,75);
    noFill();
    stroke("#FF0000");
    rect(30,60,450,350);
    fill("#FF0000");
    text("Cat",320,120);
    noFill();
    stroke("#FF0000");
    rect(300,80,270,320);
}