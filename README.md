# Amigo Secreto - Challenge ONE

## 📌 Sobre o Projeto
Este projeto faz parte do desafio **Challenge ONE** e tem como objetivo aprimorar habilidades em lógica de programação. Ele permite que o usuário cadastre nomes de amigos e realize um sorteio para escolher aleatoriamente um participante.

## 🚀 Tecnologias Utilizadas
- HTML5
- CSS3
- JavaScript (ES6)

## 🎯 Funcionalidades
✅ Adicionar nomes à lista de participantes.  
✅ Exibir a lista de amigos cadastrados.  
✅ Sortear aleatoriamente um nome da lista.  
✅ Exibir o resultado do sorteio na tela.

## 📂 Estrutura do Projeto
```
📂 amigo-secreto
├── 📜 index.html      # Página principal
├── 📜 style.css       # Estilos da página
├── 📜 app.js          # Lógica do sorteio
├── 📂 assets          # Imagens e ícones
```

## 🛠 Como Executar o Projeto
1. **Clone este repositório**
```bash
git clone https://github.com/seu-usuario/amigo-secreto.git
```
2. **Acesse a pasta do projeto**
```bash
cd amigo-secreto
```
3. **Abra o arquivo `index.html` no navegador**

## 📜 Código Principal
### `app.js`
```js
let nomes = [];

function atualizaLista() {
    const ul = document.getElementById("listaAmigos");
    ul.innerHTML = "";
    const sorteado = document.getElementById("resultado");
    sorteado.innerHTML = "";
    for (let i = 0; i < nomes.length; i++) {            
        const li = document.createElement("li");        
        li.innerHTML = nomes[i];                        
        ul.appendChild(li);                             
    }
}

function adicionarAmigo() {
    let nome = document.querySelector(".input-name").value;
    if (nome == "") {
        alert("Insira um nome válido");
        return;
    }
    nomes.push(nome);
    atualizaLista();
    alert("Nome inserido com sucesso!");
}

function sortearAmigo() {
    const i = Math.floor(Math.random() * nomes.length);
    const ul = document.getElementById("resultado");
    ul.innerHTML = `<li>O escolhido foi ${nomes[i]}</li>`;
}
```

## 📝 Melhorias Futuras
🔹 Impedir nomes duplicados.  
🔹 Adicionar opção de remover um nome da lista.  
🔹 Criar um layout mais estilizado.

## 📌 Créditos
Desenvolvido como parte do **Challenge ONE**.

