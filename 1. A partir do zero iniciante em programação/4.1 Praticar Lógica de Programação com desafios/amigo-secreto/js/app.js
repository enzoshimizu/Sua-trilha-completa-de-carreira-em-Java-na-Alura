const state = {
    form: {
        nome: document.getElementById('nome-amigo'),
        amigos: document.getElementById('lista-amigos'),
        sorteio: document.querySelector('.prizeDraw__container'),
    },
    values: {
        amigos: [],
        resultado: [],
    }
}

function getNome() {
    nome = state.form.nome.value;

    if (nome.trim() == "") {
        alert('Informe um nome.');
    } else {
        state.form.nome.value = null;
        return nome;
    }
}

function addAmigo(nome) {
    state.values.amigos.push(nome);
}

function listAmigos() {
    state.form.amigos.textContent = state.values.amigos.join(', ');
}

function adicionar() {
    addAmigo(getNome());
    listAmigos();
}

function embaralhar(amigos) {
    let resultado = [];
    let indice;
    let primeiroAmigo;
    let amigo;

    while (amigos.length > 0) {
        indice = Math.floor(Math.random() * amigos.length);
        amigo = amigos[indice];
        resultado.push(amigo);
        amigos.splice(indice, 1);

        if (resultado.length == 1) {
            primeiroAmigo = amigo;
        } else {
            resultado.push(amigo);
        }

    }

    resultado.push(primeiroAmigo);
    return resultado;
}


function listSorteio() {
    state.form.sorteio.innerHTML = "";
    let sorteio = state.values.resultado.slice();

    while (sorteio.length > 0) {
        let novaLinha = document.createElement('p');
        novaLinha.textContent = `${sorteio[0]} --> ${sorteio[1]}`;
        state.form.sorteio.appendChild(novaLinha);
        sorteio.shift();
        sorteio.shift();
    }
}

function sortear() {
    if ((state.values.amigos.length >= 2)) {
        state.values.resultado = embaralhar(state.values.amigos.slice());
        listSorteio();
    } else {
        alert('Insira pelo menos 2 amigos.');
    }
}

function reiniciar() {
    state.form.nome.value = null;
    state.values.amigos = [];
    state.values.resultado = [];
    listAmigos();
    listSorteio();
}
