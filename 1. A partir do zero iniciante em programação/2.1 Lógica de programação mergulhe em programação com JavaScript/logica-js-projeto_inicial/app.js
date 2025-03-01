alert('Boas vindas ao jogo do número secreto');
let numeroMaximo = 100;
let numeroSecreto = parseInt(Math.random() * numeroMaximo) + 1;
console.log(numeroSecreto);
let chute;
let tentativas = 1;

while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
    if (chute == numeroSecreto) {
        break;
    } else {
        tentativas++;
        if (numeroSecreto > chute) {
            alert(`O número secreto é maior que ${chute}`);
        } else {
            alert(`O número secreto é menor que ${chute}`);
        }
    }
}

let palavrasTentativas = tentativas == 1 ? 'tentativa' : 'tentativas';

alert(`Isso ai! Você descobriu o número secreto (${numeroSecreto}) com ${tentativas} ${palavrasTentativas}!`);
