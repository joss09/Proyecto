var num=150, d=50, frames=100;
var theta=0, d2;

function setup() {
  createCanvas(1000,1000);
  colorMode(HSB,360,100,100);
  smooth(6);
  noStroke();
}

function draw() {
  randomSeed(36521);
  background(0,0,0);
  stroke("pink");
  strokeWeight(3);
  textSize(20);
  text("FACULTAD DE ESTUDIOS SUPERIORES ACATLÁN",250,100);
  text("INTEGRANTES: ARANGO CRUZ JOSEFINA",250,200);
  text("MÁRTINEZ CANTÚ CESAR OSVALDO",400,250);
  text("PROYECTO FINAL: TECNOLOGÍA MULTIMEDIA",250,350);

  for (var i=0; i<num; i++) {
    var angle = (TWO_PI/num)*i;
    var x = width/2 + cos(angle)*d;
    var y = height/2 + sin(angle)*d;
    push();
    translate(x, y);
    rotate(theta+angle);
    if (random(1)>.15) {
      d2=50+i*2;
      stroke(360.0/num*i,90,90);
      fill(360.0/num*i,90,90, 20);
    } else {
      d2=50+i*2.5;
      stroke(360.0/num*i,90,90);
      fill(360.0/num*i,90,90, 90);
    }
    if (random(1)>.3) {
      arc(0, 0, d2, d2, 0, radians(d2/5));
    }
    pop();
  }
  theta += (TWO_PI/frames);
 
}