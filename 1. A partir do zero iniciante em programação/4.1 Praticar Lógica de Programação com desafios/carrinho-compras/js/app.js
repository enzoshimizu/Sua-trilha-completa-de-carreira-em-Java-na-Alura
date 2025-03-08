const state = {
    elementos: {
        produto: document.getElementById('produto'),
        quantidade: document.getElementById('quantidade'),
        carrinho: document.querySelector('#lista-produtos section'),
        total: document.getElementById('valor-total'),
    },
    carrinho: {
        itens: [],
        valor: 0,
    },
}

function adicionar() {
    const item = getItem();

    if (!item) {
        alert('Informe uma quantidade');
    } else {
        inserirItemCarrinho(item);
    }

    exibirCarrinho();
}

function getItem() {
    if (getQuantidade() <= 0) {
        return null;
    }

    return {
        nome: getProduto(),
        quantidade: getQuantidade(),
        valor: getPreco() * getQuantidade(),
    };
}

function getProduto() {
    const opcao = state.elementos.produto.value.split('-');
    return opcao[0].trim();
}

function getPreco() {
    const opcao = state.elementos.produto.value.split('R$');
    return parseFloat(opcao[1].trim());
}

function getQuantidade() {
    const quantidade = parseInt(state.elementos.quantidade.value);
    return isNaN(quantidade) ? 0 : quantidade;
}

function inserirItemCarrinho(item) {
    state.carrinho.itens.push(item);
    state.carrinho.valor += item.valor;
    resetarCampos();
}

function exibirCarrinho() {
    state.elementos.carrinho.innerHTML = state.carrinho.itens
        .map((elemento, index) =>
            `<span class="texto-azul">${elemento.quantidade}x</span> ${elemento.nome} <span class="texto-azul">R$${elemento.valor.toFixed(2)}</span>`)
        .join('<br>')

    state.elementos.total.textContent = formatarValor(state.carrinho.valor);
}

function limpar() {
    state.carrinho.itens = [];
    state.carrinho.valor = 0;
    resetarCampos();
    exibirCarrinho();
}

function resetarCampos() {
    state.elementos.produto.selectedIndex = 0;
    state.elementos.quantidade.value = null;
}

function formatarValor(valor) {
    return `R$${valor.toFixed(2).replace('.', ',')}`;
}

function init() {
    exibirCarrinho();
}

init();
