const cards = document.querySelectorAll(".memory-card");

function flipcard(){
    alert("sama sie wykonalam")
}

cards.forEach(card => card.addEventListener("click",flipcard));