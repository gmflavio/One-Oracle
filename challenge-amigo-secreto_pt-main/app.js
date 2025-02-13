let amigos = [];

document.querySelector('.button-add').addEventListener('click', () => {
    
    const nomeInput = document.getElementById('amigo');
    const nome = nomeInput.value.trim();
    
    if (nome === '') {
        alert('Por favor, insira um nome.');
        return;
    }
    amigos.push(nome);
    
    nomeInput.value = ''; // Limpando a entrada
    
    atualizarLista();
});

function atualizarLista() {
    const listaNomes = document.getElementById('listaAmigos');
    listaNomes.innerHTML = '';
    amigos.forEach((nome) => {
        const li = document.createElement('li');
        li.textContent = nome;
        listaNomes.appendChild(li);
    });
}

document.querySelector('.button-draw').addEventListener('click', () => {
    
    if (amigos.length === 0) {
        alert('A lista está vazia.');
        return;
    }
    
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    
    const nomeSorteado = amigos[indiceAleatorio];
    
    document.getElementById('resultado').innerHTML = `<li>Amigo Secreto: ${nomeSorteado}</li>`;
});

function reiniciarJogo() {
    amigos = [];
    document.getElementById('amigo').value = '';
    document.getElementById('listaAmigos').innerHTML = '';
    document.getElementById('resultado').innerHTML = '';
}

// Adicionando o evento ao botão de reiniciar
document.querySelector('.button-reset').addEventListener('click', reiniciarJogo);
