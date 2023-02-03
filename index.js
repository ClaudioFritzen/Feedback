


const ratingEls = document.querySelectorAll('.rating');

const bntEl = document.getElementById('btn')

const containerEl = document.getElementById('container')

let selectionRating = "";

ratingEls.forEach((ratingEl) => {
    ratingEl.addEventListener("click", (event) => {

        // importamos a função abaixo
        removeActive();
        selectionRating = 
            event.target.innerText || 
            event.target.parentNode.innerText;
        /* console.log(event.target.innerText || 
            event.target.parentNode.innerText); */
        event.target.classList.add("active");
        event.target.parentNode.classList.add("active");
    });
});

// criando uma ação quando o usuario clicar no enviar 
bntEl.addEventListener("click", () => {
    if(selectionRating !== ""){
        containerEl.innerHTML = `
        <strong> Thank You! </strong>
        <br><br>
        <strong> Feedback: ${selectionRating} </strong>
        <p>  Seu voto ajuda a nos motivar a melhorar. Obrigado. </p>
        `
    }
})


// função para remover o selecionado 
function removeActive(){
    ratingEls.forEach((ratingEl) => {
        ratingEl.classList.remove('active')
    })
}