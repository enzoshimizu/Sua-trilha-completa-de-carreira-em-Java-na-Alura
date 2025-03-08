function alterarStatus(id){
    const botao = document.querySelector(`#game-${id} a`);
    const imagem = document.querySelector(`#game-${id} div`);

    if (botao.classList.contains('dashboard__item__button--return')){
        botao.classList.remove('dashboard__item__button--return');
        imagem.classList.remove('dashboard__item__img--rented');
        botao.textContent = 'Alugar';
    } else {
        botao.classList.add('dashboard__item__button--return');
        imagem.classList.add('dashboard__item__img--rented');
        botao.textContent = 'Devolver';
    }
}
