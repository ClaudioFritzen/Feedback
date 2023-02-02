


const ratingEls = document.querySelectorAll('.rating');

ratingEls.forEach((ratingEl) => {
    ratingEl.addEventListener("click", (event) => {
        console.log(event.target.innerText || 
            event.target.parentNode.innerText);
        event.target.classList.add('active')
        event.target.parentNode.classList.add('active')
    })
})


// função para remover o selecionado 
function removeActive(){
    ratingEls.forEach((ratingEl) => {
        ratingEl.classList.remove('active')
    })
}