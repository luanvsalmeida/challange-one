//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let nomes = [];

function atualizaLista() {
    const ul = document.getElementById("listaAmigos");    // Resgata a ul
    ul.innerHTML = "";
    const sorteado = document.getElementById("resultado");
    sorteado.innerHTML = "";
    for (let i = 0; i < nomes.length; i++) {            
        const li = document.createElement("li");        // Cria um list item 
        li.innerHTML = nomes[i];                        // Adiciona o nome
        ul.appendChild(li);                             // Salva na ul
    }
}

function adicionarAmigo() {
    let nome = document.querySelector(".input-name").value;
    if (nome == undefined || nome == "") {       // Testa se o nome está em branco ou é indefinido
        alert("Insira um nome válido");
        return;
    }
    nomes.push(nome);
    atualizaLista();
    alert("Nome inserido com sucesso!");
}

function sortearAmigo() {
    const i = Math.floor(Math.random() * nomes.length);   // Selecione um índice aleatório 
    const ul = document.getElementById("resultado");
    ul.innerHTML= "<li>O escolhido foi "+ nomes[i] +"</li>"            // Retorna o valor do índice
}
