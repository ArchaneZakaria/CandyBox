
          //Proprietes du canvas


const canvas=document.getElementById("canvas");
const ctx=canvas.getContext("2d");
canvas.width=800;
canvas.height=500;
var gameover =0 ;
var condition=0;
var gui=0;

const positionCanevasX=canvas.offsetLeft;
const positionCanevasY=canvas.offsetTop;




//---------------------------------LOCATION PRINCIPALE---------------------------------//
var currentFileLocation = window.location.pathname;
var mainPath = currentFileLocation.substring(0, currentFileLocation.lastIndexOf('/'));




                    //La popup de bienvenue sera afficher apres 2s et 200ms

var bienvenue=0;                                //Ce champs sera initialement égale a 0
setTimeout(function(){ bienvenue=1; }, 2200);   //Apres 2s et 200ms sera égale a 1 pour qu'il apparait dans la fonction animate()




const keys=[];



                  //Positionnement des éléments situées dans la carte

const Guilde={             //Positionnement de la guilde
    xMin:-266,
    xMax:-69,
    yMin:-35,
    yMax:165
  }

const mineDor={             //Positionnement de la mine d'or
  xMin:-266,
  xMax:-166,
  yMin:-183,
  yMax:-93
}


const Donjon={             //Positionnement du donjon
  xMin:114,
  xMax:304,
  yMin:-225,
  yMax:-75
}


const shopButton={        //Positionnement du boutton qui permet d'obtenir le cadeau
  xMin:-266,
  xMax:-166,
  yMin:-240,
  yMax:-193
}


const popupButton={     //Positionnement du boutton OK du PopUp
  xMin:-22,
  xMax:22,
  yMin:47,
  yMax:95
}

const popupGuildeCloseButton={     //Positionnement du boutton CLOSE du PopUp guilde
  xMin:112,
  xMax:145,
  yMin:-143,
  yMax:-116
}
const popupGuildeMineur1={     //Positionnement du boutton CLOSE du PopUp guilde
  xMin:87,
  xMax:112,
  yMin:-55,
  yMax:-27
}




                        //Les éléments situées dans la carte


const playerSprite=new Image();                       //Notre caractére "personnage"
playerSprite.src="images/sprite.png";

const background=new Image();                         //l'arriere plan du canvas
background.src="images/background.jpg";

const shop=new Image();                               //Button shop
shop.src="images/buttonShop.png";

const mineDorImage=new Image();                       //La mine d'or
mineDorImage.src="images/Mine.png";

const donjon=new Image();                             //Donjon
donjon.src="images/Donjon.png";

const popup=new Image();                              //PopUp
popup.src="images/bienvenue.png";

const niveau = new Image();
niveau.src = "images/Character Niveau.png";

const or = new Image();
or.src = "images/banniere.png";

const guilde = new Image();
guilde.src = "images/guilde mineur.png";

const popguilde = new Image();
popguilde.src =  "images/popguilde.png";






                        //Les attributs du personnage


const player={

            x:400,            //position horizontale
            y:250,            //position verticale
            width:32,         //la largeur du caractére
            height:48,        //la hauteur du caractere
            frameX:0,         //coordonnees horizontal du cadre
            frameY:0,         //coordonnees vertical du cadre
            speed:6,
            moving:false,
            solde:0,
            cadeauObtenu:false,
            niveau:1

}


//La fonction qui va permettre de dessiner le caractére
function drawSprite(img,sX,sY,sW,sH,dX,dY,dW,dH){
  ctx.drawImage(img,sX,sY,sW,sH,dX,dY,dW,dH);
}








var shopping=0;







                                    //L'evenement du click sur le canevas



                                      canvas.addEventListener("click",function(e) {

                    //La position du click sur le canevas

var clickX= e.pageX-positionCanevasX;
var clickY= e.pageY-positionCanevasY;

//alert(clickX);
//alert(clickY);
                    //si l'utilisateur clique sur la mine d'or

if (clickX>mineDor.xMin && clickX<mineDor.xMax && clickY>mineDor.yMin &&clickY<mineDor.yMax &&bienvenue==0&&player.cadeauObtenu==false){

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

                    //si l'utilisateur clique sur le boutton de shop
if (clickX>shopButton.xMin && clickX<shopButton.xMax&&clickY>shopButton.yMin&&clickY<shopButton.yMax&&shopping==1){

            shop.src="images/50.png";
            setTimeout(function(){ shopping=0;player.cadeauObtenu=true; }, 300);
            player.solde=50;
            condition=1;
}
//SI l'utilisateur clique sur la guilde

if (clickX > Guilde.xMin && clickX < Guilde.xMax && clickY > Guilde.yMin && clickY < Guilde.yMax) {
        var inter3 = setInterval(function() {
            if (player.y < 350) {
                player.y += player.speed;
                player.frameY = 0;
                player.moving = true;
            }
            if (player.x < 330) {
                player.x += player.speed;
                player.frameY = 2;
                player.moving = true;

            } else if (player.x > 330 - player.speed && player.y > 350 - player.speed) {
                player.moving = false;
                clearInterval(inter3);
                gui = 1;
            }
        }, 30);


    }


                    //si l'utilisateur clique sur le boutton du popup bienvenue
if (clickX>popupButton.xMin && clickX<popupButton.xMax && clickY>popupButton.yMin &&clickY<popupButton.yMax){

            bienvenue=0;
}





                    //si l'utilisateur clique sur le donjon
if (clickX>Donjon.xMin && clickX<Donjon.xMax&&clickY>Donjon.yMin&&clickY<Donjon.yMax&&player.cadeauObtenu==true&&gui==0){

var inter1=setInterval(function(){

  if (player.x<490) {
          player.x+=player.speed;
          player.frameY=2;
          player.moving=true;

  }
  if (player.y>130) {

          player.y-=player.speed;
          player.frameY=3;
          player.moving=true;

  }
  else if(player.x>490-player.speed&&player.y>130-player.speed) {

          player.moving=false ;
          clearInterval(inter);
          //shopping=1;
  }
},30);
  //alert("khdaama");

}



//si l'utilisateur decide de fermer la popup des mineurs


if (clickX>popupGuildeCloseButton.xMin && clickX<popupGuildeCloseButton.xMax&&clickY>popupGuildeCloseButton.yMin&&clickY<popupGuildeCloseButton.yMax&&gui==1){

  gui=0;
}



//si l'utilisateur decide d'acheter le premier mineur
if (clickX>popupGuildeMineur1.xMin && clickX<popupGuildeMineur1.xMax&&clickY>popupGuildeMineur1.yMin&&clickY<popupGuildeMineur1.yMax&&gui==1){
if(player.solde>10||player.solde==10){
  player.solde-=10;
  gui=0;
}else{
  alert("Vous n'avez pas assez d'or");
}

}
});











                            //L'evenement mousemove sur le canevas



                            canvas.addEventListener("mousemove",function(e) {

                              //La position du mousemove sur le canevas
  var mouseX= e.pageX-positionCanevasX;
  var mouseY= e.pageY-positionCanevasY;


                            //si l'utilisateur survol la mine d'or

    if (mouseX>mineDor.xMin && mouseX<mineDor.xMax && mouseY>mineDor.yMin &&mouseY<mineDor.yMax)
        {


                if (shopping==0&&player.cadeauObtenu==false) {
                  if (bienvenue==1) {
                    canvas.style.cursor="default";
                  }else{
                    canvas.style.cursor="pointer";
                  }

                }else {
                  canvas.style.cursor="no-drop";
                }

        }

                          //si l'utilisateur survol le boutton du shop

  else if (mouseX>shopButton.xMin && mouseX<shopButton.xMax&&mouseY>shopButton.yMin&&mouseY<shopButton.yMax&&shopping==1)
        {

                canvas.style.cursor="pointer";
        }


                          //si l'utilisateur survol le boutton OK du popup

  else if (mouseX>popupButton.xMin && mouseX<popupButton.xMax&&mouseY>popupButton.yMin&&mouseY<popupButton.yMax&&bienvenue==1)
        {

            canvas.style.cursor="pointer";

        }


                          //si l'utilisateur srvol sur le donjon
  else if (mouseX>Donjon.xMin && mouseX<Donjon.xMax&&mouseY>Donjon.yMin&&mouseY<Donjon.yMax&&player.cadeauObtenu==true&&gui==0){

              canvas.style.cursor="pointer";

  }

  else if (mouseX > Guilde.xMin && mouseX < Guilde.xMax && mouseY > Guilde.yMin && mouseY < Guilde.yMax && player.cadeauObtenu == true && condition==1) {

          canvas.style.cursor = "pointer";


      }

      //si l'utilisateur survol sur la touche close du popup guilde
else if ((mouseX>popupGuildeCloseButton.xMin && mouseX<popupGuildeCloseButton.xMax&&mouseY>popupGuildeCloseButton.yMin&&mouseY<popupGuildeCloseButton.yMax&&gui==1)
||
(mouseX>popupGuildeMineur1.xMin && mouseX<popupGuildeMineur1.xMax&&mouseY>popupGuildeMineur1.yMin&&mouseY<popupGuildeMineur1.yMax&&gui==1))
{

canvas.style.cursor="pointer";

}
      else
      {

        canvas.style.cursor="default";
      }
});










                            //La fonction principale qui annime le canvas selon les conditions

function animate()
{

              //Dessine les éléments sur le canvas

            ctx.clearRect(0,0,canvas.width,canvas.height);
            ctx.drawImage(background,0,0,canvas.width,canvas.height);
            ctx.drawImage(mineDorImage,127,50,120,120);
            ctx.drawImage(donjon,500,-10,256,256);
            ctx.drawImage(niveau, -10, 435, 256, 75);
            ctx.drawImage(or, 550, 435, 256, 75);
            if (condition==1){
            ctx.drawImage(guilde, 110, 180, 256, 256);
            }

            //Dessine le sprite "personnage"
            drawSprite(playerSprite,player.width*player.frameX,player.height*player.frameY,player.width,player.height,player.x,player.y,player.width,player.height);

            if (gui==1){
              ctx.drawImage(popguilde, canvas.width / 2 - 150, canvas.height / 2 - 150, 300, 300);
            }

              //dessine le boutton du shop quand il a le droit

      if (shopping==1&&player.cadeauObtenu===false)
          {
            ctx.drawImage(shop,127,10,100,60);
          }

              //Affiche la popUp

      if (bienvenue==1)
          {
            ctx.drawImage(popup,canvas.width/2-150,canvas.height/2-150,300,300);
          }

            //movePlayer();
            handlePlayerFrame();
            requestAnimationFrame(animate);
            ctx.font = "30px Arial";
            ctx.fillStyle = "yellow";
            ctx.fillText(player.solde, 660, 482);
            ctx.fillText("Niveau :"+player.niveau, 80, 482);
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
