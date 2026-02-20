const calcular = document.getElementById('calcular');

function imc () {
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if (nome !== '' && altura !== '' && peso !== ''){ //valida os campos//
        
        const valorIMC = (peso / (altura*altura)).toFixed(2); //realiza o cálculo da aplicação//

        let classificacao = ''; //faz a classificação do grupo e encontra o resultado//

        if (valorIMC < 18.5){
            classificacao = 'abaixo do peso. É importante procurar orientação médica ou nutricional.';

        }else if (valorIMC < 25){
            classificacao = 'com peso ideal. Parabéns! Continue mantendo hábitos saudáveis.';
        
        }else if (valorIMC < 30){
            classificacao = 'levemente acima do peso. Considere ajustar sua alimentação e praticar exercícios físicos.';

        }else if (valorIMC < 35){
            classificacao = 'obesidade grau I. Recomenda-se mudanças no estilo de vida e orientação médica.';

        }else if(valorIMC < 40){
            classificacao = 'com obesidade grau II. Atenção! Avalie seus hábitos alimentares e pratique exercícios.';

        }else{
            classificacao = 'obesidade grau III. É recomendável procurar acompanhamento médico.';
        }

        resultado.textContent = `${nome} seu IMC é ${valorIMC} e você está ${classificacao}`; // função para mostrar o resultado na tela//
    
    }else {
        resultado.textContent = 'Preencha todos os campos'
    }

}
calcular.addEventListener('click', imc);
