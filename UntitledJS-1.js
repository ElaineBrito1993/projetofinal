//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nomeAmigo = inputAmigo.value.trim();

    if (nomeAmigo) {
        amigos.push(nomeAmigo);
        inputAmigo.value = '';
        atualizarListaAmigos();
    }
}

function atualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';

    amigos.forEach(amigo => {
        const itemLista = document.createElement('li');
        itemLista.textContent = amigo;
        listaAmigos.appendChild(itemLista);
    });
}

function sortearAmigo() {
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';

    if (amigos.length > 0) {
        const indiceSorteado = Math.floor(Math.random() * amigos.length);
        const amigoSorteado = amigos[indiceSorteado];
        const itemResultado = document.createElement('li');
        itemResultado.textContent = `O amigo secreto sorteado é: ${amigoSorteado}`;
        resultado.appendChild(itemResultado);
    } else {
        const itemResultado = document.createElement('li');
        itemResultado.textContent = 'Adicione amigos para sortear.';
        resultado.appendChild(itemResultado);
    }
}