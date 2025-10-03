// ATIVIDADES

/* 


A) Número par ou ímpar: Peça para o usuário digitar um número inteiro e diga se ele é par ou ímpar.

B) Maioridade: Peça a idade de uma pessoa e diga se ela é maior de idade (18 anos ou mais) ou menor de idade.

C) Calculadora simples: Crie duas variáveis com números inteiros (let a, let b).
Verifique com if/else qual deles é maior e mostre a diferença entre os dois.
Se forem iguais, mostre a mensagem: “Os números são iguais”.

D) Descubra a soma de todos os números de um valor escolhido pelo usuário, começando pelo número 1

E) Faça um programa que calcule a tabuada, desde o multiplicando 1 até o 10. 
    
    Obs: o multiplicando deve ser informado pelo usuário, ou seja: deverá ser uma variável que 
    permita a alteração conforme a necessidade.

F) Faça um programa os próximos 6 números ímpares de um número qualquer informado pelo usuário


G) Faça um programa que leia um valor qualquer e apresente uma mensagem dizendo
em qual dos seguintes intervalos ([0,25], (25,50], (50,75], (75,100]) este
valor se encontra. Caso o valor não esteja em nenhum destes intervalos, deverá
ser impressa a mensagem: “Fora de intervalo”.

H) Faça uma aplicação simples, que receba o nome de um aluno e registre 4 notas (de 0 a 10).

Se a média final das notas for igual ou superior a 7, a saída deve mostrar: "O aluno XXX ficou com média de XX e está aprovado".
Se a média final ficar entre 5 e 6,9 deve mostrar que o aluno está em recuperação.
Caso a nota fique abaixo de 5, deve mostrar que o aluno reprovou.

Mostre a saída de dados no console.


I) Cálculo de viagem

Rubens quer calcular e mostrar a quantidade de litros de combustível gastos
em uma viagem de carro, sendo que seu carro faz 12 KM/L. 

Como ele não sabe fazer um programa que o auxilie nessa missão, ele te pede ajuda. 

Para efetuar o cálculo, deve-se fornecer o tempo gasto em horas na viagem e a velocidade
média durante a mesma em km/h. Assim, você conseguirá passar para Rubens qual
a distância percorrida e, em seguida, calcular quantos litros serão necessários
para a viagem que ele quer fazer. 

Mostre o valor com 3 casas decimais após o ponto.

- Entrada
A entrada deve conter dois inteiros. 

O primeiro é o tempo gasto na viagem em horas e o segundo é a velocidade média durante a mesma em km/h.

- Saída
Imprima a quantidade de litros necessária para realizar a viagem.

*/






//Exercicio 1

/*let valorDigitado = 23;
if(valorDigitado % 2 === 0){
    console.log (`O Valor digitado: ${valorDigitado} é PAR`);
}else{
    console.log(`O Valor digitado: ${valorDigitado} é IMPAR`);
}
*/

//Exercicio 2

/*let idade = 22;
if(idade <= 12 ){
    console.log(`O Usuário é Criança`);
}else if(idade >12 && idade <= 21){
    console.log(`O Usuário é Adolescente`);
}else if(idade > 21 && idade <= 60){
    console.log(`O Usuário é Adulto`)
}else{
    console.log(`O Usuário é da 3º Idade`)
}
*/

//Exercicio 3

let valor1 = 10;
let valor2 = 10;
let resultado ;
if (valor1 > valor2  ) {
    console.log(`O valor 1 é maior e a diferença é ${resultado}`)
} else if (valor2 > valor1){
    resultado = valor2 - valor1
    console.log(`O Valor 2 é maior e a diferença é ${resultado}`)
}else{
    console.log(`Os Números são iguais`)
}

