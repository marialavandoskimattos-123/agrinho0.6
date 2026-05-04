// Selecionar elementos
const modal = document.getElementById("modalInscricao");
const btnAbrir = document.querySelectorAll(".cta-button, .btn-contato");
const btnFechar = document.querySelector(".close-button");
const form = document.getElementById("formSustentavel");

// Fazer todos os botões "CTA" e "Contato" abrirem o modal
btnAbrir.forEach(botao => {
    botao.addEventListener("click", (e) => {
        e.preventDefault();
        modal.style.display = "block";
    });
});

// Fechar modal
btnFechar.onclick = () => modal.style.display = "none";

window.onclick = (event) => {
    if (event.target == modal) modal.style.display = "none";
}

// Lógica do Formulário
form.onsubmit = (e) => {
    e.preventDefault();
    const nome = document.getElementById("nome").value;
    alert(`Olá ${nome}! Recebemos seu interesse. Em breve nossa equipe ambiental entrará em contato.`);
    form.reset();
    modal.style.display = "none";
};
