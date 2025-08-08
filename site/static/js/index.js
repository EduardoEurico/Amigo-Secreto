// Função para adicionar amigo a lista
function adicionarAmigo() {
    const inputAmigo = document.getElementById("amigo");
    const nomeAmigo = inputAmigo.value.trim();
    
    if (nomeAmigo) {
        const listaAmigos = document.getElementById("listaAmigos");
        const listItem = document.createElement("li");
        listItem.textContent = nomeAmigo;
        listaAmigos.appendChild(listItem);
        
        inputAmigo.value = "";
    }
}

// Botão para adicionar amigo
document.getElementById("add-amigo-btn").addEventListener("click", adicionarAmigo);


//Função para sortear um amigo aleatoriamente
function sortearAmigo() {
    const listaAmigos = document.getElementById("listaAmigos");
    const amigos = listaAmigos.getElementsByTagName("li");
    const resultado = document.getElementById("resultado");
    
    if (amigos.length === 0) {
        alert("Nenhum amigo na lista.");
        return;
    }
    
    const randomIndex = Math.floor(Math.random() * amigos.length);
    const amigoEscolhido = amigos[randomIndex].textContent;
    
    resultado.innerHTML = `<li> Amigo sorteado: <strong>${amigoEscolhido}</strong></li>`;
}


//Função para limpar a lista de amigos
function limparLista() {
    const listaAmigos = document.getElementById("listaAmigos");
    const resultado = document.getElementById("resultado");
    listaAmigos.innerHTML = "";
    resultado.innerHTML = "";
}

