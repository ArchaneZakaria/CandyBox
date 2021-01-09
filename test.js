const canvas=document.getElementById("canvas");
const ctx=canvas.getContext("2d");

canvas.width=800;
canvas.height=500;
const keys=[];

const player={
  x:400,  //position horizontale
  y:250,  //position verticale
  width:32,//la largeur du caractére
  height:48,//la hauteur du caractere
  frameX:0,//coordonnees horizontal du cadre
  frameY:0,//coordonnees vertical du cadre
  speed:6,
  moving:false
}

const playerSprite=new Image();//Notre caractére "personnage"
playerSprite.src="roshan.png";
//l'arriere plan du canvas
const background=new Image();
background.src="eea83dbbdef481f131348d77c7bf04a0.jpg";
//La fonction qui va permettre de dessiner le caractére
function drawSprite(img,sX,sY,sW,sH,dX,dY,dW,dH){
  ctx.drawImage(img,sX,sY,sW,sH,dX,dY,dW,dH);
}
const mineDor=new Image();
mineDor.src="Clashofclans-Mine.png";


canvas.addEventListener("click",function(e) {
  console.log(e);
})

const donjon=new Image();
donjon.src="donjon-006.png";

function animate(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.drawImage(background,0,0,canvas.width,canvas.height);
  ctx.drawImage(mineDor,0,50,120,120);
  ctx.drawImage(donjon,500,-10,256,256);
  drawSprite(playerSprite,player.width*player.frameX,player.height*player.frameY,player.width,player.height,player.x,player.y,player.width,player.height);
  movePlayer();
  handlePlayerFrame();
  requestAnimationFrame(animate);
}
animate();

window.addEventListener("keydown",function(e){
  keys[e.keyCode]=true; //on ajoute la touche
  player.moving=true;
});
window.addEventListener("keyup",function(e){
  delete keys[e.keyCode];
  player.moving=false;
});

function movePlayer() {
  if (keys[38] && player.y>80) {
    player.y-=player.speed;
    player.frameY=3;
  }
  if (keys[37] && player.x>0) {
    player.x-=player.speed;
    player.frameY=1;
  }
  if (keys[40] && player.y<canvas.height-100) {
    player.y+=player.speed;
    player.frameY=0;
  }
  if (keys[39] && player.x<canvas.width-player.width) {
    player.x+=player.speed;
    player.frameY=2;
  }
}

function handlePlayerFrame(){
  if(player.frameX<3&&player.moving){
    player.frameX++;
  }else{
    player.frameX=0;
  }
}
