const canvas=document.getElementById("canvas");
const ctx=canvas.getContext("2d");

var bienvenue=0;
//  setTimeout(function(){ alert("Vous devez vous diriger vers la mine d'or pour recevoir de l'or !"); }, 2200);
setTimeout(function(){ bienvenue=1; }, 2200);

canvas.width=800;
canvas.height=500;
const keys=[];

const mineDor={ //Positionnement de la mine d'or
  xMin:-266,
  xMax:-166,
  yMin:-183,
  yMax:-93
}
//-240 -193
const shopButton={
  xMin:-266,
  xMax:-166,
  yMin:-240,
  yMax:-193
}

const popupButton={
  xMin:-50,
  xMax:50,
  yMin:73,
  yMax:105
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
  solde:0,
  cadeauObtenu:false,
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

                    //La position du click sur le canevas

var clickX= e.pageX-positionCanevasX;
var clickY= e.pageY-positionCanevasY;

                    //si l'utilisateur choisis de partir vers la mine d'or

if (clickX>mineDor.xMin && clickX<mineDor.xMax && clickY>mineDor.yMin &&clickY<mineDor.yMax){
  var inter=setInterval(function(){

    if (player.y>88) {
      player.y-=player.speed;
      player.frameY=3;
      player.moving=true;
    }
    if (player.x>240) {
      player.x-=player.speed;
      player.frameY=1;
      player.moving=true;

    }
    else if(player.x<240+player.speed&&player.y<88+player.speed) {

      player.moving=false ;
      clearInterval(inter);
      shopping=1;
    }

  }, 30);

}
                        //lorsque l'utilisateur choisis de recevoir de l'or
if (clickX>shopButton.xMin && clickX<shopButton.xMax&&clickY>shopButton.yMin&&clickY<shopButton.yMax&&shopping==1){
  shop.src="50.png";
  setTimeout(function(){ shopping=0;player.cadeauObtenu=true; }, 300);
player.solde=50;
}


if (clickX>popupButton.xMin && clickX<popupButton.xMax && clickY>popupButton.yMin &&clickY<popupButton.yMax){
  bienvenue=0;
}


});

const shop=new Image();
shop.src="Untitled design.png";

//var shop = GIF();
//shop.load("unnamed.gif");


canvas.addEventListener("mousemove",function(e) {
  var mouseX= e.pageX-positionCanevasX;
  var mouseY= e.pageY-positionCanevasY;

    if (mouseX>mineDor.xMin && mouseX<mineDor.xMax && mouseY>mineDor.yMin &&mouseY<mineDor.yMax) {
if (shopping==0&&player.cadeauObtenu==false) {
  canvas.style.cursor="pointer";
}else {
  canvas.style.cursor="no-drop";
}

  }
  else if (mouseX>shopButton.xMin && mouseX<shopButton.xMax&&mouseY>shopButton.yMin&&mouseY<shopButton.yMax&&shopping==1) {

  canvas.style.cursor="pointer";
}
else if (mouseX>popupButton.xMin && mouseX<popupButton.xMax&&mouseY>popupButton.yMin&&mouseY<popupButton.yMax&&bienvenue==1) {

canvas.style.cursor="pointer";
}
  else {

    canvas.style.cursor="default";
  }
});

const donjon=new Image();
donjon.src="donjon-006.png";

const popup=new Image();
popup.src="pngtree-cool-game.png";

var solde=document.getElementById("solde");
function animate(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.drawImage(background,0,0,canvas.width,canvas.height);
  ctx.drawImage(mineDorImage,127,50,120,120);
  ctx.drawImage(donjon,500,-10,256,256);
  drawSprite(playerSprite,player.width*player.frameX,player.height*player.frameY,player.width,player.height,player.x,player.y,player.width,player.height);

  if (shopping==1&&player.cadeauObtenu===false) {
    ctx.drawImage(shop,127,10,100,60);
  }
  if (bienvenue==1) {
    ctx.drawImage(popup,canvas.width/2-150,canvas.height/2-150,300,300);
  }
    //movePlayer();
  handlePlayerFrame();
  requestAnimationFrame(animate);
  solde.innerText=player.solde;
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

  if (!(player.x>127 && player.x<90&&player.y<120)) {
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
