//Proprietes du canvas
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 500;
var gameover = 0;
var condition = 0;
var gui = 0;
var mineur1 = 0;
var mineur2 = 0;
var mineur3 = 0;
var i = 0;
var pop = 0;
var arme = 0;
var armure = 0;
var potion = 0;
var shopping = 0;
var timer;

const positionCanevasX = canvas.offsetLeft;
const positionCanevasY = canvas.offsetTop;




/////////////:-------------------Les éléments situées dans la carte ( SOURCE IMAGE )------------------/////////:


const playerSprite = new Image(); //Notre caractére "personnage"
playerSprite.src = "images/sprite.png";

const background = new Image(); //l'arriere plan du canvas
background.src = "images/background.jpg";

const shop = new Image(); //Button shop
shop.src = "images/buttonShop.png";

const mineDorImage = new Image(); //La mine d'or
mineDorImage.src = "images/Mine.png";

const donjon = new Image(); //Donjon
donjon.src = "images/Donjon.png";

const popup = new Image(); //PopUp
popup.src = "images/bienvenue.png";

const niveau = new Image();
niveau.src = "images/Character Niveau.png";

const or = new Image();
or.src = "images/banniere.png";

const guilde = new Image();
guilde.src = "images/guilde mineur.png";

const popguilde = new Image();
popguilde.src = "images/popguilde.png";

const travail = new Image();
travail.src = "images/travailler.png";

const stopt = new Image();
stopt.src = "images/stop.png";

const mineur1sprite = new Image();
mineur1sprite.src = "images/mineur1.png";

const mineur2sprite = new Image();
mineur2sprite.src = "images/mineur2.png";

const mineur3sprite = new Image();
mineur3sprite.src = "images/mineur3.png";

const buttonmagasin = new Image();
buttonmagasin.src = "images/magasin.png";

const magasinArme = new Image();
magasinArme.src = "images/shoparc.png";

const magasinArmure = new Image();
magasinArmure.src = "images/shoparmure.png";

const magasinPotion = new Image();
magasinPotion.src = "images/shoppotion.png";

const piocheMineur = new Image();
piocheMineur.src = "images/pioche.png";

/////////////:-------------------FIN Les éléments situées dans la carte ( SOURCE IMAGE )------------------/////////:


//////----------------------------Touche Clavier------------------------////////
const keys = [];
//////----------------------------Fin Touche Clavier------------------------////////


////////////////////////////Positionnement des éléments situées dans la carte pour//////////////////////////////////

const Guilde = { //Positionnement de la guilde
    xMin: -266,
    xMax: -69,
    yMin: -35,
    yMax: 165
}

const mineDor = { //Positionnement de la mine d'or
    xMin: -266,
    xMax: -166,
    yMin: -183,
    yMax: -93
}


const Donjon = { //Positionnement du donjon
    xMin: 114,
    xMax: 304,
    yMin: -225,
    yMax: -75
}


const shopButton = { //Positionnement du boutton qui permet d'obtenir le cadeau
    xMin: -266,
    xMax: -166,
    yMin: -240,
    yMax: -193
}


const popupButton = { //Positionnement du boutton OK du PopUp
    xMin: -22,
    xMax: 22,
    yMin: 47,
    yMax: 95
}

const popupGuildeCloseButton = { //Positionnement du boutton CLOSE du PopUp guilde
    xMin: 112,
    xMax: 145,
    yMin: -143,
    yMax: -116
}
const popupGuildeMineur1 = { //Positionnement du boutton CLOSE du PopUp guilde
    xMin: 87,
    xMax: 112,
    yMin: -55,
    yMax: -27
}
const popupGuildeMineur2 = { //Positionnement du boutton CLOSE du PopUp guilde
    xMin: 87,
    xMax: 112,
    yMin: 12,
    yMax: 50
}
const popupGuildeMineur3 = { //Positionnement du boutton CLOSE du PopUp guilde
    xMin: 87,
    xMax: 112,
    yMin: 71,
    yMax: 109
}
const travailler = { //Positionnement du boutton CLOSE du PopUp guilde
    xMin: -399,
    xMax: -274,
    yMin: -270,
    yMax: -220
}
const stop = { //Positionnement du boutton CLOSE du PopUp guilde
    xMin: -399,
    xMax: -274,
    yMin: -220,
    yMax: -180
}
const magasinButton = { //Positionnement du boutton CLOSE du PopUp guilde
    xMin: 301,
    xMax: 400,
    yMin: 134,
    yMax: 190
}
//////////////////////////// FinPositionnement des éléments situées dans la carte pour//////////////////////////////////




//// ------------------------------------------Fonction secondaires----------------------------////
function printMousePos(event) {
    coord.innerText =
        "clientX: " + (event.clientX - 768) +
        " - clientY: " + (event.clientY - 382);
}
document.addEventListener("click", printMousePos);

//La popup de bienvenue sera afficher apres 2s et 200ms

var bienvenue = 0; //Ce champs sera initialement égale a 0
setTimeout(function() {
    bienvenue = 1;
}, 2200); //Apres 2s et 200ms sera égale a 1 pour qu'il apparait dans la fonction animate()



//// ------------------------------------------Fin Fonction secondaires----------------------------////




////////////////////////////////////Les attributs des personnages////////////////////////////////////////


const player = {

    x: 400, //position horizontale
    y: 250, //position verticale
    width: 32, //la largeur du caractére
    height: 48, //la hauteur du caractere
    frameX: 0, //coordonnees horizontal du cadre
    frameY: 0, //coordonnees vertical du cadre
    speed: 6,
    moving: false,
    solde: 0,
    cadeauObtenu: false,
    niveau: 1

}
const m1 = {

    x: 400, //position horizontale
    y: 250, //position verticale
    width: 32, //la largeur du caractére
    height: 48, //la hauteur du caractere
    frameX: 0, //coordonnees horizontal du cadre
    frameY: 0, //coordonnees vertical du cadre
    speed: 4,
    moving: false,
    hideMineur:0,//cette variable fait disparaitre le mineur dans la mine
    mineurActif:0,
    job:0,
    dispo:0


}
const m2 = {

    x: 400, //position horizontale
    y: 250, //position verticale
    width: 32, //la largeur du caractére
    height: 48, //la hauteur du caractere
    frameX: 0, //coordonnees horizontal du cadre
    frameY: 0, //coordonnees vertical du cadre
    speed: 6,
    moving: false,
    hideMineur:0,//cette variable fait disparaitre le mineur dans la mine
    mineurActif:0,
    job:0,
}
const m3 = {

    x: 400, //position horizontale
    y: 250, //position verticale
    width: 32, //la largeur du caractére
    height: 48, //la hauteur du caractere
    frameX: 0, //coordonnees horizontal du cadre
    frameY: 0, //coordonnees vertical du cadre
    speed: 6,
    moving: false,
    hideMineur:0,//cette variable fait disparaitre le mineur dans la mine
    mineurActif:0,
    job:0,

}
////////////////////////////////////Les attributs des personnages////////////////////////////////////////


//La fonction qui va permettre de dessiner le caractére
function drawSprite(img, sX, sY, sW, sH, dX, dY, dW, dH) {
    ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);
}


//---------------------------------Music---------------------------------//
var bgm = document.getElementById("bgm");
bgm.play();


var sonClic = document.getElementById("sonclic");
var sonTest = true;
if (gameover == 0) {
    canvas.onclick = function() {
        if (sonTest) {
            sonClic.pause();
            sonClic.currenttime = 0;
            sonClic.play();
            sonTest = false;
        }
    }
};


//---------------------------------Fin Music---------------------------------//




//-------------------------------------------------L'evenement du click sur le canevas--------------------------//



canvas.addEventListener("click", function(e) {

    //La position du click sur le canevas

    var clickX = e.pageX - positionCanevasX;
    var clickY = e.pageY - positionCanevasY;

    //alert(clickX);
    //alert(clickY);
    //si l'utilisateur clique sur la mine d'or

    if (clickX > mineDor.xMin && clickX < mineDor.xMax && clickY > mineDor.yMin && clickY < mineDor.yMax && bienvenue == 0 && player.cadeauObtenu == false) {

        var inter = setInterval(function() {

            if (player.y > 88) {

                player.y -= player.speed;
                player.frameY = 3;
                player.moving = true;

            }
            if (player.x > 240) {

                player.x -= player.speed;
                player.frameY = 1;
                player.moving = true;

            } else if (player.x < 240 + player.speed && player.y < 88 + player.speed) {

                player.moving = false;
                clearInterval(inter);
                shopping = 1;
            }

        }, 30);

    }

    //si l'utilisateur clique sur le boutton de shop
    if (clickX > shopButton.xMin && clickX < shopButton.xMax && clickY > shopButton.yMin && clickY < shopButton.yMax && shopping == 1) {

        shop.src = "images/50.png";
        setTimeout(function() {
            shopping = 0;
            player.cadeauObtenu = true;
        }, 300);
        player.solde = 50;
        condition = 1;
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
    if (clickX > popupButton.xMin && clickX < popupButton.xMax && clickY > popupButton.yMin && clickY < popupButton.yMax) {

        bienvenue = 0;
    }




    //si l'utilisateur clique sur le donjon
    if (clickX > Donjon.xMin && clickX < Donjon.xMax && clickY > Donjon.yMin && clickY < Donjon.yMax && player.cadeauObtenu == true && gui == 0) {

        var inter1 = setInterval(function() {

            if (player.x < 490) {
                player.x += player.speed;
                player.frameY = 2;
                player.moving = true;

            }
            if (player.y > 130) {

                player.y -= player.speed;
                player.frameY = 3;
                player.moving = true;

            } else if (player.x > 490 - player.speed && player.y > 130 - player.speed) {

                player.moving = false;
                clearInterval(inter);
                //shopping=1;
            }
        }, 30);
        //alert("khdaama");

    }



    //si l'utilisateur decide de fermer la popup des mineurs


    if (clickX > popupGuildeCloseButton.xMin && clickX < popupGuildeCloseButton.xMax && clickY > popupGuildeCloseButton.yMin && clickY < popupGuildeCloseButton.yMax && gui == 1) {
        gui = 0;
    }
    if (clickX > magasinButton.xMin && clickX < magasinButton.xMax && clickY > magasinButton.yMin && clickY < magasinButton.yMax) {

        arme = 1;
    }



    //si l'utilisateur decide d'acheter le premier mineur
    if (clickX > popupGuildeMineur1.xMin && clickX < popupGuildeMineur1.xMax && clickY > popupGuildeMineur1.yMin && clickY < popupGuildeMineur1.yMax && gui == 1) {
        if (player.solde > 10 || player.solde == 10) {
            player.solde -= 10;
            gui = 0;
            m1.dispo += 1
        } else {
            alert("Vous n'avez pas assez d'or");
        }

    }
    //si l'utilisateur decide d'acheter le deuxieme mineur
    if (clickX > popupGuildeMineur2.xMin && clickX < popupGuildeMineur2.xMax && clickY > popupGuildeMineur2.yMin && clickY < popupGuildeMineur2.yMax && gui == 1) {
        if (player.solde > 20 || player.solde == 20) {
            player.solde -= 20;
            gui = 0;
            mineur2 += 1
        } else {
            alert("Vous n'avez pas assez d'or");
        }

    }
    //si l'utilisateur decide d'acheter le troisieme mineur
    if (clickX > popupGuildeMineur3.xMin && clickX < popupGuildeMineur3.xMax && clickY > popupGuildeMineur3.yMin && clickY < popupGuildeMineur3.yMax && gui == 1) {
        if (player.solde > 30 || player.solde == 30) {
            player.solde -= 30;
            gui = 0;
            mineur3 += 1
        } else {
            alert("Vous n'avez pas assez d'or");
        }

    }
    if (clickX > travailler.xMin && clickX < travailler.xMax && clickY > travailler.yMin && clickY < travailler.yMax && m1.dispo >= 1 && gui == 0) {

        var inter1 = setInterval(function() {

            if (m1.y > 88) {

                m1.y -= m1.speed;
                m1.frameY = 3;
                m1.moving = true;

            }
            if (m1.x > 240) {

                m1.x -= m1.speed;
                m1.frameY = 1;
                m1.moving = true;

            } else if (m1.x < 240 + m1.speed && m1.y < 88 + m1.speed) {

                m1.moving = false;
                clearInterval(inter);
                //shopping = 1;
                m1.hideMineur=1;
                m1.mineurActif=1;
                setTimeout(function() {
                  m1.mineurActif=0;
                }, 5000);
            }

        }, 30);
        //alert("khdaama");

    }
});

//-------------------------------------------------Fin L'evenement du click sur le canevas--------------------------//




//-------------------------------------  L'evenement mousemove sur le canevas-----------------------------//



canvas.addEventListener("mousemove", function(e) {
    //La position du mousemove sur le canevas
    var mouseX = e.pageX - positionCanevasX;
    var mouseY = e.pageY - positionCanevasY;


    //si l'utilisateur survol la mine d'or

    if (mouseX > mineDor.xMin && mouseX < mineDor.xMax && mouseY > mineDor.yMin && mouseY < mineDor.yMax) {


        if (shopping == 0 && player.cadeauObtenu == false) {
            if (bienvenue == 1) {
                canvas.style.cursor = "default";
            } else {
                canvas.style.cursor = "pointer";
            }

        } else {
            canvas.style.cursor = "no-drop";
        }

    }

    //si l'utilisateur survol le boutton du shop
    else if (mouseX > shopButton.xMin && mouseX < shopButton.xMax && mouseY > shopButton.yMin && mouseY < shopButton.yMax && shopping == 1) {

        canvas.style.cursor = "pointer";
    }


    //si l'utilisateur survol le boutton OK du popup
    else if (mouseX > popupButton.xMin && mouseX < popupButton.xMax && mouseY > popupButton.yMin && mouseY < popupButton.yMax && bienvenue == 1) {

        canvas.style.cursor = "pointer";

    }


    //si l'utilisateur srvol sur le donjon
    else if (mouseX > Donjon.xMin && mouseX < Donjon.xMax && mouseY > Donjon.yMin && mouseY < Donjon.yMax && player.cadeauObtenu == true && gui == 0) {

        canvas.style.cursor = "pointer";

    } else if (mouseX > Guilde.xMin && mouseX < Guilde.xMax && mouseY > Guilde.yMin && mouseY < Guilde.yMax && player.cadeauObtenu == true && condition == 1) {

        canvas.style.cursor = "pointer";



    } else if (mouseX > magasinButton.xMin && mouseX < magasinButton.xMax && mouseY > magasinButton.yMin && mouseY < magasinButton.yMax) {
        canvas.style.cursor = "pointer";
    }

    //si l'utilisateur survol sur la touche close du popup guilde
    else if ((mouseX > popupGuildeCloseButton.xMin && mouseX < popupGuildeCloseButton.xMax && mouseY > popupGuildeCloseButton.yMin && mouseY < popupGuildeCloseButton.yMax && gui == 1)) {

        canvas.style.cursor = "pointer";

    }
    //si l'utilisateur survol sur la touche mineur 1
    else if (mouseX > popupGuildeMineur1.xMin && mouseX < popupGuildeMineur1.xMax && mouseY > popupGuildeMineur1.yMin && mouseY < popupGuildeMineur1.yMax && gui == 1) {
        canvas.style.cursor = "pointer";
    }
    //si l'utilisateur survol sur la touche mineur 2
    else if (mouseX > popupGuildeMineur2.xMin && mouseX < popupGuildeMineur2.xMax && mouseY > popupGuildeMineur2.yMin && mouseY < popupGuildeMineur2.yMax && gui == 1) {
        canvas.style.cursor = "pointer";
        //si l'utilisateur survol sur la touche mineur 3
    } else if (mouseX > popupGuildeMineur3.xMin && mouseX < popupGuildeMineur3.xMax && mouseY > popupGuildeMineur3.yMin && mouseY < popupGuildeMineur3.yMax && gui == 1) {
        canvas.style.cursor = "pointer";
    } else if (mouseX > travailler.xMin && mouseX < travailler.xMax && mouseY > travailler.yMin && mouseY < travailler.yMax && ((m1.dispo >= 1 && m1.hideMineur==0)|| mineur2 >= 1 || mineur3 >= 1)) {
        canvas.style.cursor = "pointer"; //si l'utilisateur survol sur la touche travailler
    }

    else {

        canvas.style.cursor = "default";
    }
});



//------------------------------------- FIN L'evenement mousemove sur le canevas-----------------------------//



//////////////////////////// Dessin ////////////////////////////

//La fonction principale qui annime le canvas selon les conditions

function animate() {

    //Dessine les éléments sur le canvas

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
    ctx.drawImage(mineDorImage, 127, 50, 120, 120);
    ctx.drawImage(donjon, 500, -10, 256, 256);
    ctx.drawImage(niveau, -10, 435, 256, 75);
    ctx.drawImage(or, 550, 435, 256, 75);
    ctx.drawImage(buttonmagasin, 622, 350, 256, 125);
    if (condition == 1) {
        ctx.drawImage(guilde, 110, 180, 256, 256);
    }
    if (pop == 0) // hadi drtha bach nkhbi perso mli ykhrj chi pop walakin ghir 7ydha
    {
        drawSprite(playerSprite, player.width * player.frameX, player.height * player.frameY, player.width, player.height, player.x, player.y, player.width, player.height);
    }
    if (arme == 1) {
        ctx.drawImage(magasinArme, canvas.width / 2 - 175, canvas.height / 2 - 175, 350, 350);
    }
    if (potion == 1) {
        ctx.drawImage(magasinPotion, canvas.width / 2 - 150, canvas.height / 2 - 150, 300, 300);
        arme = 0;
        armure = 0;
    }
    if (armure == 1) {
        ctx.drawImage(magasinArmure, canvas.width / 2 - 150, canvas.height / 2 - 150, 300, 300);
        potion = 0;
        arme = 0;
    }

    //Dessine le sprite "personnage"


    if (gui == 1) {
        ctx.drawImage(popguilde, canvas.width / 2 - 150, canvas.height / 2 - 150, 300, 300);
    }
    if (m1.dispo >= 1 && gui == 0 &&m1.hideMineur==0) {
        ctx.drawImage(travail, -2, -4, 220, 75);
      //  ctx.drawImage(stopt, 0, 34, 215, 65);

          for (i = 0; i < m1.dispo; i++) {
              drawSprite(mineur1sprite, m1.width * m1.frameX, m1.height * m1.frameY, m1.width, m1.height, m1.x, m1.y, m1.width, m1.height)
          }


    }
    if (m1.hideMineur==1) {
      ctx.drawImage(piocheMineur,127,10,100,60);
    }
    if (mineur2 == 1 && gui == 0) {
      ctx.drawImage(travail, -2, -4, 220, 75);

        drawSprite(mineur2sprite, m2.width * m2.frameX, m2.height * m2.frameY, m2.width, m2.height, m2.x, m2.y, m2.width, m2.height)
        mineur2dispo = 1;

    }
    if (mineur3 == 1 && gui == 0) {
        drawSprite(mineur3sprite, m1.width * m1.frameX, m1.height * m1.frameY, m1.width, m1.height, m1.x, m1.y, m1.width, m1.height)
        mineur2dispo = 1;
        ctx.drawImage(travail, -2, -4, 220, 75);
        ctx.drawImage(stopt, 0, 34, 215, 65);
    }

    //dessine le boutton du shop quand il a le droit

    if (shopping == 1 && player.cadeauObtenu === false) {
        ctx.drawImage(shop, 127, 10, 100, 60);
    }

    //Affiche la popUp

    if (bienvenue == 1) {
        ctx.drawImage(popup, canvas.width / 2 - 150, canvas.height / 2 - 150, 300, 300);
    }


    //movePlayer();
    handlePlayerFrame();
    requestAnimationFrame(animate);
    ctx.font = "30px Arial";
    ctx.fillStyle = "yellow";
    ctx.fillText(player.solde, 660, 482);
    ctx.fillText("Niveau :" + player.niveau, 80, 482);



}
animate();



function miner(){
    clearTimeout(timer);
    if (m1.mineurActif==1){
    m1.job++;
    player.solde += 1;
}

    if(m1.job < 30){ timer = setTimeout(miner,2000); }
}
miner();
//////////////////////////// Fin Dessin ////////////////////////////



////------------------------Clavier et move player ------------------------//

window.addEventListener("keydown", function(e) {
    keys[e.keyCode] = true; //on ajoute la touche
    player.moving = true;
});
window.addEventListener("keyup", function(e) {
    delete keys[e.keyCode];
    player.moving = false;
});

function movePlayer() {

    if (!(player.x > 127 && player.x < 90 && player.y < 120)) {
        if (keys[38] && player.y > 80) {
            player.y -= player.speed;
            player.frameY = 3;
        }
        if (keys[37] && player.x > 0) {
            player.x -= player.speed;
            player.frameY = 1;
        }
        if (keys[40] && player.y < canvas.height - 100) {
            player.y += player.speed;
            player.frameY = 0;
        }
        if (keys[39] && player.x < canvas.width - player.width) {
            player.x += player.speed;
            player.frameY = 2;
        }
    } else {
        player.y += player.speed;
    }

}

function handlePlayerFrame() {
    if (player.frameX < 3 && player.moving) {
        player.frameX++;
    } else {
        player.frameX = 0;
    }
}


////------------------------Clavier et move player ------------------------//
