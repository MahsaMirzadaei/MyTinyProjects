// movment animation to happen
const card = document.querySelector('.card');
const container = document.querySelector('.container');
//items
const title = document.querySelector('.title');
const sneaker = document.querySelector('.sneaker img');
const purchase = document.querySelector('.purchase');
const description = document.querySelector('.info h3');
const sizes = document.querySelector('.sizes');

// moving animation event
container.addEventListener('mousemove', (e)=>{
    let xAxis = (window.innerWidth /2 - e.pageX)/8;
    let yAxis = (window.innerHeight /2 - e.pageY)/14;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

//animation in
container.addEventListener('mouseenter', (e) =>{
    card.style.transition = 'none';
    title.style.transform = 'translateZ(100px)';
    sneaker.style.transform = 'translateZ(90px) rotateZ(-35deg)';
    purchase.style.transform = 'translateZ(50px)';
    description.style.transform = 'translateZ(80px)';
    sizes.style.transform = 'translateZ(50px)';
});

//animation out
container.addEventListener('mouseleave', e =>{
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    card.style.transition = 'all 0.5s ease';
    title.style.transform = 'translateZ(0px)';
    sneaker.style.transform = 'translateZ(0px)';
    purchase.style.transform = 'translateZ(0px)';
    description.style.transform = 'translateZ(0px)';
    sizes.style.transform = 'translateZ(0px)';
});