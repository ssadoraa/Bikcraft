// Criar barra no nav quando está na página
const link = document.querySelectorAll('.header-menu a');

function ativarLink(link) {
    const url = location.href;
    const href = link.href;

    if (url.includes(href)){
        link.classList.add("ativo");
    }

}

link.forEach(ativarLink);


// Deixar marcado a opção quando entrar em orçamento
const parametros = new URLSearchParams(location.search);

function ativarProduto(parametro) {
    const element = document.getElementById(parametro);
    if (element) {
        element.checked = true;
    }
}

parametros.forEach(ativarProduto);


// Liberar as respostas das perguntas frequentes
const perguntas = document.querySelectorAll(".questions button");

function ativarResposta(event) {
    const pergunta = event.currentTarget;
    const controls = pergunta.getAttribute("aria-controls");
    const resposta = document.getElementById(controls);
    
    resposta.classList.toggle("ativa");
    const ativo = resposta.classList.contains("ativa")
    pergunta.setAttribute("aria-expanded", ativo);
}

function eventoPergunta(pergunta) {
    pergunta.addEventListener("click", ativarResposta);
}

perguntas.forEach(eventoPergunta);


// Criar galeria de imagens em cada página das bicicletas e só permitir trocar imagem se a tela > 1000px
const galeria = document.querySelectorAll(".bike-image img");
const galeriaContainer = document.querySelector(".bike-image");

function trocaImagem(event) {
    const img = event.currentTarget;
    const media = matchMedia("(min-width: 1000px)").matches;
    if (media){
        galeriaContainer.prepend(img);
    }
}

function eventosGaleria(img) {
    img.addEventListener("click", trocaImagem);
}

galeria.forEach(eventosGaleria);

// Animação com plugin
if (window.SimpleAnime){
    new SimpleAnime();
}