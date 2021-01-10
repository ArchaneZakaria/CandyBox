const canvas=document.getElementById("canvas");
const ctx=canvas.getContext("2d");

setTimeout(function(){ alert("Vous devez vous diriger vers la mine d'or pour recevoir de l'or !"); }, 2200);


canvas.width=800;
canvas.height=500;
const keys=[];

const mineDor={ //Positionnement de la mine d'or
  xMin:-393,
  xMax:-293,
  yMin:-193,
  yMax:-93
}
//-240 -193
const shopButton={
  xMin:-393,
  xMax:-293,
  yMin:-240,
  yMax:-193
}

const player={
  x:400,  //position horizontale
  y:250,  //position verticale
  width:32,//la largeur du caractére
  height:48,//la hauteur du caractere
  frameX:0,//coordonnees horizontal du cadre
  frameY:0,//coordonnees vertical du cadre
  speed:6,
  moving:false,
  solde:0
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
const mineDorImage=new Image();
mineDorImage.src="Clashofclans-Mine.png";

var shopping=0;

const positionCanevasX=canvas.offsetLeft;
const positionCanevasY=canvas.offsetTop;

canvas.addEventListener("click",function(e) {
var clickX= e.pageX-positionCanevasX;
var clickY= e.pageY-positionCanevasY;


if (clickX>mineDor.xMin && clickX<mineDor.xMax && clickY>mineDor.yMin &&clickY<mineDor.yMax){
  var inter=setInterval(function(){
    if (player.y>82) {
      player.y-=player.speed;
      player.frameY=3;
      player.moving=true;
    }
    if (player.x>100) {
      player.x-=player.speed;
      player.frameY=1;
      player.moving=true;
    }
    else if(player.x<100+player.speed&&player.y<82+player.speed) {
      player.moving=false ;
      clearInterval(inter);
      shopping=1;

    }
  }, 80);

}if (clickX>shopButton.xMin && clickX<shopButton.xMax&&clickY>shopButton.yMin&&clickY<shopButton.yMax&&shopping==1){
  shop.src="rsz_2pnghut_gold-coin.png";
  setTimeout(function(){ shopping=0; }, 300);

}


});

const shop=new Image();
shop.src="rsz_15a28.png";



canvas.addEventListener("mousemove",function(e) {
  var mouseX= e.pageX-positionCanevasX;
  var mouseY= e.pageY-positionCanevasY;

    if (mouseX>mineDor.xMin && mouseX<mineDor.xMax && mouseY>mineDor.yMin &&mouseY<mineDor.yMax) {
if (shopping==0) {
  canvas.style.cursor="pointer";
}else {
  canvas.style.cursor="no-drop";
}

  }
  else if (mouseX>shopButton.xMin && mouseX<shopButton.xMax&&mouseY>shopButton.yMin&&mouseY<shopButton.yMax&&shopping==1) {

  canvas.style.cursor="pointer";
}
  else {

    canvas.style.cursor="default";
  }
});

const donjon=new Image();
donjon.src="donjon-006.png";

function animate(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.drawImage(background,0,0,canvas.width,canvas.height);
  ctx.drawImage(mineDorImage,0,50,120,120);
  ctx.drawImage(donjon,500,-10,256,256);
  if (shopping==1) {
    ctx.drawImage(shop,0,10,100,60);
  }
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
console.log(player);
  if (!(player.x>0 && player.x<90&&player.y<120)) {
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
  }else {
    player.y+=player.speed;
  }

}

function handlePlayerFrame(){
  if(player.frameX<3&&player.moving){
    player.frameX++;
  }else{
    player.frameX=0;
  }
}
