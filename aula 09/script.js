// tipos de funções
// função declarativa
/* deve ser declarada usando a palavra reservada function seguida do nome da função, parênteses "()" e chaves "{}"
*/
function nomeDaFuncao() {
    alert('sou uma função declarativa!');
}
// devemos chamar a função para ver o resultado
nomeDaFuncao();

// expressão de função - são funções atribuídas à espressões
// a nomeação é opcional

// com nomeação
var nomeDeFuncao = function nomeDeFuncao() {
    alert('sou uma expressão de função nomeada!');
}
// sem nomeação
var nomeDeFuncao2 = function() {
    alert('sou uma expressão de função não nomeada!');
}
// arrow function
/* função de expressão de sintaxe curta, sempre anônima, não pode ser nomeada - deve ser declarada com parênteses "()", seguido de"=>" e depois "{}"
*/
var funcao = () => {
    alert('sou uma função anônima!');
}

nomeDeFuncao();
nomeDeFuncao2();
funcao();