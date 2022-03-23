const dino = document.querySelector('.dino');
const backgroud = document.querySelector('.background');

let isJumping = false;
let position = 0;

function handleKeyUp(event){
    if(event.keyCode === 32 && !  isJumping){
        jump();
    }
}

function jump(){
    let upInterval = setInterval(() => {
        if(position >= 160){
            clearInterval(upInterval);
            let downInterval = setInterval(() => {
                if(position <= 0){
                    clearInterval(downInterval);
                }else{
                    position -= 20;
                    dino.style.bottom = position+'px';
                }
            }, 20);
        }
        else{
            position +=10;
            dino.style.bottom = position+'px';
        }
    }, 20);
}
 
document.addEventListener('keyup', handleKeyUp);    

function createCactus() {
    const cactus = document.createElement('div');
    let cactusPosition = 1000;
    let randomTime = Math.random() * 6000;



    cactus.classList.add('cactus');
    
    cactus.style.left = 1000+'px';
    backgroud.appendChild(cactus);
    let leftInterval = setInterval(() => {
        
        if(cactusPosition <= -60){
            clearInterval(leftInterval);
            backgroud.removeChild(cactus);
        }else
        if(cactusPosition > 0 && cactusPosition < 60 && position < 60){
            clearInterval(leftInterval);
            document.body.innerHTML = '<h1 class="game-over">Fim de jogo</h1>';
        }
        else{
            cactusPosition -= 10;
            cactus.style.left = cactusPosition+'px';
        }

    }, 20);

    setTimeout(createCactus, randomTime);
}
createCactus();
