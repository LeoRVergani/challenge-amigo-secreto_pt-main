//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let nomes = [];

document.getElementById('listaAmigos').innerHTML = `${amigos['']}`

function adicionarAmigo() {
    let nome = document.querySelector("input").value.trim();
    if (nome !== "") {
        nomes.push(nome); // Adiciona o nome ao array
        
        // Cria um novo item na lista
        let li = document.createElement("li");
        li.textContent = nome;
        document.getElementById("listaAmigos").appendChild(li);

        // Limpa o input
        document.querySelector("input").value = "";
    }
}

function sortearAmigo() {
    if (nomes.length > 0) {
        // Sorteia um nome aleatoriamente
        let indiceSorteado = Math.floor(Math.random() * nomes.length);
        let nomeEscolhido = nomes[indiceSorteado];

        // Exibe o nome sorteado
        document.getElementById("resultado").textContent = "Nome sorteado: " + nomeEscolhido;
    } else {
        alert("Adicione pelo menos um nome antes de sortear!");
    }
}