let body = document.getElementById('body')

let paragrafo = document.createElement('p')


let valor1 = +prompt("Informe o Valor 1")

let valor2 = +prompt("Informe o Valor 2")

let resultado

if (valor1 > valor2  ) {
     resultado = valor1 - valor2
     paragrafo.innerText = `O valor 1 é maior e a diferença é ${resultado}`
     body.appendChild(paragrafo)
   
} else if (valor2 > valor1){
    resultado = valor2 - valor1
    paragrafo.innerText = `O Valor 2 é maior e a diferença é ${resultado}`
    body.appendChild(paragrafo)
}else{
    paragrafo.innerText = `Os Números são iguais`
    body.appendChild(paragrafo)
}