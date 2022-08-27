
let settings = {
  numberLines: 167,
//  rounding: 200,
  // size: 500
  rotationSpeed: 156,
  red: 255,
  green: 0,
  blue: 0,
  randomColors: false

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  rectMode(CENTER)




  gui = new dat.GUI();
  gui.add(settings, 'numberLines', 1, 167).name("Number of lines")
 gui.add(settings, 'rotationSpeed', 50, 300).name("Rotation Speed")
 gui.add(settings, 'randomColors', true, false).name("Random Colors Changes")
 gui.add(settings, 'red', 0, 255).name("Red")
 gui.add(settings, 'green', 0, 255).name("Green")
 gui.add(settings, 'blue', 0, 255).name("Blue")




  gui.width = 300;
  gui.close();
  gui.remember(settings);
}

function draw() {
  background(0,0,0);
  noFill()

  translate(width/2, height/2)

for (var i = 0; i < settings.numberLines; i++) {

push()
rotate(sin(frameCount + i ) * settings.rotationSpeed)



if (settings.randomColors == true) {
var r =  map(sin(frameCount), -1, 1, 50, 255)
var g =  map(cos(frameCount / 2), -1, 1,50 , 255)
var b =  map(sin(frameCount /  4), -1 ,1, 50, 255)
} else {
  var r =  settings.red
  var g =  settings.green
  var b =  settings.blue
}

stroke(r,g,b, 200);

  rect( 0, 0, 500 - i * 3, 500 - i * 3, 167 - i )
  pop()
}

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(0,0,0);
  setup() 
}
