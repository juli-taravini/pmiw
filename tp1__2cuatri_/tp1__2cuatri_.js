let cant = 15;
let ubic;
let imagen;

function preload() {
  imagen = loadImage("F17.jpg");
}

function setup() {
 createCanvas(800, 400);
  ubic = width/cant;

}


function draw() {
 background(0);

  ubic = width/cant;
  for (let i=0; i<cant; i++) {
    for (let j=0; j<cant; j++) {
      let distan = dist(mouseX, mouseY, i *ubic + ubic/2, j *ubic + ubic/2);
      let diagonal = dist(0, 0, width, height);
      let tam = map(distan, 0, diagonal, 20, ubic);

      if ((i+j)%2==0) {
        let mx = map(mouseX, 0, width, 0, 255);
        let my = map (mouseY, 0, height, 0, 255);
        fill(mx, 0, my);
        ellipse(i*ubic+ubic/2, j*ubic+ubic/2, tam, tam);
      } 
      else {
        let mx = map(mouseX, 0, width, 0, 255);
        let my = map (mouseY, 0, height, 0, 255);
        fill(mx, 0, my);
        ellipse(i*ubic+ubic/2, j*ubic+ubic/2, tam, tam);
      }
    }
  }
  
  image (imagen, 0,0);

}

function mouseClicked() {
  cant++;
}
function keyPressed() {

  if (key == ENTER) {
    cant = 15;
    background (0);
  }

}
