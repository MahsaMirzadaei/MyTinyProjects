const levelOne = document.querySelector('.level-one');
const levelTwo = document.querySelector('.level-two');
const btn= document.querySelector('.next-button');
const uiLevel = document.querySelector('.ui-level');
const uiMessage = document.querySelector('.ui-message');
const spookyPicture = document.querySelector('.spooky-picture');
const screamSound = document.querySelector('.scream-sound')

const collisionChecke = (value) => {
    if(value === "maze-border") alert(
        'You lost... Try again.'
    )
    if (value === 'finish'){
        btn.style.cssText = 'opacity:1;';
        btn.style.pointerEvents = 'all';
        levelOne.style.pointerEvents = 'none';
    } 
    if (value === 'end-game'){
        spookyPicture.style.display = 'block';
        screamSound.play();
        document.body.style.background = 'black';
    }
};
window.addEventListener('mousemove',(e)=>{
    let check = e.target.classList.value;
    collisionChecke(check);
});

btn.addEventListener('click', ()=>{
    levelOne.style.display = 'none';
    levelTwo.style.display = 'flex';
    btn.style.cssText = 'opacity:0; pointer-event:"none";';
    uiLevel.textContent = 'Level 2';
    uiMessage.textContent = 'One more to go...';
});

