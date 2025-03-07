const state = {
    elements: {
        quantidadeInput: document.getElementById('quantidade'),
        deInput: document.getElementById('de'),
        ateInput: document.getElementById('ate'),
        resultado: document.querySelector('#resultado label'),
        sortear: document.getElementById('btn-sortear'),
        reiniciar: document.getElementById('btn-reiniciar'),
    },
    values: {
        quantidade: 0,
        de: 0,
        ate: 0,
        numeros: [],
    }
}

function sortear() {
    state.values.quantidade = parseInt(state.elements.quantidadeInput.value);
    state.values.de = parseInt(state.elements.deInput.value);
    state.values.ate = parseInt(state.elements.ateInput.value);
    quantidadePossiveis = state.values.ate - state.values.de + 1;

    for (let index = 0; index < state.values.quantidade; index++) {
        let numero = obterNumeroAleatorio(state.values.de, state.values.ate);

        while (state.values.numeros.includes(numero) && state.values.numeros.length < quantidadePossiveis){
            numero = obterNumeroAleatorio(state.values.de, state.values.ate);
        }

        state.values.numeros.push(numero);
    }

    let texto = "Números sorteados:";

    for (let index = 0; index < state.values.numeros.length; index++) {
        if (index == 0) {
            texto = texto + " " + state.values.numeros[index];
        } else {
            texto = texto + ", " + state.values.numeros[index];
        }
    }

    state.elements.resultado.textContent = texto;
    alterarStatusBotao(state.elements.sortear);
    alterarStatusBotao(state.elements.reiniciar);
}

function reiniciar() {
    alterarStatusBotao(state.elements.sortear);
    alterarStatusBotao(state.elements.reiniciar);
    state.elements.resultado.textContent = "Números sorteados: nenhum até agora";
    state.elements.quantidadeInput.value = null;
    state.elements.deInput.value = null;
    state.elements.ateInput.value = null;
    state.values.numeros = [];
    state.values.de = 0;
    state.values.ate = 0;
}

function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function alterarStatusBotao(botao){
    if (botao.classList.contains('container__botao')){
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    } else {
        botao.classList.add('container__botao');
        botao.classList.remove('container__botao-desabilitado');
    }
}
