const $portfolio = document.querySelector(".sec-portfolio-js");
const $modalImgPortfolio = document.querySelector(".img-modal-js");

$portfolio.addEventListener("click", (e)=> {

    if(e.target.classList.contains('img-btn-modal-js')) {
    
    let urlImg = e.target.attributes[0].nodeValue;

    $modalImgPortfolio.src = urlImg
    }
})