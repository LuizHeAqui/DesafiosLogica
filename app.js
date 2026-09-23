//Crie uma função que valide se um número é positivo, negativo ou zero.
function validacao(numero){
    if(numero > 0){
        console.log(`O número ${numero} é positivo!`);
    } else if(numero < 0){
        console.log(`O número ${numero} é negativo!`);
    } else{
        console.log(`O número ${numero} é zero!`);
    }
}
validacao(0);//TESTE

//Implemente uma função que verifique se uma pessoa é maior de idade.
function verificacaoIdade(idade){
    if(idade >= 18){
        console.log(`Maior de Idade!`);
    } else{
        console.log(`Menor de Idade!`);
    }
}
verificacaoIdade(18);//TESTE

//Desenvolva uma função que valide se uma string é vazia ou não.
function validarString(texto) {
    return texto === "" ? "String vazia" : "String não vazia";
}
console.log(validarString(''));//TESTE

//Crie uma função que determine se um ano é bissexto
function verificarAnoBissexto(ano){
    if((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0){
        console.log(`O ano de ${ano} é um ano bissexto!`);
    } else{
        console.log(`O ano de ${ano} não é um ano bissexto!`);
    }
}
verificarAnoBissexto(2028);//TESTE

//Implemente uma função que calcule a média de dois números, interrompendo a execução se algum dos números não for válido.
function media(a, b){
    if(a === '' || b === ''){
        console.log('Os números não podem ser vazios!');
        return;
    } else if(isNaN(a) || isNaN(b)){
        console.log('Um dos números não é válido!');
    } else{
        console.log((a+b)/2);
    }
}
media(2, 10);//TESTE

//Desenvolva uma função que receba um array como parâmetro e retorne o seu tamanho.
let ordem = [1,2,3,4,5,6,7,8,9];
function tamanhoArray(array){
    console.log(array.length);
}
tamanhoArray(ordem);//TESTE

//Crie um array e utilize a função includes para verificar se um elemento específico está presente
function verificacaoArray(){
    
}

