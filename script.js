
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
    title.textContent = 'Quote Maker'
    description.textContent = 'This page try to make some quote and make u feel better'
    textBox.classList.add('animation')
})
evil.addEventListener('mouseover', ()=>{
    title.textContent = 'Scary Maze'
    description.textContent = 'This page is a game. A scary maze with 2 level. U should.nt go out of the border!!!'
    textBox.classList.add('animation')
})
unsplash.addEventListener('mouseover', ()=>{
    title.textContent = 'Infinite Scroll Unsplash'
    description.textContent = 'This page is an Infinite Scroll to see photos that is an API from Unsplash website '
    textBox.classList.add('animation')
})
puzzle.addEventListener('mouseover', ()=>{
    title.textContent = 'Memory Puzzle Game'
    description.textContent = 'This page is a game of memory puzzle that U have 5 second to memorize and 6 live to loose.'
    textBox.classList.add('animation')
})
adidas.addEventListener('mouseover', ()=>{
    title.textContent = 'Adidas store'
    description.textContent = 'This page is a simple store example that is so smooth with mouse hover '
    textBox.classList.add('animation')
})