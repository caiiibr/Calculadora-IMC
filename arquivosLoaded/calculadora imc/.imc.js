const calcular = document.getElementById('calcular');


function imc() {
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if (nome !== '' && altura !== '' && peso !== '') {

        const valorIMC = (peso / (altura * altura)).toFixed(2);
        let indice = ''

        if (valorIMC < 18.5) {
            indice = 'abaixo do peso.';
        } else if (valorIMC < 25) {
            indice = 'com seu peso ideal.';
        } else if (valorIMC < 30) {
            indice = 'levemente acima do peso.';
        } else if (valorIMC < 35) {
            indice = 'com obesidade grau I.';
        } else {
            indice = 'com obesidade grau II.';
        }
        resultado.textContent = `${nome} seu IMC é ${valorIMC} e você está ${indice}`;

    } else {
        resultado.textContent = 'Preencha todos os campos!!!';
    }
}
calcular.addEventListener('click', imc);