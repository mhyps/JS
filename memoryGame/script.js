const cards = document.querySelectorAll(".memory-card");

let hasFlippedCard = false;
let firstCard,secondCard;

function flipcard(){
    this.classList.add('flip');

    if (!hasFlippedCard){
        //getting first card
        hasFlippedCard = true;
        firstCard = this;
    }else {
        //getting second card
        hasFlippedCard = false;
        secondCard = this;
    }
}

cards.forEach(card => card.addEventListener("click",flipcard));