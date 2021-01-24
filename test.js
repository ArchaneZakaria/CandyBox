//Proprietes du canvas
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
//const canvas2 = document.getElementById("canvas2");
//const ctx2 = canvas2.getContext("2d");
canvas.width = 800;
canvas.height = 500;
//canvas2.width = 800;
//canvas2.height = 500;
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
var arcMagasin = 1;
var armureMagasin = 0;
var potionMagasin = 0;
var arrowShot = 0;
var donjonPopup = 0;
var etage1 = 0;
var etage0 = 1;
var music1 = document.getElementById("music1");
var bgm = document.getElementById("bgm");
var angle;
var takePosition = 1;
var playerCurrentX;
var playerCurrentY;
var monstreCurrentX;
var monstreCurrentY;

/// Angle de rotation de l'arc ///


const menu = document.getElementById("menu");
const ctxMenu = menu.getContext("2d");
menu.width = 1000;
menu.height = 100;

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

const fleche = new Image();
fleche.src = "images/arrow.png";

const monstreSprite = new Image();
monstreSprite.src = "images/monstre1.png";
const monstre2Sprite = new Image();
monstre2Sprite.src = "images/monstre2.png";

const popEtagechoix = new Image();
popEtagechoix.src = "images/Etage.png";

const donjon1etage = new Image();
donjon1etage.src = "images/etage1.jpg";

const menuImage = new Image();
menuImage.src = "images/ressss.png";

const gunshot = new Image();
gunshot.src = "images/gunshot.png"
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


const cadeauButton = { //Positionnement du boutton qui permet d'obtenir le cadeau
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
    yMin: 190,
    yMax: 246
}

const closeShopButton = { //Positionnement du boutton CLOSE du magasin
    xMin: 114,
    xMax: 138,
    yMin: -173,
    yMax: -150
}


const arcShopButton = { //Positionnement du boutton arc du magasin
    xMin: -109,
    xMax: -68,
    yMin: -143,
    yMax: -85
}


const armureShopButton = { //Positionnement du boutton armure du magasin
    xMin: -24,
    xMax: 18,
    yMin: -143,
    yMax: -85
}


const potionShopButton = { //Positionnement du boutton potion du magasin
    xMin: 66,
    xMax: 106,
    yMin: -143,
    yMax: -85
}

const firstShopButton = { //Positionnement du premier button du magasin
    xMin: 64,
    xMax: 104,
    yMin: -44,
    yMax: -27
}

const secondShopButton = { //Positionnement du deuxieme button du magasin
    xMin: 64,
    xMax: 104,
    yMin: 29,
    yMax: 51
}

const thirdShopButton = { //Positionnement du troisiéme button du magasin
    xMin: 64,
    xMax: 104,
    yMin: 107,
    yMax: 126
}
const popEtage1 = { //Positionnement du troisiéme button du magasin
    xMin: -64,
    xMax: 64,
    yMin: -108,
    yMax: -33
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
}, 20000); //Apres 2s et 200ms sera égale a 1 pour qu'il apparait dans la fonction animate()



//// ------------------------------------------Fin Fonction secondaires----------------------------////




////////////////////////////////////Les attributs des personnages////////////////////////////////////////


const player = {

    x: 400, //position horizontale
    y: 250, //position verticale
    width: 32, //la largeur du caractére
    height: 48, //la hauteur du caractere
    frameX: 3, //coordonnees horizontal du cadre
    frameY: 3, //coordonnees vertical du cadre
    speed: 6,
    moving: false,
    solde: 0,
    cadeauObtenu: false,
    niveau: 1,
    attack: 0,
    defense: 0,
    pointVie: 100


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
    hideMineur: 0, //cette variable fait disparaitre le mineur dans la mine
    mineurActif: 0,
    job: 0,
    dispo: 0


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
    hideMineur: 0, //cette variable fait disparaitre le mineur dans la mine
    mineurActif: 0,
    job: 0,
    dispo: 0
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
    hideMineur: 0, //cette variable fait disparaitre le mineur dans la mine
    mineurActif: 0,
    job: 0,
    dispo: 0

}
const monstre = {

    x: 676, //position horizontale
    y: 364, //position verticale
    width: 32, //la largeur du caractére
    height: 48, //la hauteur du caractere
    frameX: 3, //coordonnees horizontal du cadre
    frameY: 3, //coordonnees vertical du cadre
    speed: 2,
    moving: false,
    niveau: 1,
    attack: 0,
    defense: 0,
    pointVie: 100
}
const monstre2 = {

    x: 676, //position horizontale
    y: 50, //position verticale
    width: 32, //la largeur du caractére
    height: 48, //la hauteur du caractere
    frameX: 0, //coordonnees horizontal du cadre
    frameY: 0, //coordonnees vertical du cadre
    speed: 3,
    moving: false,
    niveau: 1,
    attack: 0,
    defense: 0,
    pointVie: 100
}
const Arrow = {

    x: 476, //position horizontale
    y: 364, //position verticale
    width: 32, //la largeur du caractére
    height: 48, //la hauteur du caractere
    frameX: 0, //coordonnees horizontal du cadre
    frameY: 0, //coordonnees vertical du cadre
    speed: 6,
    moving: false,

}
const gun = {

    x: 476, //position horizontale
    y: 364, //position verticale
    width: 32, //la largeur du caractére
    height: 48, //la hauteur du caractere
    frameX: 0, //coordonnees horizontal du cadre
    frameY: 0, //coordonnees vertical du cadre
    speed: 6,
    moving: false,

}
////////////////////////////////////Les attributs des personnages////////////////////////////////////////


//La fonction qui va permettre de dessiner le caractére
function drawSprite(img, sX, sY, sW, sH, dX, dY, dW, dH) {
    ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);
}


//---------------------------------Music---------------------------------//
if (etage1 == 0) {
    bgm.play();
}
if (etage1 == 1 && etage0 == 0) {
    bgm.currenttime = 0;
    bgm = music1;
}

var sonClic = document.getElementById("sonclic");
var sonTest = true;
if (gameover == 0 && etage0 == 1) {
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
    if (clickX > monstre.x - 400 && clickX < monstre.x - 368 && clickY > monstre.y - 250 && clickY < monstre.y - 202 && monstre.pointVie>0) {
        arrowShot = 1;
        playerCurrentX=player.x;
        playerCurrentY=player.y
        var inter = setInterval(function() {
            if (Arrow.y > monstre.y) {
                Arrow.y -= Arrow.speed;
                Arrow.moving = true;

            }
            if (Arrow.x < monstre.x) {
                Arrow.x += Arrow.speed;
                playerCurrentX+=Arrow.speed;
                Arrow.moving = true;
            } else {
                Arrow.x = monstre.x - 30;
                arrowShot = 0;
                Arrow.moving == false;
                Arrow.speed = 6;
                clearInterval(inter);
            }



        }, 30);
    }
    if (clickX > monstre2.x - 400 && clickX < monstre2.x - 368 && clickY > monstre2.y - 250 && clickY < monstre2.y - 202 && monstre2.pointVie>0) {
        arrowShot = 1;
        playerCurrentX=player.x;
        playerCurrentY=player.y
        var inter = setInterval(function() {
            if (Arrow.y > monstre2.y) {
                Arrow.y -= Arrow.speed;
                Arrow.moving = true;

            }
            if (Arrow.x < monstre2.x) {
                Arrow.x += Arrow.speed;
                playerCurrentX+=Arrow.speed;
                Arrow.moving = true;
            } else {
                Arrow.x = monstre2.x - 30;
                arrowShot = 0;
                Arrow.moving == false;
                Arrow.speed = 6;
                clearInterval(inter);
            }


        }, 30);
    }


    if (clickX > mineDor.xMin && clickX < mineDor.xMax && clickY > mineDor.yMin && clickY < mineDor.yMax && bienvenue == 0 && player.cadeauObtenu == false && etage0 == 1) {

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
    if (clickX > cadeauButton.xMin && clickX < cadeauButton.xMax && clickY > cadeauButton.yMin && clickY < cadeauButton.yMax && shopping == 1 && etage0 == 1) {

        shop.src = "images/50.png";
        setTimeout(function() {
            shopping = 0;
            player.cadeauObtenu = true;
        }, 300);
        player.solde = 50;
        condition = 1;
    }
    //SI l'utilisateur clique sur la guilde

    if (clickX > Guilde.xMin && clickX < Guilde.xMax && clickY > Guilde.yMin && clickY < Guilde.yMax && etage0 == 1) {
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
    if (clickX > popupButton.xMin && clickX < popupButton.xMax && clickY > popupButton.yMin && clickY < popupButton.yMax && etage0 == 1) {

        bienvenue = 0;
    }




    //si l'utilisateur clique sur le donjon
    if (clickX > Donjon.xMin && clickX < Donjon.xMax && clickY > Donjon.yMin && clickY < Donjon.yMax && etage0 == 1) {
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
                donjonPopup = 1;
                clearInterval(inter1);

            }
        }, 30);

    }



    //si l'utilisateur decide de fermer la popup des mineurs


    if (clickX > popupGuildeCloseButton.xMin && clickX < popupGuildeCloseButton.xMax && clickY > popupGuildeCloseButton.yMin && clickY < popupGuildeCloseButton.yMax && gui == 1 && etage0 == 1) {
        gui = 0;
    }
    if (clickX > magasinButton.xMin && clickX < magasinButton.xMax && clickY > magasinButton.yMin && clickY < magasinButton.yMax && etage0 == 1) {

        arme = 1;
    }



    //si l'utilisateur decide d'acheter le premier mineur
    if (clickX > popupGuildeMineur1.xMin && clickX < popupGuildeMineur1.xMax && clickY > popupGuildeMineur1.yMin && clickY < popupGuildeMineur1.yMax && gui == 1 && etage0 == 1) {
        if (player.solde > 10 || player.solde == 10) {
            player.solde -= 10;
            gui = 0;
            m1.dispo += 1
        } else {
            alert("Vous n'avez pas assez d'or");
        }

    }
    //si l'utilisateur decide d'acheter le deuxieme mineur
    if (clickX > popupGuildeMineur2.xMin && clickX < popupGuildeMineur2.xMax && clickY > popupGuildeMineur2.yMin && clickY < popupGuildeMineur2.yMax && gui == 1 && etage0 == 1) {
        if (player.solde > 20 || player.solde == 20) {
            player.solde -= 20;
            gui = 0;
            m2.dispo += 1
        } else {
            alert("Vous n'avez pas assez d'or");
        }

    }
    //si l'utilisateur decide d'acheter le troisieme mineur
    if (clickX > popupGuildeMineur3.xMin && clickX < popupGuildeMineur3.xMax && clickY > popupGuildeMineur3.yMin && clickY < popupGuildeMineur3.yMax && gui == 1 && etage0 == 1) {
        if (player.solde > 30 || player.solde == 30) {
            player.solde -= 30;
            gui = 0;
            m3.dispo += 1
        } else {
            alert("Vous n'avez pas assez d'or");
        }

    } else if (clickX > travailler.xMin && clickX < travailler.xMax && clickY > travailler.yMin && clickY < travailler.yMax && m2.dispo >= 1 && gui == 0 && etage0 == 1) {

        var inter2 = setInterval(function() {

            if (m2.y > 88) {

                m2.y -= m2.speed;
                m2.frameY = 3;
                m2.moving = true;

            }
            if (m2.x > 240) {

                m2.x -= m2.speed;
                m2.frameY = 1;
                m2.moving = true;

            } else if (m2.x < 240 + m2.speed && m2.y < 88 + m2.speed) {

                m2.moving = false;
                clearInterval(inter2);
                m2.hideMineur = 1;
                m2.mineurActif = 1;
                setTimeout(function() {
                    m2.mineurActif = 0;
                }, 5000);
            }

        }, 30);
    } else if (clickX > travailler.xMin && clickX < travailler.xMax && clickY > travailler.yMin && clickY < travailler.yMax && m3.dispo >= 1 && gui == 0 && etage0 == 1) {

        var inter3 = setInterval(function() {

            if (m3.y > 88) {

                m3.y -= m3.speed;
                m3.frameY = 3;
                m3.moving = true;

            }
            if (m3.x > 240) {

                m3.x -= m3.speed;
                m3.frameY = 1;
                m3.moving = true;

            } else if (m3.x < 240 + m3.speed && m3.y < 88 + m3.speed) {

                m3.moving = false;
                clearInterval(inter3);
                m3.hideMineur = 1;
                m3.mineurActif = 1;
                setTimeout(function() {
                    m3.mineurActif = 0;
                }, 5000);
            }
        }, 30);
    } else if (clickX > travailler.xMin && clickX < travailler.xMax && clickY > travailler.yMin && clickY < travailler.yMax && m1.dispo >= 1 && gui == 0 && etage0 == 1) {

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
                m1.hideMineur = 1;
                m1.mineurActif = 1;
                setTimeout(function() {
                    m1.mineurActif = 0;
                }, 5000);
            }

        }, 30);
    }




    //si la popUp du magasin est afficher
    if (arme == 1) {


        //si l'utilisateur decide de fermer le magasin
        if (clickX > closeShopButton.xMin && clickX < closeShopButton.xMax && clickY > closeShopButton.yMin && clickY < closeShopButton.yMax && arme == 1) {
            arme = 0;
        }

        //si l'utilisateur decide de naviguer vers le magasin d'arc
        if (clickX > arcShopButton.xMin && clickX < arcShopButton.xMax && clickY > arcShopButton.yMin && clickY < arcShopButton.yMax) {
            magasinArme.src = "images/shoparc.png";
            arcMagasin = 1;
            armureMagasin = 0;
            potionMagasin = 0;
        }

        //si l'utilisateur decide de naviguer vers le magasin d'armure
        if (clickX > armureShopButton.xMin && clickX < armureShopButton.xMax && clickY > armureShopButton.yMin && clickY < armureShopButton.yMax) {
            magasinArme.src = "images/shoparmure.png";
            arcMagasin = 0;
            armureMagasin = 1;
            potionMagasin = 0;
        }


        //si l'utilisateur decide de naviguer vers le magasin de potion
        if (clickX > potionShopButton.xMin && clickX < potionShopButton.xMax && clickY > potionShopButton.yMin && clickY < potionShopButton.yMax) {
            magasinArme.src = "images/shoppotion.png";
            arcMagasin = 0;
            armureMagasin = 0;
            potionMagasin = 1;
        }

        //si l'utilisateur est dans le magasin d'arc
        if (arcMagasin == 1) {
            if (clickX > firstShopButton.xMin && clickX < firstShopButton.xMax && clickY > firstShopButton.yMin && clickY < firstShopButton.yMax && (player.solde > 10 || player.solde == 10)) {
                player.solde -= 10;
                arme = 0;
                player.attack += 5;
            }
            if (clickX > secondShopButton.xMin && clickX < secondShopButton.xMax && clickY > secondShopButton.yMin && clickY < secondShopButton.yMax && (player.solde > 30 || player.solde == 30)) {
                player.solde -= 30;
                arme = 0;
                player.attack += 10;
            }
            if (clickX > thirdShopButton.xMin && clickX < thirdShopButton.xMax && clickY > thirdShopButton.yMin && clickY < thirdShopButton.yMax && (player.solde > 50 || player.solde == 50)) {
                player.solde -= 50;
                arme = 0;
                player.attack += 15;
            }
        }

        //si l'utilisateur est dans le magasin d'armure
        if (armureMagasin == 1) {
            if (clickX > firstShopButton.xMin && clickX < firstShopButton.xMax && clickY > firstShopButton.yMin && clickY < firstShopButton.yMax && (player.solde > 10 || player.solde == 10)) {
                player.solde -= 10;
                arme = 0;
                player.defense += 5;
            }
            if (clickX > secondShopButton.xMin && clickX < secondShopButton.xMax && clickY > secondShopButton.yMin && clickY < secondShopButton.yMax && (player.solde > 30 || player.solde == 30)) {
                player.solde -= 30;
                arme = 0;
                player.defense += 10;
            }
            if (clickX > thirdShopButton.xMin && clickX < thirdShopButton.xMax && clickY > thirdShopButton.yMin && clickY < thirdShopButton.yMax && (player.solde > 50 || player.solde == 50)) {
                player.solde -= 50;
                arme = 0;
                player.defense += 15;
            }
        }

        //si l'utilisateur est dans le magasin de potion
        if (potionMagasin == 1) {
            if (clickX > firstShopButton.xMin && clickX < firstShopButton.xMax && clickY > firstShopButton.yMin && clickY < firstShopButton.yMax && (player.solde > 5 || player.solde == 5)) {
                player.solde -= 5;
                arme = 0;
                player.pointVie += 25;
            }
            if (clickX > secondShopButton.xMin && clickX < secondShopButton.xMax && clickY > secondShopButton.yMin && clickY < secondShopButton.yMax && (player.solde > 15 || player.solde == 15)) {
                player.solde -= 15;
                arme = 0;
                player.pointVie += 50;
            }
            if (clickX > thirdShopButton.xMin && clickX < thirdShopButton.xMax && clickY > thirdShopButton.yMin && clickY < thirdShopButton.yMax && (player.solde > 20 || player.solde == 20)) {
                player.solde -= 20;
                arme = 0;
                player.pointVie += 75;
            }

        }


    }
    if (clickX > popEtage1.xMin && clickX < popEtage1.xMax && clickY > popEtage1.yMin && clickY < popEtage1.yMax) {
        music1.play();
        bgm.pause();


        etage1 = 1;
        etage0 = 0;
    }




});

//-------------------------------------------------Fin L'evenement du click sur le canevas--------------------------//




//-------------------------------------  L'evenement mousemove sur le canevas-----------------------------//



canvas.addEventListener("mousemove", function(e) {
    //La position du mousemove sur le canevas
    var mouseX = e.pageX - positionCanevasX;
    var mouseY = e.pageY - positionCanevasY;


    //si l'utilisateur survol la mine d'or

    if (mouseX > mineDor.xMin && mouseX < mineDor.xMax && mouseY > mineDor.yMin && mouseY < mineDor.yMax && etage0 == 1) {


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
    else if (mouseX > cadeauButton.xMin && mouseX < cadeauButton.xMax && mouseY > cadeauButton.yMin && mouseY < cadeauButton.yMax && shopping == 1) {

        canvas.style.cursor = "pointer";
    } else if (mouseX > monstre.x - 400 && mouseX < monstre.x - 368 && mouseY > monstre.y - 250 && mouseY < monstre.y && monstre.pointVie > 0) {

        canvas.style.cursor = "pointer";
    }


    //si l'utilisateur survol le boutton OK du popup
    else if (mouseX > popupButton.xMin && mouseX < popupButton.xMax && mouseY > popupButton.yMin && mouseY < popupButton.yMax && bienvenue == 1) {

        canvas.style.cursor = "pointer";

    }


    //si l'utilisateur srvol sur le donjon
    else if (mouseX > Donjon.xMin && mouseX < Donjon.xMax && mouseY > Donjon.yMin && mouseY < Donjon.yMax && player.cadeauObtenu == true && gui == 0 && arme == 0) {

        canvas.style.cursor = "pointer";

    } else if (mouseX > Guilde.xMin && mouseX < Guilde.xMax && mouseY > Guilde.yMin && mouseY < Guilde.yMax && player.cadeauObtenu == true && condition == 1) {

        canvas.style.cursor = "pointer";



    } else if (mouseX > magasinButton.xMin && mouseX < magasinButton.xMax && mouseY > magasinButton.yMin && mouseY < magasinButton.yMax && etage0 == 1) {
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
    } else if (mouseX > travailler.xMin && mouseX < travailler.xMax && mouseY > travailler.yMin && mouseY < travailler.yMax && ((m1.dispo >= 1 && m1.hideMineur == 0) || (m2.dispo >= 1 && m2.hideMineur == 0) || (m3.dispo >= 1 && m3.hideMineur == 0))) {
        canvas.style.cursor = "pointer"; //si l'utilisateur survol sur la touche travailler
    }

    //Si l'utilisateur survol le boutton fermer du magasin
    else if (mouseX > closeShopButton.xMin && mouseX < closeShopButton.xMax && mouseY > closeShopButton.yMin && mouseY < closeShopButton.yMax && arme == 1) {
        canvas.style.cursor = "pointer";
    }

    //Si l'utilisateur survol le boutton du magasin d'arc
    else if (mouseX > arcShopButton.xMin && mouseX < arcShopButton.xMax && mouseY > arcShopButton.yMin && mouseY < arcShopButton.yMax && arme == 1) {
        canvas.style.cursor = "pointer";
    }

    //Si l'utilisateur survol le boutton du magasin d'armure
    else if (mouseX > armureShopButton.xMin && mouseX < armureShopButton.xMax && mouseY > armureShopButton.yMin && mouseY < armureShopButton.yMax && arme == 1) {
        canvas.style.cursor = "pointer";
    }
    //Si l'utilisateur survol le boutton du magasin de potions
    else if (mouseX > potionShopButton.xMin && mouseX < potionShopButton.xMax && mouseY > potionShopButton.yMin && mouseY < potionShopButton.yMax && arme == 1) {
        canvas.style.cursor = "pointer";
    }

    //Si l'utilisateur survol le boutton de la premiere option du shop
    else if (mouseX > firstShopButton.xMin && mouseX < firstShopButton.xMax && mouseY > firstShopButton.yMin && mouseY < firstShopButton.yMax && arme == 1) {
        canvas.style.cursor = "pointer";
    }


    //Si l'utilisateur survol le boutton de la deuxiéme option du shop
    else if (mouseX > secondShopButton.xMin && mouseX < secondShopButton.xMax && mouseY > secondShopButton.yMin && mouseY < secondShopButton.yMax && arme == 1) {
        canvas.style.cursor = "pointer";
    }

    //Si l'utilisateur survol le boutton de la troisiéme option du shop
    else if (mouseX > thirdShopButton.xMin && mouseX < thirdShopButton.xMax && mouseY > thirdShopButton.yMin && mouseY < thirdShopButton.yMax && arme == 1) {
        canvas.style.cursor = "pointer";
    } else {

        canvas.style.cursor = "default";
    }
});



//------------------------------------- FIN L'evenement mousemove sur le canevas-----------------------------//



//////////////////////////// Dessin ////////////////////////////

//La fonction principale qui annime le canvas selon les conditions

function animate() {
  ctxMenu.clearRect(0, 0, menu.width, menu.height);
   ctxMenu.drawImage(menuImage,0,50, menu.width, 60);
    //Dessine les éléments sur le canvas

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
    if (etage1 == 1) {
        ctx.drawImage(donjon1etage, 0, 0, canvas.width, canvas.height);
        drawSprite(gunshot, monstre2.width * monstre2.frameX, monstre2.height * monstre2.frameY, monstre2.width, monstre2.height, gun.x, gun.y, monstre2.width, monstre2.height);



    }
    if (etage0 == 1) {
        ctx.drawImage(mineDorImage, 127, 50, 120, 120);
        ctx.drawImage(donjon, 500, -10, 256, 256);
    }
    if (etage0 == 1) {
        ctx.drawImage(buttonmagasin, 622, 400, 256, 140);
    }
    if (condition == 1 && etage0 == 1) {
        ctx.drawImage(guilde, 110, 180, 256, 256);
    }
    if (pop == 0) // hadi drtha bach nkhbi perso mli ykhrj chi pop walakin ghir 7ydha
    {
        drawSprite(playerSprite, player.width * player.frameX, player.height * player.frameY, player.width, player.height, player.x, player.y, player.width, player.height);
    }
    if (arme == 1 && etage0 == 1) {
        ctx.drawImage(magasinArme, canvas.width / 2 - 175, canvas.height / 2 - 175, 350, 350);
    }
    if (potion == 1 && etage0 == 1) {
        ctx.drawImage(magasinPotion, canvas.width / 2 - 150, canvas.height / 2 - 150, 300, 300);
        arme = 0;
        armure = 0;
    }
    if (armure == 1 && etage0 == 1) {
        ctx.drawImage(magasinArmure, canvas.width / 2 - 150, canvas.height / 2 - 150, 300, 300);
        potion = 0;
        arme = 0;
    }


    //Dessine le sprite "personnage"


    if (gui == 1 && etage0 == 1) {
        ctx.drawImage(popguilde, canvas.width / 2 - 150, canvas.height / 2 - 150, 300, 300);
    }
    if (m1.dispo >= 1 && gui == 0 && m1.hideMineur == 0 && etage0 == 1) {
        ctx.drawImage(travail, -2, -4, 220, 75);
        for (i = 0; i < m1.dispo; i++) {
            drawSprite(mineur1sprite, m1.width * m1.frameX, m1.height * m1.frameY, m1.width, m1.height, m1.x, m1.y, m1.width, m1.height)
        }
    }
    if (m2.dispo >= 1 && gui == 0 && m2.hideMineur == 0 && etage0 == 1) {
        ctx.drawImage(travail, -2, -4, 220, 75);
        for (i = 0; i < m2.dispo; i++) {
            drawSprite(mineur2sprite, m2.width * m2.frameX, m2.height * m2.frameY, m2.width, m2.height, m2.x, m2.y, m2.width, m2.height)
        }
    }
    if (m3.dispo >= 1 && gui == 0 && m3.hideMineur == 0 && etage0 == 1) {
        ctx.drawImage(travail, -2, -4, 220, 75);
        for (i = 0; i < m3.dispo; i++) {
            drawSprite(mineur3sprite, m3.width * m3.frameX, m3.height * m3.frameY, m3.width, m3.height, m3.x, m3.y, m3.width, m3.height)
        }
    }


    if ((m1.hideMineur == 1 || m2.hideMineur == 1 || m3.hideMineur == 1) && etage0 == 1) {
        ctx.drawImage(piocheMineur, 127, 10, 100, 60);
    }


    //dessine le boutton du shop quand il a le droit

    if (shopping == 1 && player.cadeauObtenu === false && etage0 == 1) {
        ctx.drawImage(shop, 127, 10, 100, 60);
    }

    //Affiche la popUp

    if (bienvenue == 1 && etage0 == 1) {
        ctx.drawImage(popup, canvas.width / 2 - 150, canvas.height / 2 - 150, 300, 300);
    }
    if (donjonPopup == 1 && etage1 == 0) {
        ctx.drawImage(popEtagechoix, canvas.width / 2 - 150, canvas.height / 2 - 150, 300, 300);
        etage0 == 0;
    }
    if (etage1 == 1) {
        donjonPopup = 0;
        player.speed = 4;
    }
    if (etage1 && monstre.pointVie > 0) {
        drawSprite(monstreSprite, monstre.width * monstre.frameX, monstre.height * monstre.frameY, monstre.width, monstre.height, monstre.x, monstre.y, monstre.width, monstre.height);
    }
    if (etage1 && monstre2.pointVie > 0) {
    drawSprite(monstre2Sprite, monstre2.width * monstre2.frameX, monstre2.height * monstre2.frameY, monstre2.width, monstre2.height, monstre2.x, monstre2.y, monstre2.width, monstre2.height);
    }


    if (arrowShot) {
        drawSprite(fleche, Arrow.width * Arrow.frameX, Arrow.height * Arrow.frameY, Arrow.width, Arrow.height, playerCurrentX,playerCurrentY, Arrow.width, Arrow.height+12);
        if (monstre.pointVie > 0) {
            ctx.fillText("-1 pdv", monstre.x, monstre.y + 50);
            monstre.pointVie -= 1;
            Arrow.speed = 6;
        }
        if (monstre.pointVie == 0) {
            ctx.fillText("Mort", monstre.x, monstre.y + 50);

        }

    }




    if (etage1) {
        movePlayer();
        //monstreMouvement();
    }
    handlePlayerFrame();
    handleM1Frame();
    handleM2Frame();
    handleM3Frame();
    handleArrowFrame();
    handleMonsterFrame();
    if (etage1){
    monstreMouvement();
    }
    requestAnimationFrame(animate);
    /*ctx.font = "30px Arial";
    ctx.fillStyle = "yellow";
    ctx.fillText(player.solde, 660, 482);
    ctx.fillText("Niveau :" + player.niveau, 60, 482);
    /*if (etage1 && monstre.pointVie > 0) {
        ctx.fillText("Vie: :" + monstre.pointVie, monstre.x, monstre.y);
    }*/
    /*ctx.fillText("Niveau :" + player.niveau, 60, 482);*/
        ctxMenu.font = "20px Cursive";
        ctxMenu.fillText(player.niveau, 215, 87);
        ctxMenu.fillText(player.solde, 348, 87);
        ctxMenu.fillText(player.pointVie, 472, 87);
        ctxMenu.fillText(player.defense, 636, 87);
        ctxMenu.fillText(player.attack, 786, 87);

    //angle = Math.atan((monstre.y - player.y) / monstre.x) * (180 / Math.PI)
    if (etage1){
    Attaquer();
    }
    if (monstre.x <-140)
    {
        monstre.x = 676;
        monstre.pointVie = 100;
    }
    if (monstre2.x <-140)
    {
        monstre2.x = 676;
        monstre2.frameX+=1;
        monstre2.pointVie = 100;
    }
}
animate();

function miner() {
    clearTimeout(timer);
    if (m1.mineurActif == 1) {
        m1.job++;
        player.solde += 1;
    }
    if (m2.mineurActif == 1) {
        m2.job++;
        player.solde += 2;
    }
    if (m3.mineurActif == 1) {
        m3.job++;
        player.solde += 3;
    }

    if (m1.job < 30) {
        timer = setTimeout(miner, 2000);
    } else if (m2.job < 30) {
        timer = setTimeout(miner, 1000);
    } else if (m3.job < 30) {
        timer = setTimeout(miner, 500);
    }

}
function Attaquer() {
    clearTimeout(timer);
    monstre.moving=true;
    monstre.x-=monstre2.speed;
    monstre2.moving=true;
    monstre2.x-=monstre2.speed;
    if (monstre.x==380){
        monstre.speed=0;
    }
    if (monstre.pointVie==0) {
        timer = setTimeout(Attaquer, 2000);

}
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

function handleM1Frame() {
    if (m1.frameX < 3 && m1.moving) {
        m1.frameX++;
    } else {
        m1.frameX = 0;
    }
}

function handleM2Frame() {
    if (m2.frameX < 3 && m2.moving) {
        m2.frameX++;
    } else {
        m2.frameX = 0;
    }
}

function handleM3Frame() {
    if (m3.frameX < 3 && m3.moving) {
        m3.frameX++;
    } else {
        m3.frameX = 0;
    }
}

function handleArrowFrame() {
    if (Arrow.frameY < 3 && Arrow.moving) {
        Arrow.frameY++;
    } else {
        Arrow.frameY = 0;
    }
}

function handleMonsterFrame() {
    if (monstre.frameX < 3 && monstre.moving) {
        monstre.frameX++;
    } else {
        monstre.frameX = 0;
    }if (monstre2.frameX < 3 && monstre2.moving) {
        monstre2.frameX++;
    } else {
        monstre2.frameX = 0;
    }
}

function monstreMouvement() {
    gun.y-= gun.speed ;
};





////------------------------Clavier et move player ------------------------//
