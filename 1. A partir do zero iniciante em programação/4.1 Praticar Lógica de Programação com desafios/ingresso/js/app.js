const state = {
    form: {
        tipo: document.getElementById('tipo-ingresso'),
        quantidade: document.getElementById('qtd'),
    },
    resultado: {
        pista: document.getElementById('qtd-pista'),
        superior: document.getElementById('qtd-superior'),
        inferior: document.getElementById('qtd-inferior'),
    },
    values: {
        pista: 100,
        superior: 200,
        inferior: 400,
    }
}

function getTipo(){
    return state.form.tipo.value;
}

function getQuantidade(){
    const qtd = parseInt(state.form.quantidade.value);
    return isNaN(qtd) ? 0 : qtd;
}

function setQuantidade(tipo, quantidade){
    const resultado = state.values[tipo] - quantidade;

    if (resultado >= 0) {
        state.values[tipo] = resultado;
    } else {
        alert(`Quantidade solicitada (${quantidade}) acima do disponível ${state.values[tipo]}.`);
    }
}

function listQuantidade(tipo){
    state.resultado[tipo].textContent = state.values[tipo];
}

function comprar(){
    const tipo = getTipo();
    const quantidade = getQuantidade();
    if (quantidade > 0){
        setQuantidade(tipo, quantidade);
    } else {
        alert('Informe uma quantidade válida.');
    }
    
    listQuantidade(tipo);
}
