const quoteText = document.querySelector('.quote');
const authorText = document.querySelector('.author');
const newQuoteBtn = document.querySelector('.new-quote');
const loader = document.querySelector('.loader');
const quoteContainer = document.querySelector('.quote-container')

// show Loading
const loading = () =>{
    quoteContainer.hidden = true;
    loader.hidden = false;
}
// hide Loading 
const complete = () =>{
    quoteContainer.hidden = false;
    loader.hidden = true;
}

//show new quotes
const newQuotes = ()=>{
    loading();
    const quotes = localQuotes[Math.floor(Math.random() * localQuotes.length )];
    quoteText.textContent = quotes.text;

    if (!quotes.author){
        authorText.textContent = 'Unknown';
    } else {
        authorText.textContent = quotes.author;
    }

    if (quotes.text.length > 120){
        quoteText.classList.add('long-quote'); 
    } else {
        quoteText.classList.remove('long-quote');
    }
    complete();
}

newQuoteBtn.addEventListener('click', newQuotes);
newQuotes();
