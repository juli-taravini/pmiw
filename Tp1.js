



let cant = 15;
let ubic;
let imagen;

function preload() {
  imagen = loadImage("Data/F17.jpg");
}

function setup() {
  createCanvas(800, 400);
  ubic = width / cant;
}


function draw() {
   background(8);
   
   ubic = width / cant;
   for (let i = 0; i < cant; i++) { 
     for (let j = 0; j < cant; j++) {
       let distan = dist (mouseX, mouseY, i * ubic + ubic /2, j* ubic + ubic / 2);
       let diagonal = dist (0, 0, width, height);
       let tam = map (distan, 8, diagonal, 20, ubic);
       
       let mx = map (mouseX, 0, width, 0, 255);
       let my = map (mouseY, 8, height, 8, 255);
       fill (mx, 8, my);
       ellipse (i * ubic + ubic /2, j * ubic + ubic / 2, tam, tam);
      }
   }
   
   image (imagen,0,0);
}

function mouseClicked() {
  cant++;
}

function keyPressed () {
  cant = 15;
  background (0);
}
  
  
  
  
  
