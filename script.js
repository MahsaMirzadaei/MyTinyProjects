
let title = document.querySelector('h2')
let description = document.querySelector('p')
let textBox = document.querySelector('.container-textbox')
let items = document.querySelectorAll('.item')
let iconContainer = document.querySelector('.container-icons')

let quote = document.querySelector('.quote')
let unsplash = document.querySelector('.unsplash')
let evil = document.querySelector('.evil')
let adidas = document.querySelector('.adidasss')
let puzzle = document.querySelector('.puzzle')

textBox.appendChild(title)
textBox.appendChild(description)

items.forEach((item)=>{
    item.addEventListener('mouseleave',()=>{
        title.textContent = ''
        description.textContent = ''
        textBox.classList.remove('animation') 
    })
})

quote.addEventListener('mouseover', ()=>{
    title.textContent = 'Quote Generator'
    description.textContent = "In this page U can generate random quote and INSPIRE your self."
    textBox.classList.add('animation')
})
evil.addEventListener('mouseover', ()=>{
    title.textContent = 'Scary Maze'
    description.textContent = "There is a game in this page. A scary maze with 2 levels. Try to track the border and STAY on it!!!"
    textBox.classList.add('animation')
})
unsplash.addEventListener('mouseover', ()=>{
    title.textContent = 'Random Photos Scroller'
    description.textContent = 'In this page U can Scroll down random photos from unsplash website for ETERNITY.'
    textBox.classList.add('animation')
})
puzzle.addEventListener('mouseover', ()=>{
    title.textContent = 'Memory Puzzle Game'
    description.textContent = 'In This page U can play memory puzzle that gives U 5 seconds to MEMORIZE and U have 6 lives to lose.'
    textBox.classList.add('animation')
})
adidas.addEventListener('mouseover', ()=>{
    title.textContent = 'Adidas Shop'
    description.textContent = 'This page represents an example product card that is so smooth with mouse HOVERING.'
    textBox.classList.add('animation')
})