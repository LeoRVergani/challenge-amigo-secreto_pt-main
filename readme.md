# Sorteador de Nomes

## 📌 Sobre o Projeto
Este projeto foi desenvolvido como um desafio para fortalecer habilidades em lógica de programação. Ele consiste em uma aplicação simples onde os usuários podem adicionar nomes a uma lista e, posteriormente, sortear aleatoriamente um dos nomes adicionados.

## 🚀 Funcionalidades
- Adicionar nomes à lista.
- Exibir os nomes adicionados.
- Sortear aleatoriamente um dos nomes.
- Exibir o nome sorteado.

## 🛠️ Tecnologias Utilizadas
- HTML
- CSS
- JavaScript

## 📋 Como Usar
1. Abra o arquivo `index.html` em um navegador.
2. Digite um nome no campo de entrada.
3. Clique no botão **"Adicionar"** para incluir o nome na lista.
4. Para sortear um nome, clique no botão **"Sortear"**.
5. O nome sorteado será exibido na tela.

## 📄 Código Principal
```js
let nomes = [];

document.getElementById('listaAmigos').innerHTML = `${amigos['']}`

function adicionarAmigo() {
    let nome = document.querySelector("input").value.trim();
    if (nome !== "") {
        nomes.push(nome);
        let li = document.createElement("li");
        li.textContent = nome;
        document.getElementById("listaAmigos").appendChild(li);
        document.querySelector("input").value = "";
    }
}

function sortearAmigo() {
    if (nomes.length > 0) {
        let indiceSorteado = Math.floor(Math.random() * nomes.length);
        let nomeEscolhido = nomes[indiceSorteado];
        document.getElementById("resultado").textContent = "Nome sorteado: " + nomeEscolhido;
    } else {
        alert("Adicione pelo menos um nome antes de sortear!");
    }
}
```

## 🏗️ Melhorias Futuras
- Adicionar um botão para remover nomes da lista.
- Armazenar os nomes no `localStorage` para persistência de dados.
- Criar animações para tornar o sorteio mais dinâmico.

## 📜 Licença
Este projeto é de código aberto e pode ser utilizado livremente para aprendizado e aprimoramento de habilidades.

---
Feito com ❤️ para aprendizado e prática!

