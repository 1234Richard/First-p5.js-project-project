function preload() {

}
function setup() {
    canvas = createCanvas(500, 400);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(250, 250);
    video.hide();
}
function draw() {
    stroke(20, 50, 180);
    circle(30, 300, 30);
    stroke(0, 0, 250)
    rect(0, 0, 100, 100);
    stroke(60, 255, 60);
    ellipse(120, 40, 40, 40)
    stroke(255, 40, 210);
    rect(100, 100, 100, 50, 90);
    image(video, 150, 150, 250, 250);
}
function take_snapshot() {
    save("FilterAppImage.png");
}