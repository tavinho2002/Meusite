document.addEventListener('DOMContentLoaded', function() {
    const mensagemBotao = document.getElementById('mensagemBotao');
    const mensagemParagrafo = document.getElementById('mensagem');

    mensagemBotao.addEventListener('click', function() {
        mensagemParagrafo.textContent = "Seja bem vindo ao site do Otavio!"; 
    });
});