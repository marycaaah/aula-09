// criando uma calculadora
function calculadora(){
// definindo as operações e pegando valor de entrada do usuário
// usaremos o "\n"
const operacao = Number(prompt('escolha uma opção:\n1 - soma (+)\n 2 - subtração(-)\n 3 - multplicação (*)\n 4 - divisão real (/)\n 5 - divisão inteira (%)\n 6 - potenciação (**)'));
// verificando se a operação é válida
if (!operacao || operacao >=7) {
    alert('erro - operação invalida!');
    calculadora();
} else{
    // dfinindo variaveis - todas as entradas devem ser tipo Number
    let n1 = Number(prompt('insirao primeiro valor: '));
    let n2 = Number(prompt('insira o segundo valor: '));
    let resultado;
    // verificando se as variaveis são válidas
    if (!n1 || !n2) {
        alert('erro - parâmetros inválidas!');
        calculadora();
    } else {
        // definindo as funções
        function soma() {
            resultado = n1 + n2;
            // mostrando o resultado usando template strings
            alert(`${n1} + ${n2} = ${resultado}`);
            // dando a opção de chamar uma nova operação
            novaOperacao();
        }
        function subtracao() {
            resultado = n1 - n2;
            // mostrando o resultado usando template strings
            alert(`${n1} - ${n2} = ${resultado}`);
            // dando a opção de chamar uma nova operação
            novaOperacao();
        }  
        function multiplicacao() {
            resultado = n1 * n2;
            // mostrando o resultado usando template strings
            alert(`${n1} * ${n2} = ${resultado}`);
            // dando a opção de chamar uma nova operação
            novaOperacao();
        }
        function divisaoReal() {
            resultado = n1 / n2;
            // mostrando o resultado usando template strings
            alert(`${n1} / ${n2} = ${resultado}`);
            // dando a opção de chamar uma nova operação
            novaOperacao();
        }
        function divisaoInteira() {
            resultado = n1 % n2;
            // mostrando o resultado usando template strings
            alert(`o resto da divisao entre ${n1} e % ${n2} é igual a  ${resultado}`);
            // dando a opção de chamar uma nova operação
            novaOperacao();
        }
        function potenciacao() {
            resultado = n1 ** n2;
            // mostrando o resultado usando template strings
            alert(`${n1} elevado à ${n2}ª potência é ${resultado}`);
            // dando a opção de chamar uma nova operação
            novaOperacao();
        } 
        // nova operação
        function novaOperacao(){
            let opcao = prompt('deseja fazer outra operação?/n 1 - sim/n 2 - não');
            if (opcao == 1) {
                calculadora();
            } else if (opcao == 2){
                alert('até mais!')
            } else{
                alert('digite uma opção válida!');
                novaOperacao();
            }
        }
    }
}
    // escolhendo uma operação
    // usando if && else
   /* if (operacao == 1) {
        soma();
    }else if (operacao ==2) {
        subtracao();
    }else if (operacao ==3) {
        multiplicacao();
    }else if (operacao == 4) {
        divisaoReal();
    }else if (operacao == 5) {
        divisaoInteira();
    }else if (operacao == 6) {
        potenciacao();
    }
    */

    // usando switch case como alternativa (comentar um dos dois)
    switch (operacao){
        case 1:
            soma();
            break;
        case 2:
            subtracao();
            break;
        case 3:
            multiplicacao();
        case 4:
            divisaoReal();
            break;
        case 5:
            divisaoInteira();
            break;
        case 6:
            potenciacao();
            break;
    }
}
calculadora();
