const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
const bird = document.getElementById("bird");

document.addEventListener("keydown", function(event){
    jump();
});

function jump (){
    if(!dino.classList.contains("jump")){
        dino.classList.add("jump");
    }
   setTimeout(function(){
    dino.classList.remove("jump");
   }, 500);
}

let isAlive = setInterval( function(){
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));
    let birdLeft = parseInt(window.getComputedStyle(bird).getPropertyValue("left"));

    if((cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140)||(birdLeft < 40 && birdLeft > 0 && dinoTop <= 130)){
        alert("GAME OVER!");
        dino.style.top = "150px";
        cactus.style.left = "620px";
        bird.style.left = "620px";
    }
}, 10);