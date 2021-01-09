//Personnalisation du canvas

const canvas=document.getElementById("canv");
canvas.width=innerWidth;
canvas.height=innerHeight;
const context=canvas.getContext("2d");
//L'emplacement au milieu de l'ecran

const middleWidth=innerWidth/2;
const middleHeight=innerHeight/2;

class personnage {

  constructor() {
    this.x=middleWidth;
    this.y=middleHeight;
  }

  draw(){
    let img = document.createElement("img");
    img.src = "rsz_2pnghut.png";
    img.addEventListener("load", () => {
        context.drawImage(img, this.x, this.y);
  });
  }
  move(direction){
    context.clearRect(0, 0, canvas.width, canvas.height);
    let img = document.createElement("img");
    img.src = "rsz_2pnghut.png";

    switch (direction) {
        case 'top':
            this.y=this.y-4;
        break;

        case 'down':
              this.y=this.y+4;
        break;

        case 'right':
              this.x=this.x+4;
        break;

        case 'left':
              this.x=this.x-4;
        break;
      default:

    }

    img.addEventListener("load", () => {
        context.drawImage(img, this.x, this.y);
  });
  }


}


const pers=new personnage();
document.querySelector("body").addEventListener("keydown", function(e) {
      switch (e.keyCode) {
        case 32:

            pers.draw();
            break;
        case 38:

            pers.move("top");
            break;

        case 40:

            pers.move("down");
            break;

        case 39:

            pers.move("right");
            break;

        case 37:

            pers.move("left");
            break;
        default:
  }
})
