const section = document.querySelector('section');
const gameStatus = document.querySelector('h2');
const startBtn = document.querySelector('button');
const back = document.querySelectorAll('.back');
let playersLives = 6;

const getData = () => [
    {imgSrc: './img/1.jpg', name: '1'},
    {imgSrc: './img/2.jpg', name: '2'},
    {imgSrc: './img/3.jpg', name: '3'},
    {imgSrc: './img/4.jpg', name: '4'},
    {imgSrc: './img/5.jpg', name: '5'},
    {imgSrc: './img/6.jpg', name: '6'},
    {imgSrc: './img/7.jpg', name: '7'},
    {imgSrc: './img/8.jpg', name: '8'},
    {imgSrc: './img/11.jpg', name: '1'},
    {imgSrc: './img/22.jpg', name: '2'},
    {imgSrc: './img/33.jpg', name: '3'},
    {imgSrc: './img/44.jpg', name: '4'},
    {imgSrc: './img/55.jpg', name: '5'},
    {imgSrc: './img/66.jpg', name: '6'},
    {imgSrc: './img/77.jpg', name: '7'},
    {imgSrc: './img/88.jpg', name: '8'}
];

const randomize = () => {
    const cardData = getData();
    cardData.sort(() => Math.random()-0.5);
    return cardData;
};

const cardGenerator = ()=>{
    const cardData = randomize();
    cardData.forEach((item)=>{
        const card = document.createElement('div');
        const face = document.createElement('img');
        const back = document.createElement('div');
        card.classList = 'card';
        back.classList = 'back';
        face.classList = 'face';
        face.src = item.imgSrc;
        card.setAttribute('name',item.name);
        section.appendChild(card);
        card.appendChild(back);
        card.appendChild(face);
        card.style.pointerEvents='none';
        card.addEventListener('click',(e)=>{
           card.classList.toggle('toggleCard');
            checkCards(e);
        });
    });
    
};

let timeLeft = 5;
startBtn.addEventListener('click',()=>{
    showUp();
    startBtn.style.opacity='0.4'
    startBtn.style.pointerEvents='none';
    let Timer = setInterval(()=>{
    if(timeLeft >= 0){
        gameStatus.textContent = `Time : ${timeLeft}`;
    } else {
        close();
        clearInterval(Timer);
        playersLives = 6;
        setTimeout(()=>{gameStatus.textContent = `Live : ${playersLives}`},1000);
    }
    timeLeft -= 1;
    }, 1000);
});


const showUp = () =>{
    let cards = document.querySelectorAll('.card');
    cards.forEach((item)=>{
        item.classList.add('show-up')
    });
};

const close = () =>{
    let cards = document.querySelectorAll('.card');
    cards.forEach((item)=>{
        item.classList.remove('show-up')
        item.style.pointerEvents='all';
    });
};

const restart = (text)=>{
    
    let cardData = randomize();
    let cards = document.querySelectorAll('.card');
    let faces = document.querySelectorAll('.face');
    section.style.pointerEvents='none'
    startBtn.style.opacity='1';
    startBtn.style.pointerEvents='all'
    gameStatus.textContent = 'Time: '
    setTimeout(()=>cardData.forEach((item,index) => {
                    cards[index].classList.remove('toggleCard');
                    cards[index].style.pointerEvents = 'none';
                    faces[index].src = item.imgSrc;
                    cards[index].setAttribute('name',item.name)
                    section.style.pointerEvents='all';
    }),1000)
    timeLeft = 5
    gameStatus.textContent = `Time : ${timeLeft}`;
    alert(text);
}

const checkCards = (e)=>{
    const clickedCard = e.target;
    clickedCard.classList.add('flipped');
    const flippedCard = document.querySelectorAll(".flipped")
    const toggleCards = document.querySelectorAll('.toggleCard')
    if (flippedCard.length === 2){
        if (flippedCard[0].getAttribute('name') === flippedCard[1].getAttribute('name')){
            flippedCard.forEach((card)=>{
                card.classList.remove('flipped');
                card.style.pointerEvents = 'none'
            })
        }else{
            flippedCard.forEach((card)=>{
                card.classList.remove('flipped');
                setTimeout(()=>card.classList.remove('toggleCard'),1000)
            })  
            playersLives--;
            setTimeout(()=>{gameStatus.textContent = `Live : ${playersLives}`;},1000);
            if(playersLives === 0){
            setTimeout(()=>restart('Oh NOOO :( you Lost. Try Again!'),1000);
            }
        }
    }
    if (toggleCards.length === 16){
        setTimeout(()=>restart('Congratulation :) You won!'),1000)
    }
    
}



cardGenerator();